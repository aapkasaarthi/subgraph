import { BigInt, Bytes, ByteArray } from "@graphprotocol/graph-ts"
import {
  Saarthi,
  modelUpdated, newTaskCreated,
  hospitalUpdated, newBill,
  newApproval,
  newCampaign,newCampaignDonation,campaignStopped,
  newFund, newFundDonation,
  newReport, updateReport
} from "../generated/Saarthi/Saarthi"

import {
  Campaign,CampaignHistoryItem,
  Fund, DonationItem,
  ReportItem, ReportData, ReportUpdate,
  Approval,
  Bill, Hospital, UserHospitalBill,
  TaskState, Task
} from "../generated/schema"

export function getIpfsHashFromBytes32(a: Bytes): string {
  let byteArray = ByteArray.fromHexString(a.toHexString())
  let out = new Uint8Array(34)
  out[0] = 0x12
  out[1] = 0x20
  for (let i = 0; i < 32; i++) {
    out[i + 2] = byteArray[i]
  }
  return (out as ByteArray).toBase58().toString()
}

export function handlenewTaskCreated(event: newTaskCreated): void {
  let contract = Saarthi.bind(event.address)
  let taskData = contract.SaarthiTasks(event.params.taskID)

  let taskItem = new Task(event.params.taskID.toString())
  taskItem.taskId = event.params.taskID
  taskItem.user = event.params._user
  taskItem.cost = event.params._amt
  taskItem.createdOn = event.params._time
  taskItem.totalRounds = taskData.value2
  taskItem.currentRound = BigInt.fromI32(1)
  taskItem.modelstates = new Array<string>()

  let taskStateItem = new TaskState(event.transaction.hash.toHexString())
  taskStateItem.round = BigInt.fromI32(1)
  taskStateItem.modelState = getIpfsHashFromBytes32(event.params._modelHash)
  // taskStateItem.computer = event.transaction.from
  taskStateItem.createdOn = event.params._time

  let modelstates = taskItem.modelstates
  modelstates.push(taskStateItem.id)
  taskItem.modelstates = modelstates

  taskStateItem.save()
  taskItem.save()
}

export function handlemodelUpdated(event: modelUpdated): void {
  let contract = Saarthi.bind(event.address)
  let taskData = contract.SaarthiTasks(event.params.taskID)

  let taskStateItem = new TaskState(event.transaction.hash.toHexString())
  taskStateItem.round = taskData.value1
  taskStateItem.modelState = getIpfsHashFromBytes32(event.params._modelHash)
  taskStateItem.createdOn = event.params._time

  let taskItem = Task.load(event.params.taskID.toString())
  taskItem.currentRound = taskItem.currentRound.plus(BigInt.fromI32(1))

  let modelstates = taskItem.modelstates
  modelstates.push(taskStateItem.id)
  taskItem.modelstates = modelstates

  taskStateItem.save()
  taskItem.save()

}

export function handlenewApproval(event: newApproval): void {

  let approvalItem = Approval.load(event.params._from.toHexString() + event.params._to.toHexString())

  if (approvalItem == null ) {
    approvalItem = new Approval(event.params._from.toHexString() +"-" +  event.params._to.toHexString())
    approvalItem.from = event.params._from
    approvalItem.to = event.params._to
    approvalItem.state = true
  }
  else {
    approvalItem.state = !approvalItem.state
  }
  approvalItem.save()
}

export function handlehospitalUpdated(event: hospitalUpdated): void {
  let hospitalItem = Hospital.load(event.params._hospital.toHex())
  if(hospitalItem == null){
    hospitalItem = new Hospital(event.params._hospital.toHex())
    hospitalItem.state = true
    hospitalItem.billsCount = BigInt.fromI32(0)
    hospitalItem.totalBilledAmount = BigInt.fromI32(0)
    hospitalItem.bills = new Array<string>()
  }
  else {
    hospitalItem.state = event.params._newState
  }

  hospitalItem.save()
}

export function handlenewBill(event: newBill): void {
  let billItem = new Bill(event.transaction.hash.toHex())
  billItem.amount = event.params._amount
  billItem.from = event.params._hospital
  billItem.to = event.params._billedUser

  let userHostpitalBillItem = UserHospitalBill.load(event.params._billedUser.toHex())
  if(userHostpitalBillItem == null){
    userHostpitalBillItem = new UserHospitalBill(event.params._billedUser.toHex())
    userHostpitalBillItem.totalBilledAmount = BigInt.fromI32(0)
    userHostpitalBillItem.billsCount = BigInt.fromI32(0)
    userHostpitalBillItem.bills = new Array<string>()
  }
  let userBills = userHostpitalBillItem.bills
  userBills.push(billItem.id)
  userHostpitalBillItem.bills = userBills
  userHostpitalBillItem.billsCount = userHostpitalBillItem.billsCount.plus(BigInt.fromI32(1))
  userHostpitalBillItem.totalBilledAmount = userHostpitalBillItem.totalBilledAmount.plus(event.params._amount)

  let hospitalItem = Hospital.load(event.params._hospital.toHex())
  let hospitalBills = hospitalItem.bills
  hospitalBills.push(billItem.id)
  hospitalItem.bills = hospitalBills
  hospitalItem.billsCount = hospitalItem.billsCount.plus(BigInt.fromI32(1))
  hospitalItem.totalBilledAmount = hospitalItem.totalBilledAmount.plus(event.params._amount)

  hospitalItem.save()
  userHostpitalBillItem.save()
  billItem.save()
}


export function handlenewCampaign(event: newCampaign): void {

  let campaignHistoryItem = new CampaignHistoryItem(event.transaction.hash.toHex())
  campaignHistoryItem.campaignData = getIpfsHashFromBytes32(event.params._campaignData)
  campaignHistoryItem.createdOn = event.block.timestamp
  campaignHistoryItem.amountReceived = BigInt.fromI32(0)
  campaignHistoryItem.donationCount = BigInt.fromI32(0)
  campaignHistoryItem.donatorAddresses = new Array<Bytes>()

  let campaign = Campaign.load(event.transaction.from.toHexString())

  if (campaign == null) {
    campaign = new Campaign(event.transaction.from.toHexString())
    campaign.campaigner = event.transaction.from
    campaign.campaignCount = BigInt.fromI32(0)
    campaign.amountReceived = BigInt.fromI32(0)
    campaign.donationCount = BigInt.fromI32(0)
    campaign.campaignEnabled = true
    campaign.campaignHistory = new Array<string>()
  }

  let campaignHistory = campaign.campaignHistory
  campaignHistory.push(campaignHistoryItem.id)
  campaign.campaignHistory = campaignHistory
  campaign.campaignCount = campaign.campaignCount.plus(BigInt.fromI32(1))

  campaign.save()
  campaignHistoryItem.save()
}

export function handlenewCampaignDonation(event: newCampaignDonation): void {
  let campaign = Campaign.load(event.params._campaigner.toHexString())
  let campaignHistory = campaign.campaignHistory
  let campaignHistoryID = campaignHistory[ campaignHistory.length == 0 ? 0 : campaignHistory.length - 1]
  let campaignHistoryItem = CampaignHistoryItem.load(campaignHistoryID)

  campaignHistoryItem.amountReceived = campaignHistoryItem.amountReceived.plus(event.transaction.value)
  campaignHistoryItem.donationCount = campaignHistoryItem.donationCount.plus(BigInt.fromI32(1))
  let donatorAddresses = campaignHistoryItem.donatorAddresses
  donatorAddresses.push(event.transaction.from)
  campaignHistoryItem.donatorAddresses = donatorAddresses

  campaign.donationCount = campaign.donationCount.plus(BigInt.fromI32(1))
  campaign.amountReceived = campaign.amountReceived.plus(event.transaction.value)

  campaignHistoryItem.save()
  campaign.save()
}

export function handlecampaignStopped(event:campaignStopped):void {
  let campaign = Campaign.load(event.params._campaigner.toHexString())
  campaign.campaignEnabled = false
  campaign.save()
}

export function handlenewFund(event: newFund): void {

  let fund = new Fund(event.params._fundIndex.toHexString())
  let contract = Saarthi.bind(event.address)
  fund.paymentReceiver = contract.Funds(event.params._fundIndex)
  fund.fundIndex = event.params._fundIndex
  fund.createdOn = event.block.timestamp
  fund.orgName = event.params._orgName.toString()
  fund.fundName = event.params._fundName.toString()
  fund.donationCount = BigInt.fromI32(0)
  fund.amountReceived = BigInt.fromI32(0)
  fund.donations = new Array<string>()

  fund.save()

}

export function handlenewFundDonation(event: newFundDonation): void {

  let donationItem = new DonationItem(event.transaction.hash.toHex())
  donationItem.createdOn = event.block.timestamp
  donationItem.from = event.params._sender
  donationItem.amount = event.params._amount

  let fund = Fund.load(event.params._fundIndex.toHexString())
  // fund.donationCount = fund.donationCount.plus(BigInt.fromI32(1))
  // fund.amountReceived = fund.amountReceived.plus(event.params._amount)

  // let donations = fund.donations
  // donations.push(donationItem.id)
  // fund.donations = donations

  donationItem.save()
  // fund.save()
}

export function handlenewReport(event: newReport): void {

  let reportItem = new ReportItem(event.params._index.toHex())
  reportItem.reportIndex = event.params._index
  reportItem.reporter = event.params._reporter
  reportItem.location = event.params._location.toString()
  reportItem.file = getIpfsHashFromBytes32(event.params._file)
  reportItem.details = event.params._details.toString()
  reportItem.reportedOn = event.params._time
  reportItem.updates = new Array<string>()

  let reportData = ReportData.load("0x1")
  if (reportData == null){
    reportData = new ReportData("0x1")
    reportData.totalReports = BigInt.fromI32(0)
    reportData.reports = new Array<string>()
  }

  let reports = reportData.reports
  reports.push(reportItem.id)
  reportData.reports = reports
  reportData.totalReports = reportData.totalReports.plus(BigInt.fromI32(1))

  reportItem.save()
  reportData.save()
}


export function handleupdateReport(event: updateReport): void {
  let reportUpdate = new ReportUpdate(event.transaction.hash.toHex())
  reportUpdate.update = event.params._action

  let reportItem = ReportItem.load(event.params._reportIndex.toHex())
  let updates = reportItem.updates
  updates.push(reportUpdate.id)
  reportItem.updates = updates

  reportUpdate.save()
  reportItem.save()
}

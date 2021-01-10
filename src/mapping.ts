import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Saarthi,
  modelUpdated,
  newApproval,
  newCampaign,
  newCampaignDonation,
  newFund,
  newFundDonation,
  newReport,
  newTaskCreated
} from "../generated/Saarthi/Saarthi"

import {
  Campaign,
  CampaignHistoryItem,
  Fund,
  FundItem,
  ReportItem,
  ReportData
} from "../generated/schema"

export function handlenewCampaign(event: newCampaign): void {

  let campaignHistoryItem = new CampaignHistoryItem(event.transaction.hash.toHex())
  campaignHistoryItem.campaignData = event.params._campaignData.toString()
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

  let fundItem = new FundItem(event.transaction.hash.toHex())
  fundItem.createdOn = event.block.timestamp
  fundItem.from = event.transaction.from
  fundItem.amount = event.transaction.value

  let fund = Fund.load(event.params._fundIndex.toHexString())
  fund.donationCount = fund.donationCount.plus(BigInt.fromI32(1))
  fund.amountReceived = fund.amountReceived.plus(event.params._amount)
  let donations = fund.donations
  donations.push(fundItem.id)
  fund.donations = donations

  fundItem.save()
  fund.save()
}

export function handlenewReport(event: newReport): void {

  let reportItem = new ReportItem(event.transaction.hash.toHex())
  reportItem.reportIndex = event.params._index
  reportItem.reporter = event.params._reporter
  reportItem.location = event.params._location.toString()
  reportItem.file = event.params._file
  reportItem.details = event.params._details.toString()
  reportItem.reportedOn = event.params._time;

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

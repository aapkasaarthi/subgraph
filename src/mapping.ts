import { BigInt } from "@graphprotocol/graph-ts"
import { log } from '@graphprotocol/graph-ts'

import {
  Contract,
  modelUpdated,
  newApproval,
  newCampaign,
  newCampaignDonation,
  newFund,
  newFundDonation,
  newReport,
  newTaskCreated
} from "../generated/Contract/Contract"
import { Campaign, CampaignHistoryItem } from "../generated/schema"

export function handlenewCampaign(event: newCampaign): void {

  let campaignHistoryItem = new CampaignHistoryItem(event.transaction.hash.toHex())
  campaignHistoryItem.campaignData = event.params._campaignData.toString()
  campaignHistoryItem.createdAt = event.block.timestamp

  let campaign = Campaign.load(event.transaction.from.toHexString())

  if (campaign == null) {
    campaign = new Campaign(event.transaction.from.toHexString())
    campaign.campaigner = event.transaction.from
    campaign.campaignCount = BigInt.fromI32(0)
    campaign.campaignHistory = new Array<string>();
  }

  campaign.campaignHistory.push(campaignHistoryItem.id)
  campaign.campaignCount = campaign.campaignCount.plus(BigInt.fromI32(1))

  campaign.save()
  campaignHistoryItem.save()
}



// export function handlemodelUpdated(event: modelUpdated): void {

  // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.Campaigns(...)
  // - contract.Funds(...)
  // - contract.SaarthiTasks(...)
  // - contract.UserTaskIDs(...)
  // - contract.activeCampaignCnt(...)
  // - contract.admin(...)
  // - contract.approval(...)
  // - contract.billAmounts(...)
  // - contract.campaignEnabled(...)
  // - contract.coordinatorAddress(...)
  // - contract.fundCnt(...)
  // - contract.hospitals(...)
  // - contract.nextTaskID(...)
  // - contract.paused(...)
  // - contract.reportCnt(...)
  // - contract.totalDonationAmount(...)
  // - contract.totalDonationCnt(...)
  // - contract.version(...)
// }

// export function handlenewApproval(event: newApproval): void {}

// export function handlenewCampaign(event: newCampaign): void {}

// export function handlenewCampaignDonation(event: newCampaignDonation): void {}

// export function handlenewFund(event: newFund): void {}

// export function handlenewFundDonation(event: newFundDonation): void {}

// export function handlenewReport(event: newReport): void {}

// export function handle_newTaskCreated(event: newTaskCreated): void {}

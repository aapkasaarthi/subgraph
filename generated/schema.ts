// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TaskState extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TaskState entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TaskState entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TaskState", id.toString(), this);
  }

  static load(id: string): TaskState | null {
    return store.get("TaskState", id) as TaskState | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get round(): BigInt {
    let value = this.get("round");
    return value.toBigInt();
  }

  set round(value: BigInt) {
    this.set("round", Value.fromBigInt(value));
  }

  get modelState(): Bytes {
    let value = this.get("modelState");
    return value.toBytes();
  }

  set modelState(value: Bytes) {
    this.set("modelState", Value.fromBytes(value));
  }

  get createdOn(): BigInt {
    let value = this.get("createdOn");
    return value.toBigInt();
  }

  set createdOn(value: BigInt) {
    this.set("createdOn", Value.fromBigInt(value));
  }
}

export class Task extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Task entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Task entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Task", id.toString(), this);
  }

  static load(id: string): Task | null {
    return store.get("Task", id) as Task | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get taskId(): BigInt {
    let value = this.get("taskId");
    return value.toBigInt();
  }

  set taskId(value: BigInt) {
    this.set("taskId", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get cost(): BigInt {
    let value = this.get("cost");
    return value.toBigInt();
  }

  set cost(value: BigInt) {
    this.set("cost", Value.fromBigInt(value));
  }

  get createdOn(): BigInt {
    let value = this.get("createdOn");
    return value.toBigInt();
  }

  set createdOn(value: BigInt) {
    this.set("createdOn", Value.fromBigInt(value));
  }

  get currentRound(): BigInt {
    let value = this.get("currentRound");
    return value.toBigInt();
  }

  set currentRound(value: BigInt) {
    this.set("currentRound", Value.fromBigInt(value));
  }

  get totalRounds(): BigInt {
    let value = this.get("totalRounds");
    return value.toBigInt();
  }

  set totalRounds(value: BigInt) {
    this.set("totalRounds", Value.fromBigInt(value));
  }

  get modelstates(): Array<string> {
    let value = this.get("modelstates");
    return value.toStringArray();
  }

  set modelstates(value: Array<string>) {
    this.set("modelstates", Value.fromStringArray(value));
  }
}

export class Bill extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bill entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bill entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bill", id.toString(), this);
  }

  static load(id: string): Bill | null {
    return store.get("Bill", id) as Bill | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class HospitalBill extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save HospitalBill entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save HospitalBill entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("HospitalBill", id.toString(), this);
  }

  static load(id: string): HospitalBill | null {
    return store.get("HospitalBill", id) as HospitalBill | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalBilledAmount(): BigInt {
    let value = this.get("totalBilledAmount");
    return value.toBigInt();
  }

  set totalBilledAmount(value: BigInt) {
    this.set("totalBilledAmount", Value.fromBigInt(value));
  }

  get billsCount(): BigInt {
    let value = this.get("billsCount");
    return value.toBigInt();
  }

  set billsCount(value: BigInt) {
    this.set("billsCount", Value.fromBigInt(value));
  }

  get bills(): Array<string> {
    let value = this.get("bills");
    return value.toStringArray();
  }

  set bills(value: Array<string>) {
    this.set("bills", Value.fromStringArray(value));
  }
}

export class Hospital extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Hospital entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Hospital entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Hospital", id.toString(), this);
  }

  static load(id: string): Hospital | null {
    return store.get("Hospital", id) as Hospital | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get state(): boolean {
    let value = this.get("state");
    return value.toBoolean();
  }

  set state(value: boolean) {
    this.set("state", Value.fromBoolean(value));
  }

  get bills(): Array<string> {
    let value = this.get("bills");
    return value.toStringArray();
  }

  set bills(value: Array<string>) {
    this.set("bills", Value.fromStringArray(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Approval entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Approval entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Approval", id.toString(), this);
  }

  static load(id: string): Approval | null {
    return store.get("Approval", id) as Approval | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get state(): boolean {
    let value = this.get("state");
    return value.toBoolean();
  }

  set state(value: boolean) {
    this.set("state", Value.fromBoolean(value));
  }
}

export class CampaignHistoryItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CampaignHistoryItem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CampaignHistoryItem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CampaignHistoryItem", id.toString(), this);
  }

  static load(id: string): CampaignHistoryItem | null {
    return store.get("CampaignHistoryItem", id) as CampaignHistoryItem | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get campaignData(): string {
    let value = this.get("campaignData");
    return value.toString();
  }

  set campaignData(value: string) {
    this.set("campaignData", Value.fromString(value));
  }

  get createdOn(): BigInt {
    let value = this.get("createdOn");
    return value.toBigInt();
  }

  set createdOn(value: BigInt) {
    this.set("createdOn", Value.fromBigInt(value));
  }

  get donationCount(): BigInt {
    let value = this.get("donationCount");
    return value.toBigInt();
  }

  set donationCount(value: BigInt) {
    this.set("donationCount", Value.fromBigInt(value));
  }

  get amountReceived(): BigInt {
    let value = this.get("amountReceived");
    return value.toBigInt();
  }

  set amountReceived(value: BigInt) {
    this.set("amountReceived", Value.fromBigInt(value));
  }

  get donatorAddresses(): Array<Bytes> {
    let value = this.get("donatorAddresses");
    return value.toBytesArray();
  }

  set donatorAddresses(value: Array<Bytes>) {
    this.set("donatorAddresses", Value.fromBytesArray(value));
  }
}

export class Campaign extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Campaign entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Campaign entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Campaign", id.toString(), this);
  }

  static load(id: string): Campaign | null {
    return store.get("Campaign", id) as Campaign | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get campaigner(): Bytes {
    let value = this.get("campaigner");
    return value.toBytes();
  }

  set campaigner(value: Bytes) {
    this.set("campaigner", Value.fromBytes(value));
  }

  get campaignCount(): BigInt {
    let value = this.get("campaignCount");
    return value.toBigInt();
  }

  set campaignCount(value: BigInt) {
    this.set("campaignCount", Value.fromBigInt(value));
  }

  get campaignEnabled(): boolean {
    let value = this.get("campaignEnabled");
    return value.toBoolean();
  }

  set campaignEnabled(value: boolean) {
    this.set("campaignEnabled", Value.fromBoolean(value));
  }

  get donationCount(): BigInt {
    let value = this.get("donationCount");
    return value.toBigInt();
  }

  set donationCount(value: BigInt) {
    this.set("donationCount", Value.fromBigInt(value));
  }

  get amountReceived(): BigInt {
    let value = this.get("amountReceived");
    return value.toBigInt();
  }

  set amountReceived(value: BigInt) {
    this.set("amountReceived", Value.fromBigInt(value));
  }

  get campaignHistory(): Array<string> {
    let value = this.get("campaignHistory");
    return value.toStringArray();
  }

  set campaignHistory(value: Array<string>) {
    this.set("campaignHistory", Value.fromStringArray(value));
  }
}

export class FundItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FundItem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FundItem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FundItem", id.toString(), this);
  }

  static load(id: string): FundItem | null {
    return store.get("FundItem", id) as FundItem | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdOn(): BigInt {
    let value = this.get("createdOn");
    return value.toBigInt();
  }

  set createdOn(value: BigInt) {
    this.set("createdOn", Value.fromBigInt(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Fund extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Fund entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Fund entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Fund", id.toString(), this);
  }

  static load(id: string): Fund | null {
    return store.get("Fund", id) as Fund | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get paymentReceiver(): Bytes {
    let value = this.get("paymentReceiver");
    return value.toBytes();
  }

  set paymentReceiver(value: Bytes) {
    this.set("paymentReceiver", Value.fromBytes(value));
  }

  get fundIndex(): BigInt {
    let value = this.get("fundIndex");
    return value.toBigInt();
  }

  set fundIndex(value: BigInt) {
    this.set("fundIndex", Value.fromBigInt(value));
  }

  get createdOn(): BigInt {
    let value = this.get("createdOn");
    return value.toBigInt();
  }

  set createdOn(value: BigInt) {
    this.set("createdOn", Value.fromBigInt(value));
  }

  get orgName(): string {
    let value = this.get("orgName");
    return value.toString();
  }

  set orgName(value: string) {
    this.set("orgName", Value.fromString(value));
  }

  get fundName(): string {
    let value = this.get("fundName");
    return value.toString();
  }

  set fundName(value: string) {
    this.set("fundName", Value.fromString(value));
  }

  get donationCount(): BigInt {
    let value = this.get("donationCount");
    return value.toBigInt();
  }

  set donationCount(value: BigInt) {
    this.set("donationCount", Value.fromBigInt(value));
  }

  get amountReceived(): BigInt {
    let value = this.get("amountReceived");
    return value.toBigInt();
  }

  set amountReceived(value: BigInt) {
    this.set("amountReceived", Value.fromBigInt(value));
  }

  get donations(): Array<string> {
    let value = this.get("donations");
    return value.toStringArray();
  }

  set donations(value: Array<string>) {
    this.set("donations", Value.fromStringArray(value));
  }
}

export class ReportItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ReportItem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ReportItem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ReportItem", id.toString(), this);
  }

  static load(id: string): ReportItem | null {
    return store.get("ReportItem", id) as ReportItem | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get reportIndex(): BigInt {
    let value = this.get("reportIndex");
    return value.toBigInt();
  }

  set reportIndex(value: BigInt) {
    this.set("reportIndex", Value.fromBigInt(value));
  }

  get reporter(): Bytes {
    let value = this.get("reporter");
    return value.toBytes();
  }

  set reporter(value: Bytes) {
    this.set("reporter", Value.fromBytes(value));
  }

  get location(): string {
    let value = this.get("location");
    return value.toString();
  }

  set location(value: string) {
    this.set("location", Value.fromString(value));
  }

  get file(): Bytes {
    let value = this.get("file");
    return value.toBytes();
  }

  set file(value: Bytes) {
    this.set("file", Value.fromBytes(value));
  }

  get details(): string {
    let value = this.get("details");
    return value.toString();
  }

  set details(value: string) {
    this.set("details", Value.fromString(value));
  }

  get reportedOn(): BigInt {
    let value = this.get("reportedOn");
    return value.toBigInt();
  }

  set reportedOn(value: BigInt) {
    this.set("reportedOn", Value.fromBigInt(value));
  }
}

export class ReportData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ReportData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ReportData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ReportData", id.toString(), this);
  }

  static load(id: string): ReportData | null {
    return store.get("ReportData", id) as ReportData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalReports(): BigInt {
    let value = this.get("totalReports");
    return value.toBigInt();
  }

  set totalReports(value: BigInt) {
    this.set("totalReports", Value.fromBigInt(value));
  }

  get reports(): Array<string> {
    let value = this.get("reports");
    return value.toStringArray();
  }

  set reports(value: Array<string>) {
    this.set("reports", Value.fromStringArray(value));
  }
}

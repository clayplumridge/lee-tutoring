import { StudentId } from "./student";

export type BillingType = "hourly" | "monthly";

export interface BillingInfo {
    studentId: StudentId;
    hoursPurchased: number;
    hoursUsed: number;
    hoursRemaining: number;
    billingType: BillingType;
}

export interface BillingInfoRequest {
    studentId: StudentId;
}

export interface BillingInfoResponse {
    billingInfo?: BillingInfo;
}

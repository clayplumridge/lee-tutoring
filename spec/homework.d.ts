import { StudentId } from "./student";

export interface HomeworkEntry {
    // TODO: Dates
    date: string;
    percentComplete: number;
}

export interface HomeworkRequest {
    studentId: StudentId;
    // TODO: Dates
    from?: string;
    // TODO: Dates
    to?: string;
}

export interface HomeworkResponse {
    results: HomeworkEntry[];
}

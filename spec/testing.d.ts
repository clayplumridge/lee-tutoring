import { StudentId } from "./student";

export type TestResult = SATResult | PSATResult | ACTResult;
export type TestKind = "SAT" | "PSAT" | "ACT";
export type TestType = "official" | "practice";

interface TestResultBase {
    kind: TestKind;
    type: TestType;
    studentId: StudentId;
    // TODO: find a better type than string for dates
    date: string;
}

export interface SATResult extends TestResultBase {
    kind: "SAT";

    ebrw: number;
    math: number;
}

export interface PSATResult extends TestResultBase {
    kind: "PSAT";

    reading: number;
    writing: number;
    math: number;
}

export interface ACTResult extends TestResultBase {
    kind: "ACT";

    english: number;
    math: number;
    reading: number;
    science: number;
}

export interface TestResultRequest {
    studentId: StudentId;
    // TODO: Dates
    from?: string;
    // TODO: Dates
    to?: string;
}

export interface TestResultResponse {
    studentId: StudentId;
    results: TestResult[];
}

export interface TestGoal {
    school: string;
    targets: {
        [25]: number;
        [50]: number;
        [75]: number;
    };
}

export interface TestGoalResponse {
    studentId: StudentId;
    goals: TestGoal[];
}

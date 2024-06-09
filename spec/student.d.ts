export type StudentId = string & { __DO_NOT_USE_TYPE_BRAND: "studentid" };

export type StudentStatus = "active" | "inactive";

export interface Student {
    id: StudentId;
    firstName: string;
    lastName: string;
    status: StudentStatus;
    displayImageUrl: string;
}

export interface StudentRequest {
    id: StudentId;
}

export interface StudentResponse {
    student?: Student;
}

export interface StudentSearchRequest {
    keywords: string[];
    status: StudentStatus;
}

export interface StudentSearchResponse {
    students: Student[];
}

/**
 * Requests will carry the bearer auth token anyway, so no need to populate the parent id here or anything
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MyStudentsRequest {}

import { StudentId } from "./student";
import { Tutor, TutorId } from "./tutor";

export type AppointmentId = string & { __DO_NOT_USE_TYPE_BRAND: "studentid" };
export type AppointmentType = "academic" | "testprep";

export interface Appointment {
    id: AppointmentId;
    // TODO: Find a better solution for dates
    dateTime: string;
    // Fully populating Tutor for display purposes
    tutor: Tutor;
    type: AppointmentType;
}

export interface AppointmentsRequest {
    studentId: StudentId;
    // TODO: dates
    from: string;
    to: string;
}

export interface AppointmentsResponse {
    appointments: Appointment[];
}

export interface ScheduleAppointmentRequest {
    tutorId: TutorId;
    studentId: StudentId;
    // TODO: Dates
    dateTime: string;
    durationInMinutes: number;
}

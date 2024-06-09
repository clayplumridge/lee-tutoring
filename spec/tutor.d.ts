export type TutorId = string & { __DO_NOT_USE_TYPE_BRAND: "tutor" };

export interface Tutor {
    id: TutorId;
    firstName: string;
    lastName: string;
    displayImageUrl: string;
}

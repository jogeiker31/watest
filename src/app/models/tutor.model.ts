// To parse this data:
//
//   import { Convert } from "./file";
//
//   const tutor = Convert.toTutor(json);

export interface Tutor {
    id:         number;
    first_name: string;
    last_name:  string;
    birth_date: Date;
    email:      string;
    phone:      string;
    role_id:    number;
    status:     Status;
    speciality: string;
}

export enum Status {
    Active = "active",
    Inactive = "inactive",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toTutor(json: string): Tutor[] {
        return JSON.parse(json);
    }

    public static tutorToJson(value: Tutor[]): string {
        return JSON.stringify(value);
    }
}

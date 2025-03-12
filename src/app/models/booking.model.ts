// To parse this data:
//
//   import { Convert } from "./file";
//
//   const booking = Convert.toBooking(json);

import { User } from "./user.model";

export interface Booking {
    id:         number;
    service_id: number;
    staff_id:   number;
    user_id:    number;
    date:       Date;
    start_time: string;
    end_time:   string;
    user:       User;
    staff:      Staff;
}

export interface Staff {
    id:          number;
    first_name:  string;
    last_name:   string;
    email:       string;
    phone:       string;
    speciality?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toBooking(json: string): Booking[] {
        return JSON.parse(json);
    }

    public static bookingToJson(value: Booking[]): string {
        return JSON.stringify(value);
    }
}

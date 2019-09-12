import { User } from './user.entity';

export class Offer {

    id: number;
    departurePlace: string;
    destinationPlace: string;
    seatsNumber: number;
    departureTime: string;
    departureDate: string;
    timeCreated: string;
    dateCreated: string;
    active: boolean;
    user: User;
}

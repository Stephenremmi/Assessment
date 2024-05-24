import { Invoice } from './invoice';

export class School {
    id!: number;
    name!: string;
    type!: string;
    product!: string;
    county!: string;
    registrationDate!: Date;
    contactInfo!: {
        phone: string;
        email: string;
        address: string;
    };
    schoolBalance!: number;

    invoices: Invoice[] = [];
}
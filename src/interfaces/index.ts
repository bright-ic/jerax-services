import { Response } from "express";
import { SessionData } from "express-session";
import mongoose from "mongoose";


export interface UserInterface {
    _id?: mongoose.Schema.Types.ObjectId;
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    [Key: string]: any
}

export interface Customer {
    _id?: mongoose.Schema.Types.ObjectId;
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    accessCode?: string;
    [Key: string]: any
}

export interface ValidatorErrors {
    [key: string]: string | string[];
}

export interface SanitizeData {
    [key: string]: any;
}


export interface ISessionData extends SessionData {
    flash:{[key:string] : () => any}
    user: UserInterface
}

export interface CreateTicketPayload {
    firstName: string;
    lastName: string;
    email: string;
    reason?: string;
    subject: string;
    description: string;
    status?: 'open' | 'closed';
    attachments?: string[];
}
export interface CreateTicketDocument {
    reason?: string;
    subject: string;
    description: string;
    status?: 'open' | 'closed';
    attachments?: string[];
    user: mongoose.Schema.Types.ObjectId;
}
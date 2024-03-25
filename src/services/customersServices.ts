import dotenv from 'dotenv';
import { httpRequest } from '../utils/httpUtils';

dotenv.config();

export const customersService = {

    getAll: async ({ token }: { token: string }): Promise<any[]> => {
        return await httpRequest<any[]>({ url: `${process.env.ASAS_URL}/customers`, method: 'GET', token });
    },

    getById: async ({ customerId, token }: { customerId: string, token: string }): Promise<any> => {
        return await httpRequest<any>({ url: `${process.env.ASAS_URL}/customers/${customerId}`, method: 'GET', token });
    },

    create: async ({ customerData, token }: { customerData: object, token: string }): Promise<any> => {
        return await httpRequest<any>({ url: `${process.env.ASAS_URL}/customers`, method: 'POST', token, data: customerData });
    },

    update: async ({ customerId, token, postData }: { customerId: string, token: string, postData: any }): Promise<any> => {
        return await httpRequest<any>({ url: `${process.env.ASAS_URL}/customers/${customerId}`, method: 'PUT', token, data: postData });
    },

    delete: async ({ customerId, token }: { customerId: string, token: string }): Promise<any> => {
        return await httpRequest<any>({ url: `${process.env.ASAS_URL}/customers/${customerId}`, method: 'DELETE', token });
    },
};

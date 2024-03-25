import dotenv from 'dotenv';
import { httpRequest } from '../utils/httpUtils';

dotenv.config();


export const paymentsService = {

    getAll: async ({ token }: { token: string }): Promise<any[]> => {
        return await httpRequest<any[]>({ url: `${process.env.ASAS_URL}/payments`, method: 'GET', token });
    },

    getById: async ({ paymentId, token }: { paymentId: string, token: string }): Promise<any> => {
        return await httpRequest<any>({ url: `${process.env.ASAS_URL}/payments/${paymentId}`, method: 'GET', token });
    },

    create: async ({ postData, token }: { postData: any, token: string }): Promise<any> => {
        return await httpRequest<any>({ url: `${process.env.ASAS_URL}/payments`, method: 'POST', token, data: postData });
    },

    delete: async ({ paymentId, token }: { paymentId: string, token: string }): Promise<any> => {
        return await httpRequest<any>({ url: `${process.env.ASAS_URL}/payments/${paymentId}`, method: 'DELETE', token });
    },
};

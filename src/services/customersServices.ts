import { httpRequest } from '../utils/httpUtils';

export const customersService = {

    getAll: async ({ token }: { token: string }): Promise<any[]> => {
        return await httpRequest<any[]>({ path: `/customers`, method: 'GET', token });
    },

    getById: async ({ customerId, token }: { customerId: string, token: string }): Promise<any> => {
        return await httpRequest<any>({ path: `/customers/${customerId}`, method: 'GET', token });
    },

    create: async ({ customerData, token }: { customerData: object, token: string }): Promise<any> => {
        return await httpRequest<any>({ path: `/customers`, method: 'POST', token, data: customerData });
    },

    update: async ({ customerId, token, postData }: { customerId: string, token: string, postData: any }): Promise<any> => {
        return await httpRequest<any>({ path: `/customers/${customerId}`, method: 'PUT', token, data: postData });
    },

    delete: async ({ customerId, token }: { customerId: string, token: string }): Promise<any> => {
        return await httpRequest<any>({ path: `/customers/${customerId}`, method: 'DELETE', token });
    },
};

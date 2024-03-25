import { httpRequest } from '../utils/httpUtils';

export const paymentsService = {

    getAll: async ({ token }: { token: string }): Promise<any[]> => {
        return await httpRequest<any[]>({ path: `/payments`, method: 'GET', token });
    },

    getById: async ({ paymentId, token }: { paymentId: string, token: string }): Promise<any> => {
        return await httpRequest<any>({ path: `/payments/${paymentId}`, method: 'GET', token });
    },

    create: async ({ postData, token }: { postData: any, token: string }): Promise<any> => {
        return await httpRequest<any>({ path: `/payments`, method: 'POST', token, data: postData });
    },

    delete: async ({ paymentId, token }: { paymentId: string, token: string }): Promise<any> => {
        return await httpRequest<any>({ path: `/payments/${paymentId}`, method: 'DELETE', token });
    },
};

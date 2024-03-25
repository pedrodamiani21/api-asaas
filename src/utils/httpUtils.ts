import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function httpRequest<T>({ path, method, token, data }: { path: string, method: any, token: string, data?: any }): Promise<T> {
    try {
        const url = `${process.env.ASAS_URL}${path}`;
        const requestConfig: AxiosRequestConfig = {
            method,
            url,
            headers: {
                access_token: token || '',
            },
            data: data || undefined,
        };

        const response = await axios.request<T>(requestConfig);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        console.error(`Error performing ${method} request to ${path}:`, axiosError.response?.data || axiosError.message);
        throw axiosError;
    }
}

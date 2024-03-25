import axios, { AxiosRequestConfig, AxiosError } from 'axios';
export async function httpRequest<T>({ url, method, token, data }: { url: string, method: any, token: string, data?: any }): Promise<T> {
    try {
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
        console.error(`Error performing ${method} request to ${url}:`, axiosError.response?.data || axiosError.message);
        throw axiosError;
    }
}

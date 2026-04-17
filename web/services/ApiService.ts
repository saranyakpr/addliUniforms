import ApiClient from "./apiClient";

type ApiConfig = {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    data?: any;
    params?: any;
    headers?: any;
};

export const CallApi = async ({
    url,
    method = "GET",
    data,
    params,
    headers,
}: ApiConfig) => {
    try {
        const response = await ApiClient({
            url,
            method,
            data,
            params,
            headers,
        });

        return response.data;
    } catch (error: any) {
        console.error("API ERROR:", error?.response || error.message);
        throw error;
    }
};
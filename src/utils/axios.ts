import axios, { AxiosInstance } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import * as cookie from 'cookie';
import * as setCookie from 'set-cookie-parser';

interface AxiosConfig {
    baseURL: string;
    withCredentials?: boolean;
// Add a namespace to differentiate instances
}

// Create axios instance.
export function createInstance(config: AxiosConfig): AxiosInstance {
    const { baseURL } = config;

    // Create axios instance
    const axiosInstance = axios.create({
        baseURL: baseURL,
        withCredentials: true,
    });

    createAuthRefreshInterceptor(axiosInstance, async (failedRequest) => {
        try {
            const resp = await axiosInstance.get("api/refreshToken");

            // 1a. Clear old helper cookie used in 'authorize.ts' higher order function.
            delete axiosInstance.defaults.headers.setCookie;

            const { token } = resp.data;
            // 2. Set up new access token
            const bearer = `Bearer ${token}`;
            axiosInstance.defaults.headers.Authorization = bearer;

            // 3. Set up new refresh token as cookie with namespace
            const header = resp.headers["set-cookie"];
            if (header) {
                const responseCookies = setCookie.parse(header);
                responseCookies.forEach(responseCookie => {
                    if (responseCookie) {
                  
                        axiosInstance.defaults.headers.setCookie = `${responseCookie.value}`;
                        axiosInstance.defaults.headers.cookie = cookie.serialize(
                             responseCookie!!.name,
                            responseCookie.value
                        );
                    }
                });
            }

            // 4. Set up access token of the failed request.
            failedRequest.response.config.headers.Authorization = bearer;
            return Promise.resolve();
        } catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
    });

    return axiosInstance;
}
// Define configuration options, including the base URL
const baseURL = process.env.NEXT_PUBLIC_APP_URL; // Retrieve baseURL from environment variable
if (!baseURL) {
  throw new Error("NEXT_PUBLIC_APP_URL environment variable is not defined");
}

// Create the Axios instance by passing configuration options as parameters
const axiosInstance = createInstance({
  baseURL: baseURL,

});

export default axiosInstance;

"use client";

/* eslint-disable sonarjs/prefer-immediate-return */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { envConfig } from "@core/envconfig";

const BASE_URL = envConfig.rest_api_url;

/**
 * method The HTTP method (e.g. GET, POST).
 * The URL to send the request to.
 * The data to send with the request (optional).
 * Additional configuration options (optional).

 * A promise that resolves with the response data or rejects with an error.
 */

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // NOTE: Now the header will be added dynamically on login, in packages/context/authContext.tsx.
    // So don't uncomment the below headers.
    // 'Authorization':
    //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3Byb2ZpbGVfaWQiOiJiNGNlNzY3Ny01ZDRlLTQxZGEtYjVmNi1jMjdjYWIyYjI0Y2IiLCJ1c2VyX2lkIjo0MiwiaXNTdXBlckFkbWluIjpmYWxzZSwiaWF0IjoxNzEyODI2MTIxLCJleHAiOjE3MTI5MTI1MjF9.d0inGRG8AblJflKyR8YzmrY43Ik2o_edBkGKhr-VxHg',
  },
});

interface HttpRequestProps {
  (
    method: AxiosRequestConfig["method"],
    url: AxiosRequestConfig["url"],
    data?: AxiosRequestConfig["data"],
    config?: Omit<AxiosRequestConfig, "method" | "url" | "data">,
    includeToken?: boolean
  ): Promise<AxiosResponse<any, any>>;
}

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    axiosClient.defaults.headers["Authorization"] = `bearer ${token}`;
  }
  return axiosClient;
};

export const httpRequest: HttpRequestProps = async (
  method = "get",
  url,
  data = null,
  config = {}
) => {
  // Get token from localStorage

  // Set up headers, including Authorization if token is present
  const headers = {};

  const result = await axios({
    method,
    url,
    data,
    headers,
    ...config,
  });

  return result;
};

export async function getRequest<T>(URL: string): Promise<T | void | any> {
  try {
    const response: AxiosResponse<T> = await axiosClient.get<T>(URL);

    const status = response.status;
    if (status >= 200) {
      return { status: status, data: response?.data ?? [] };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle axios specific errors
      return error;

      // Add more error handling as needed
    } else {
      // Handle other types of errors
      console.error("An unexpected error occurred:", error);
    }
  }
}

export async function postRequest<T>(
  URL: string,
  payload: object
): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axiosClient.post<T>(
      URL,
      payload
    );
    const status = response.status;
    return { status: status, data: response?.data ?? [] };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle axios specific errors
      const status = error.response?.status;
      console.error("Error status:", status);
      console.error("Error message:", error.message);
      return { status: status, data: error?.response ?? null };
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

// Put Request
export async function putRequest<T>(URL: string, payload: object) {
  try {
    const response: AxiosResponse<any> = await axiosClient.put<T>(URL, payload);
    const status = response.status;
    return { status: status, data: response?.data ?? [] };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle axios specific errors
      const status = error.response?.status;
      console.error("Error status:", status);
      console.error("Error message:", error.message);
      if (status === 401) {
      } else if (status === 500) {
        console.error("Server error - try again later.");
      }
      return { status: status, data: error?.response ?? null };
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

// Patch Request
export async function patchRequest<T>(URL: string, payload: object) {
  return await axiosClient.patch<T>(URL, payload);
}

// Delete Request
export async function deleteRequest<T>(URL: string, data: object) {
  return await axiosClient.delete<T>(URL, data);
}

// Check if the response is an error
export function isRequestError(response: AxiosResponse | number): boolean {
  if (typeof response === "number") {
    return response < 200 || response >= 300;
  }
  return response && (response.status < 200 || response.status >= 300);
}

import axios, { AxiosError } from "axios";
import {
  AuthResponse,
  AuthSuccessResponse,
  AuthFailureResponse,
} from "./interface.ts";
import { RESPONSE_ERROR_CUSTOM_STATUS } from "@/apis/client";
import { Endpoints } from "../endpoints.ts";
import { axiosConfig } from "../../utils/utils.fns.ts";


export const signIn = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  try {
    const response = await axios.post(Endpoints.Auth.Login, {
      email: email,
      password: password,
    },axiosConfig());
    return {
      sucResponse: response.data as AuthSuccessResponse,
    };
  } catch (err) {
    if (!(err instanceof AxiosError)) {
      throw err;
    }
    const errResponse =
      err.response && err.response.status === RESPONSE_ERROR_CUSTOM_STATUS
        ? err.response
        : undefined;
    if (!errResponse) {
      throw err;
    }
    return {
      failureResponse: errResponse.data as AuthFailureResponse,
    };
  }
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(Endpoints.Auth.Login, { email, password });
  return response.data; // Assume API returns user data and token
};


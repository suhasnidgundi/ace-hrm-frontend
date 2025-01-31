import type { AuthProvider } from "@refinedev/core";
import { axiosInstance } from "@/utilities/axios";
import { Role, type Employee, type ResponseLogin } from "@/types";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/utilities/constants";

export const authProvider: AuthProvider = {
  login: async ({ email, password, redirectTo }) => {
    try {
      const response = await axiosInstance.post<ResponseLogin>("/auth/login", {
        email,
        password,
      });
      const data = response.data;

      localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      return {
        success: true,
        redirectTo,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: "Login failed",
          name: "Invalid email or password",
        },
      };
    }
  },
  register: async ({ email, password, providerName }) => {
    try {
      console.log("Email : " + email);
      console.log("Password : " + password);
      console.log("Provider : " + providerName);
      return {
        success: true,
      };
    } catch (error) {
      throw new Error("Not implemented");
    }
  },
  logout: async () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem("user");

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (error) => {
    if (error.response?.status === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
  check: async () =>
    localStorage.getItem(ACCESS_TOKEN_KEY)
      ? {
          authenticated: true,
        }
      : {
          authenticated: false,
          error: {
            message: "Check failed",
            name: "Not authenticated",
          },
          logout: true,
          redirectTo: "/login",
        },
  getPermissions: async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      return {
        role: Role.EMPLOYEE,
      };
    }

    const parsedUser = JSON.parse(user);

    return {
      role: parsedUser.role,
    };
  },
  getIdentity: async () => {
    const response = await axiosInstance.get<Employee>("/me");
    const data = response?.data;

    return data;
  },
};

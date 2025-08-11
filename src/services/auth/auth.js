import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
    reducerPath: "authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/safe",
        credentials: "include",
        prepareHeaders: (headers,{getState}) => {
            const token = getState().authToken;
            if (token) {
                headers.authorization = `Bearer ${token}`;
            }
            return headers;
        }
    })
})


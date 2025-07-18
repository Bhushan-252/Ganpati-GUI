import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const LoginApi = createApi({
    reducerPath: 'LoginApi',
    baseQuery:fetchBaseQuery({
        baseUrl :"http://localhost:8080/safe",
        credentials: "include",
        // prepareHeaders:(headers) => {
        //
        // }
    }),
    endpoints:(build) =>({
            login :build.mutation({
                query(formData){
                    return{
                        url:'/login',
                        method:'POST',
                        body:formData
                    }
                }
            }),
            logout:build.mutation({
                query: () =>({
                    url:'/login/logout',
                    method :'POST',
                }),
            })
        }
    )
})
export default LoginApi.reducer
export const {useLoginMutation,useLogoutMutation} = LoginApi
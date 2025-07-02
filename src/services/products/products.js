import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/"
    }),
    tagTypes: ['Product'],
    endpoints: (build) => ({
        addPost: build.mutation({
            query(formData) {
                return {
                    url: 'products',
                    method: 'POST',
                    body: formData
                }
            }
        }),
        getProducts: build.query({
            query: ({ page = 0, size = 6, sort = 'price,asc' }) => ({
                url: 'products',
                params: { page, size, sort },
            }),
        }),
        getAdmin: build.query({
            query: () => 'safe/login/admin'
        }),
        login:build.mutation({
            query(formData){
                return{
                    url:'safe/login',
                    method:'POST',
                    body:formData
                }
            }
        })
    })
})

export const { useAddPostMutation, useGetProductsQuery, useGetAdminQuery, useLoginMutation } = productApi;
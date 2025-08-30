import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/",
        credentials: "include",
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
            query: ({page = 0, size = 6, sort = 'price,asc'}) => ({
                url: 'products',
                params: {page, size, sort},
            }),
        }),
        getProduct: build.query({
            query: (id) => ({
                url: `products/${id}`,
            })
        }),
        getProductWithFilter: build.query({
            query: ({inches, categories, page = 0, size = 6, sort}) => ({
                url: 'products/filters',
                params: {inches, categories, page, size, sort},
            })
        }),
        editProduct:build.mutation({
            query(formData){
                return{
                    url:'products',
                    method:'PUT',
                    body:formData
                }
            }
        }),
        deleteProduct:build.mutation({
            query(id){
                return {
                    url:`products/delete/${id}`,
                    method:'DELETE',
                    
                }
            }
        })
    })
})

export const {useAddPostMutation, useGetProductsQuery, useGetProductQuery,useGetProductWithFilterQuery, useDeleteProductMutation} = productApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = process.env.REACT_APP_BASE_URL;

//console.log("baseUrl", baseUrl);

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getAllCategories: builder.query({
        query: () => ({
            url:'categories',
            method:'GET'
        })
      }),
      
      getLimitedProducts:builder.query({
        query: ({num, limit}) => {
          //console.log(num, limit);
          return{
              url:`/products?offset=${num}&limit=${limit}`,
              method:'GET'
          }
        }
      }),
      getProductById: builder.query({
        query: (id) => {
            //console.log("postid", id);
            return{
                url:`products/${id}`,
                method: 'GET'
            }
        },
    }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAllCategoriesQuery, useGetLimitedProductsQuery, useGetProductByIdQuery } = productApi
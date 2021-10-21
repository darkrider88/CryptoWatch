import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '01f621fb6dmsh7c5b463f2de3e24p1493a1jsndee27904686c'
}


const baseUrl =  'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
          query: () => createRequest('/exchanges'),
        }),
        getCryptoDetails: builder.query({
          query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
          query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
        }),
      }),
    });
    
    export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;

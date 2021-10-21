import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders =  {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '01f621fb6dmsh7c5b463f2de3e24p1493a1jsndee27904686c'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

  const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

  export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
  })

  export const {useGetCryptoNewsQuery} = cryptoNewsApi;

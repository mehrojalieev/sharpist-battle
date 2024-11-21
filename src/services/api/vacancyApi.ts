import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vacancyApi = createApi({
  reducerPath: 'vacancyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://your-api-url.com' }),
  endpoints: (builder) => ({
    createVacancy: builder.mutation({
      query: (newVacancy) => ({
        url: '/vacancies',
        method: 'POST',
        body: newVacancy,
      }),
    }),
  }),
});

export const { useCreateVacancyMutation } = vacancyApi;

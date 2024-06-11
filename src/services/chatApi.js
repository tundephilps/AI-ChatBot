import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz", // Adjust the base URL as needed
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    // const token = "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0._17GqSzGRfXWNemOC31bugbYlJ4lpOhXvxeH_xebhsb-cdiy7W_qZ94Ds57TCwNlfdyCxHxnvhqvKm1jNGxuvykz6dt_Tpqx.PftFb0gr3gvizTvHXRZ5ag.YM1cp99lfvhFVj2LUfLbPS6wInTflFqoCz0tLyyowFmW_XcaUGoY3WwucgU3OVqWJjUnJnfR9ckuP55NiOl5NrGFTJOD9WbNCNlYWwhgDU3BpRf32pO3ru49VezJCljc0GIuHyCgbJExqRXYp6ku3CZzJnOpuoVM_ugBKqH_pGs.AVDOgruvV7kIYSzdm-BjVd9_tEdaVmv483Vb-Wa3kPI";

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery,
  tagTypes: ["Conversation", "conversations"],
  endpoints: (builder) => ({
    getConversationById: builder.query({
      // query: (conversation_id) => `conversation/${conversation_id}`,
      //  providesTags: ['Conversation']
      query: (conversation_id) => `conversation/${conversation_id}`,
      providesTags: (result, error, conversation_id) => [
        { type: "Conversation", id: conversation_id },
      ],
      transformResponse: (response) => {
        return response.sort((a, b) => a.id - b.id);
      },
    }),
    getAllConversation: builder.query({
      query: () => "conversation",
      providesTags: ["conversations"],
    }),
    sendMessage: builder.mutation({
      query: (data) => ({
        url: "chat",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Conversation"],
    }),
    addConversation: builder.mutation({
      query: () => ({
        url: "conversation",
        method: "POST",
      }),
      invalidatesTags: ["conversations"],
    }),
    deleteConversation: builder.mutation({
      query: (conversation_id) => ({
        url: `conversation/${conversation_id}`,
        method: "DELETE",
        body: conversation_id,
      }),
      invalidatesTags: ["conversations", "Conversation"],
    }),
  }),
});

export const {
  useConversationMutation,
  useSendMessageMutation,
  useGetConversationByIdQuery,
  useDeleteConversationMutation,
  useAddConversationMutation,
  useGetAllConversationQuery,
} = chatApi;

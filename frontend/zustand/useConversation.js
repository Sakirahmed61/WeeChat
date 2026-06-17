import {create} from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) => set({selectedConversation: conversation}),
  messages: [],
  setMessages: (messages) => set((state) => ({
    messages: typeof messages === "function" ? messages(state.messages) : messages,
  })),
  searchQuery: "",
  setSearchQuery: (searchQuery) => set({searchQuery})
}))

export default useConversation;
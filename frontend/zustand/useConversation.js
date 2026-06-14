import {create} from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) => set({selectedConversation: conversation}),
  messages: [],
  setMessages: (messages) => set({messages}),
  searchQuery: "",
  setSearchQuery: (searchQuery) => set({searchQuery})
}))

export default useConversation;
import { create } from 'zustand';

const useUserStore = create(set => ({
  user: {
    name: '',
    email: '',
    phone: '',
    isAuthenticated: false,
  },

  setName: (name) => set(state => ({
    user: { ...state.user, name },
  })),
  setEmail: (email) => set(state => ({
    user: { ...state.user, email },
  })),
  setPhone: (phone) => set(state => ({
    user: { ...state.user, phone },
  })),
  login: (name, email, phone) => set({
    user: {
      name,
      email,
      phone,
      isAuthenticated: true,
    },
  }),
  logout: () => set({
    user: {
      name: '',
      email: '',
      phone: '',
      isAuthenticated: false,
    },
  }),
}));

export default useUserStore;
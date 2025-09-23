// frontend/src/lib/auth.ts
import { User, AuthResponse } from '@/types';

export const authUtils = {
  setAuth: (authData: AuthResponse) => {
    localStorage.setItem('authToken', authData.access_token);  // Changed to match login form
    localStorage.setItem('authUser', JSON.stringify(authData.user));  // Changed to match login form
  },

  getAuth: () => {
    if (typeof window === 'undefined') return { user: null, token: null };
    
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('authUser');
    
    return {
      user: user ? JSON.parse(user) : null,
      token
    };
  },

  clearAuth: async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  },

  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem('authToken');  // Changed to match other methods
    return !!token;
  },
};
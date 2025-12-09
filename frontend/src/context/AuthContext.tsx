import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/client';
import toast from 'react-hot-toast';

interface AuthContextProps {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    name: string;
    documentNumber?: string;
  }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem('token'),
  );

  const isAuthenticated = !!token;

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post('/auth/login', { email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      toast.success(res.data.message || 'Sesión iniciada');
    } catch (error: any) {
      const msg =
        error?.response?.data?.message || 'Error al iniciar sesión';
      toast.error(msg);
      throw error;
    }
  };

  const register = async (data: {
    email: string;
    password: string;
    name: string;
    documentNumber?: string;
  }) => {
    try {
      const res = await api.post('/auth/register', data);
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      toast.success(res.data.message || 'Registro correcto');
    } catch (error: any) {
      const msg =
        error?.response?.data?.message || 'Error al registrarse';
      toast.error(msg);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    toast('Sesión cerrada');
  };

  useEffect(() => {
    // Podrías validar token aquí si quieres
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return ctx;
};

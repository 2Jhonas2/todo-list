import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    documentNumber: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register({
      email: form.email,
      password: form.password,
      name: form.name,
      documentNumber: form.documentNumber || undefined,
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Registro</h1>
        <div>
          <label className="block mb-1">Nombre</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Correo</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Documento (opcional)</label>
          <input
            name="documentNumber"
            value={form.documentNumber}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-900 border border-slate-700"
          />
        </div>
        <div>
          <label className="block mb-1">Contraseña</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-900 border border-slate-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 py-2 rounded font-semibold"
        >
          Crear cuenta
        </button>
        <p className="text-center text-sm mt-2">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-sky-400 underline">
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;

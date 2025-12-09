import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      {/* Fondo con gradiente radial */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0ea5e9_0,_transparent_55%),radial-gradient(circle_at_bottom,_#6366f1_0,_transparent_55%)] opacity-30" />
      </div>

      <div className="w-full max-w-md px-4">
        <div className="backdrop-blur-xl bg-slate-900/70 border border-slate-700/60 shadow-2xl shadow-sky-900/40 rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
          {/* Encabezado */}
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/40">
              <span className="text-xl font-bold text-sky-400">T-L</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Inicia sesión
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Accede a tus tareas y mantén todo bajo control.
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-200">
                Correo
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2.5 text-sm shadow-inner outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-200">
                Contraseña
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2.5 text-sm shadow-inner outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400 hover:shadow-sky-400/50 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Accediendo…' : 'Entrar'}
            </button>
          </form>

          {/* Pie */}
          <p className="mt-6 text-center text-xs sm:text-sm text-slate-400">
            ¿No tienes cuenta?{' '}
            <Link
              to="/register"
              className="font-medium text-sky-400 hover:text-sky-300 underline underline-offset-4"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

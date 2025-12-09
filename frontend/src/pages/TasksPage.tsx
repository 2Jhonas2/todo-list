import React, { useEffect, useState } from 'react';
import api from '../api/client';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

const TasksPage: React.FC = () => {
  const { logout } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [form, setForm] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (error: any) {
      toast.error('Error al cargar tareas');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);
    try {
      const res = await api.post('/tasks', form);
      setTasks((prev) => [res.data, ...prev]);
      setForm({ title: '', description: '' });
      toast.success('Tarea agregada');
    } catch {
      toast.error('No se pudo agregar la tarea');
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (id: number) => {
    try {
      const res = await api.patch(`/tasks/${id}/toggle`);
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? res.data : t)),
      );
    } catch {
      toast.error('No se pudo actualizar la tarea');
    }
  };

  const deleteTask = async (id: number) => {
    if (!confirm('¿Eliminar esta tarea?')) return;
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((prev) => prev.filter((t) => t.id !== id));
      toast.success('Tarea eliminada');
    } catch {
      toast.error('No se pudo eliminar la tarea');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <h1 className="text-xl font-bold">Mis tareas</h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
        >
          Cerrar sesión
        </button>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-4 rounded-lg mb-6 space-y-3"
        >
          <h2 className="font-semibold mb-2">Agregar tarea</h2>
          <input
            name="title"
            placeholder="Título"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-900 border border-slate-700 mb-2"
          />
          <textarea
            name="description"
            placeholder="Descripción (opcional)"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-900 border border-slate-700"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded"
          >
            {loading ? 'Guardando...' : 'Agregar'}
          </button>
        </form>

        <section className="space-y-2">
          {tasks.length === 0 && (
            <p className="text-slate-400">No tienes tareas aún.</p>
          )}
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-slate-800 rounded px-4 py-2"
            >
              <div>
                <div
                  className={`font-semibold ${
                    task.completed ? 'line-through text-slate-400' : ''
                  }`}
                >
                  {task.title}
                </div>
                {task.description && (
                  <div className="text-sm text-slate-400">
                    {task.description}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="text-sm bg-emerald-500 hover:bg-emerald-600 px-2 py-1 rounded"
                >
                  {task.completed ? 'Desmarcar' : 'Completar'}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default TasksPage;

import { useState } from "react";
import { LockKeyhole, LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminShell from "../components/admin/AdminShell";
import { adminApi } from "../lib/api";
import usePageMeta from "../hooks/usePageMeta";

export default function AdminLoginPage({ theme, toggleTheme }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [state, setState] = useState({ loading: false, error: "" });
  const navigate = useNavigate();
  usePageMeta({
    title: "Admin sign in — Kanwar Devrath",
    description: "Secure portfolio message administration.",
    path: "/admin/login",
  });

  const submit = async (event) => {
    event.preventDefault();
    setState({ loading: true, error: "" });
    try {
      const { data } = await adminApi.post("/login", form);
      localStorage.setItem("admin-token", data.token);
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      setState({
        loading: false,
        error: error.response?.data?.message || "Unable to sign in.",
      });
    }
  };

  return (
    <AdminShell title="Sign in" theme={theme} toggleTheme={toggleTheme}>
      <div className="page-shell grid min-h-[calc(100vh-4rem)] place-items-center py-12">
        <form onSubmit={submit} className="glass w-full max-w-sm rounded-2xl p-6">
          <span className="grid size-10 place-items-center rounded-xl bg-violet-500/10 text-violet-500">
            <LockKeyhole size={19} />
          </span>
          <h2 className="mt-5 font-display text-xl font-bold">Welcome back</h2>
          <p className="text-muted mt-2 text-xs leading-5">Sign in to manage portfolio enquiries.</p>
          <label className="text-muted mt-6 block text-xs font-medium">
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="theme-field mt-2 w-full rounded-lg px-3.5 py-3 text-sm outline-none focus:border-violet-500"
            />
          </label>
          <label className="text-muted mt-4 block text-xs font-medium">
            Password
            <input
              type="password"
              required
              minLength={8}
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              className="theme-field mt-2 w-full rounded-lg px-3.5 py-3 text-sm outline-none focus:border-violet-500"
            />
          </label>
          {state.error && <p role="alert" className="mt-4 text-xs text-red-500">{state.error}</p>}
          <button
            disabled={state.loading}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-violet-500 px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {state.loading && <LoaderCircle size={16} className="animate-spin" />}
            {state.loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </AdminShell>
  );
}

import { useCallback, useEffect, useState } from "react";
import {
  Archive,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Inbox,
  LoaderCircle,
  MailCheck,
  Search,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminShell from "../components/admin/AdminShell";
import { adminApi } from "../lib/api";
import usePageMeta from "../hooks/usePageMeta";

const statuses = ["all", "new", "read", "replied", "archived"];

const badgeStyles = {
  new: "bg-violet-500/10 text-violet-500",
  read: "bg-cyan-500/10 text-cyan-500",
  replied: "bg-emerald-500/10 text-emerald-500",
  archived: "bg-slate-500/10 text-slate-500",
};

export default function AdminDashboardPage({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState(null);
  const [filters, setFilters] = useState({ search: "", status: "all", page: 1 });
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });
  const [state, setState] = useState({ loading: true, error: "", actionId: "" });

  usePageMeta({
    title: "Message dashboard — Kanwar Devrath",
    description: "Manage portfolio contact messages.",
    path: "/admin/dashboard",
  });

  const handleAuthError = useCallback(
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem("admin-token");
        navigate("/admin/login", { replace: true });
        return true;
      }
      return false;
    },
    [navigate],
  );

  const loadMessages = useCallback(async () => {
    setState((current) => ({ ...current, loading: true, error: "" }));
    try {
      const { data } = await adminApi.get("/messages", {
        params: {
          page: filters.page,
          limit: 10,
          search: filters.search || undefined,
          status: filters.status === "all" ? undefined : filters.status,
        },
      });
      setMessages(data.messages);
      setPagination(data.pagination);
      setState((current) => ({ ...current, loading: false }));
    } catch (error) {
      if (!handleAuthError(error)) {
        setState((current) => ({
          ...current,
          loading: false,
          error: error.response?.data?.message || "Unable to load messages.",
        }));
      }
    }
  }, [filters, handleAuthError]);

  const loadStats = useCallback(async () => {
    try {
      const { data } = await adminApi.get("/messages/stats");
      setStats(data.stats);
    } catch (error) {
      handleAuthError(error);
    }
  }, [handleAuthError]);

  useEffect(() => {
    const timer = window.setTimeout(loadMessages, 250);
    return () => window.clearTimeout(timer);
  }, [loadMessages]);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  const updateStatus = async (id, status) => {
    setState((current) => ({ ...current, actionId: id }));
    try {
      await adminApi.patch(`/messages/${id}/status`, { status });
      await Promise.all([loadMessages(), loadStats()]);
    } catch (error) {
      if (!handleAuthError(error)) {
        setState((current) => ({
          ...current,
          error: error.response?.data?.message || "Unable to update message.",
        }));
      }
    } finally {
      setState((current) => ({ ...current, actionId: "" }));
    }
  };

  const removeMessage = async (id) => {
    if (!window.confirm("Delete this message permanently?")) return;
    setState((current) => ({ ...current, actionId: id }));
    try {
      await adminApi.delete(`/messages/${id}`);
      await Promise.all([loadMessages(), loadStats()]);
    } catch (error) {
      if (!handleAuthError(error)) {
        setState((current) => ({
          ...current,
          error: error.response?.data?.message || "Unable to delete message.",
        }));
      }
    } finally {
      setState((current) => ({ ...current, actionId: "" }));
    }
  };

  const actionButtons = (message) => (
    <div className="flex flex-wrap gap-1.5">
      {message.status === "new" && (
        <button onClick={() => updateStatus(message._id, "read")} className="admin-action" title="Mark read">
          <CheckCheck size={14} />
        </button>
      )}
      {message.status !== "replied" && (
        <button onClick={() => updateStatus(message._id, "replied")} className="admin-action" title="Mark replied">
          <MailCheck size={14} />
        </button>
      )}
      {message.status !== "archived" && (
        <button onClick={() => updateStatus(message._id, "archived")} className="admin-action" title="Archive">
          <Archive size={14} />
        </button>
      )}
      <button onClick={() => removeMessage(message._id)} className="admin-action text-red-500" title="Delete">
        <Trash2 size={14} />
      </button>
    </div>
  );

  const statCards = [
    { label: "Total messages", value: stats?.total ?? "—", icon: Inbox },
    { label: "New messages", value: stats?.new ?? "—", icon: MailCheck },
    { label: "Replied", value: stats?.replied ?? "—", icon: CheckCheck },
    { label: "This month", value: stats?.thisMonth ?? "—", icon: Archive },
  ];

  return (
    <AdminShell title="Messages" theme={theme} toggleTheme={toggleTheme}>
      <div className="page-shell py-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map(({ label, value, icon: Icon }) => (
            <div key={label} className="glass rounded-2xl p-4">
              <Icon size={17} className="text-violet-500" />
              <p className="text-subtle mt-4 text-[10px] uppercase tracking-[.14em]">{label}</p>
              <p className="mt-1 font-display text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        <section className="glass mt-5 overflow-hidden rounded-2xl">
          <div className="theme-border flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="theme-field flex items-center gap-2 rounded-lg px-3">
              <Search size={15} className="text-subtle" />
              <input
                value={filters.search}
                onChange={(event) =>
                  setFilters((current) => ({ ...current, search: event.target.value, page: 1 }))
                }
                placeholder="Search name, email or subject"
                className="w-full bg-transparent py-2.5 text-sm outline-none sm:w-64"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setFilters((current) => ({ ...current, status, page: 1 }))}
                  className={`rounded-lg px-3 py-2 text-[11px] font-semibold capitalize ${
                    filters.status === status
                      ? "bg-violet-500 text-white"
                      : "text-muted hover:bg-violet-500/8"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {state.error && <p role="alert" className="p-4 text-sm text-red-500">{state.error}</p>}
          {state.loading ? (
            <div className="grid min-h-64 place-items-center">
              <LoaderCircle className="animate-spin text-violet-500" />
            </div>
          ) : !messages.length ? (
            <div className="grid min-h-64 place-items-center p-6 text-center">
              <div>
                <Inbox className="text-subtle mx-auto" />
                <p className="mt-3 text-sm font-semibold">No messages found</p>
                <p className="text-subtle mt-1 text-xs">Try a different search or status filter.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left">
                  <thead className="text-subtle bg-violet-500/[0.035] text-[10px] uppercase tracking-[.12em]">
                    <tr>
                      <th className="px-4 py-3">Sender</th>
                      <th className="px-4 py-3">Subject & message</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Received</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((message) => (
                      <tr key={message._id} className="theme-border border-t align-top">
                        <td className="px-4 py-4">
                          <p className="text-sm font-semibold">{message.name}</p>
                          <a href={`mailto:${message.email}`} className="text-subtle text-xs hover:text-violet-500">
                            {message.email}
                          </a>
                        </td>
                        <td className="max-w-md px-4 py-4">
                          <p className="text-sm font-semibold">{message.subject}</p>
                          <p className="text-muted mt-1 line-clamp-2 text-xs leading-5">{message.message}</p>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${badgeStyles[message.status]}`}>
                            {message.status}
                          </span>
                        </td>
                        <td className="text-subtle whitespace-nowrap px-4 py-4 text-xs">
                          {new Date(message.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4">
                          {state.actionId === message._id ? <LoaderCircle size={15} className="animate-spin" /> : actionButtons(message)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="divide-y theme-border md:hidden">
                {messages.map((message) => (
                  <article key={message._id} className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{message.name}</p>
                        <a href={`mailto:${message.email}`} className="text-subtle text-xs">{message.email}</a>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${badgeStyles[message.status]}`}>
                        {message.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">{message.subject}</h3>
                    <p className="text-muted mt-1 text-xs leading-5">{message.message}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-subtle text-[10px]">{new Date(message.createdAt).toLocaleDateString()}</span>
                      {state.actionId === message._id ? <LoaderCircle size={15} className="animate-spin" /> : actionButtons(message)}
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          <div className="theme-border flex items-center justify-between border-t p-4">
            <p className="text-subtle text-xs">{pagination.total} messages</p>
            <div className="flex items-center gap-2">
              <button
                disabled={pagination.page <= 1}
                onClick={() => setFilters((current) => ({ ...current, page: current.page - 1 }))}
                className="admin-action disabled:opacity-30"
                aria-label="Previous page"
              >
                <ChevronLeft size={15} />
              </button>
              <span className="text-muted text-xs">{pagination.page} / {pagination.pages}</span>
              <button
                disabled={pagination.page >= pagination.pages}
                onClick={() => setFilters((current) => ({ ...current, page: current.page + 1 }))}
                className="admin-action disabled:opacity-30"
                aria-label="Next page"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}

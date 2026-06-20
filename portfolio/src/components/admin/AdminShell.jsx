import { ArrowLeft, LogOut, Moon, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminShell({ children, theme, toggleTheme, title }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin-token");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen">
      <header className="theme-border sticky top-0 z-30 border-b bg-[var(--nav)] backdrop-blur-xl">
        <div className="page-shell flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="Return to portfolio" className="glass grid size-9 place-items-center rounded-lg">
              <ArrowLeft size={16} />
            </Link>
            <div>
              <p className="text-subtle text-[9px] uppercase tracking-[.16em]">Portfolio admin</p>
              <h1 className="font-display text-sm font-bold">{title}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={toggleTheme} className="glass grid size-9 place-items-center rounded-lg" aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            {title !== "Sign in" && (
              <button onClick={logout} className="glass grid size-9 place-items-center rounded-lg" aria-label="Log out">
                <LogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/portfolio/Navbar";
import Footer from "./components/portfolio/Footer";
import HomePage from "./pages/HomePage";
import ProjectCaseStudyPage from "./pages/ProjectCaseStudyPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/routing/ScrollToTop";
import useTheme from "./hooks/useTheme";

function ProtectedAdminRoute({ children }) {
  return localStorage.getItem("admin-token") ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="theme-page min-h-screen overflow-hidden">
      <ScrollToTop />
      {!isAdmin && <Navbar theme={theme} toggleTheme={toggleTheme} />}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
            <Route
              path="/admin/login"
              element={
                localStorage.getItem("admin-token") ? (
                  <Navigate to="/admin/dashboard" replace />
                ) : (
                  <AdminLoginPage theme={theme} toggleTheme={toggleTheme} />
                )
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedAdminRoute>
                  <AdminDashboardPage theme={theme} toggleTheme={toggleTheme} />
                </ProtectedAdminRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      {!isAdmin && <Footer />}
    </div>
  );
}

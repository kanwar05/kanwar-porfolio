import { useState } from "react";
import axios from "axios";
import { CheckCircle2, LoaderCircle, Mail, MapPin, Send, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../../data/site";
import Section from "./Section";

const initialForm = { name: "", email: "", subject: "", message: "" };
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const updateField = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const { data } = await axios.post(`${API_URL}/api/contact`, form);
      setToast({ type: "success", message: data.message });
      setForm(initialForm);
    } catch (error) {
      setToast({
        type: "error",
        message: error.response?.data?.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
      window.setTimeout(() => setToast(null), 5000);
    }
  };

  return (
    <Section id="contact">
      <div className="page-shell">
        <div className="glass relative overflow-hidden rounded-3xl p-5 sm:p-7 lg:p-9">
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative grid gap-9 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <span className="eyebrow">06 / Contact</span>
              <h2 className="section-title">Have a good problem to solve?</h2>
              <p className="section-copy">
                Tell me what you’re building, where you’re stuck, or what kind of
                teammate you’re looking for. I’ll get back to you soon.
              </p>
              <div className="text-muted mt-7 space-y-3 text-xs">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-violet-500">
                  <Mail size={18} className="text-violet-300" /> {profile.email}
                </a>
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-cyan-300" /> {profile.location}
                </p>
              </div>
            </div>

            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              ].map(({ label, ...field }) => (
                <label key={field.name} className="text-muted text-xs font-medium">
                  {label}
                  <input
                    {...field}
                    value={form[field.name]}
                    onChange={updateField}
                    required
                    maxLength={field.name === "name" ? 80 : 120}
                    className="theme-field mt-2 w-full rounded-lg px-3.5 py-3 text-sm outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-400/10"
                  />
                </label>
              ))}
              <label className="text-muted text-xs font-medium sm:col-span-2">
                Subject
                <input
                  name="subject"
                  value={form.subject}
                  onChange={updateField}
                  required
                  maxLength={120}
                  placeholder="What would you like to discuss?"
                  className="theme-field mt-2 w-full rounded-lg px-3.5 py-3 text-sm outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-400/10"
                />
              </label>
              <label className="text-muted text-xs font-medium sm:col-span-2">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  placeholder="A little context goes a long way..."
                  className="theme-field mt-2 w-full resize-none rounded-lg px-3.5 py-3 text-sm outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-400/10"
                />
              </label>
              <button
                disabled={loading}
                className="theme-button mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
              >
                {loading ? <LoaderCircle className="animate-spin" size={19} /> : <Send size={18} />}
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
            role="status"
            className={`fixed bottom-5 right-5 z-[70] flex max-w-sm items-center gap-3 rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-xl ${
              toast.type === "success"
                ? "border-emerald-400/20 bg-emerald-950/90 text-emerald-100"
                : "border-red-400/20 bg-red-950/90 text-red-100"
            }`}
          >
            {toast.type === "success" ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
            <span className="text-sm">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

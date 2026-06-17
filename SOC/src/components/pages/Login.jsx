import { useState } from "react";
import logo from "../../assets/cuj-logo.png";

export default function Login({ onLogin }) {
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", name: "", rollno: "", sem: "5", dept: "CSE" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) { setError("Please fill all required fields."); return; }
    if (tab === "register" && !form.name) { setError("Please enter your name."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fbf7ec] flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-emerald-500/4 blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md">

        {/* University header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full border-2 border-yellow-500/40 p-1 bg-[#f5efdc] shadow-xl shadow-black/10">
              <img src={logo} alt="CUJ Logo" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <h1 className="font-['Syne',sans-serif] text-xl font-bold text-[#1a2540] leading-tight">
            Central University of Jharkhand
          </h1>
          <p className="text-sm text-yellow-400/80 font-medium mt-1">
            Department of Computer Science & Engineering
          </p>
          <p className="text-xs text-[#5a6a85] mt-1">Knowledge To Wisdom</p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent mx-auto mt-3" />
          <p className="text-[11px] text-[#5a6a85] mt-2 tracking-widest uppercase">Smart Student Platform</p>
        </div>

        {/* Form card */}
        <div className="bg-[#f5efdc] border border-white/[0.08] rounded-2xl p-6 shadow-2xl shadow-black/60">

          {/* Tabs */}
          <div className="flex gap-0.5 bg-[#ece4c8] rounded-xl p-1 mb-6">
            {["login","register"].map(t => (
              <button key={t} onClick={() => { setTab(t); setError(""); }}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer border-0
                  ${tab === t ? "bg-[#fbf7ec] text-[#1a2540] shadow shadow-black/10" : "bg-transparent text-[#5a6a85] hover:text-[#1a2540]"}`}>
                {t === "login" ? "Sign In" : "Register"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="flex flex-col gap-3.5">
            {tab === "register" && (
              <div>
                <label className="text-[11px] text-[#5a6a85] mb-1.5 block font-medium">Full name</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Aryan Kumar"
                  className="w-full bg-[#ece4c8] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-[#1a2540] placeholder-[#5a6a85] outline-none focus:border-blue-500/50 transition-colors" />
              </div>
            )}

            {tab === "register" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#5a6a85] mb-1.5 block font-medium">Roll number</label>
                  <input name="rollno" value={form.rollno} onChange={handle} placeholder="23CUCSE001"
                    className="w-full bg-[#ece4c8] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-[#1a2540] placeholder-[#5a6a85] outline-none focus:border-blue-500/50 transition-colors" />
                </div>
                <div>
                  <label className="text-[11px] text-[#5a6a85] mb-1.5 block font-medium">Semester</label>
                  <select name="sem" value={form.sem} onChange={handle}
                    className="w-full bg-[#ece4c8] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-[#1a2540] outline-none focus:border-blue-500/50 transition-colors cursor-pointer">
                    {[1,2,3,4,5,6,7,8].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="text-[11px] text-[#5a6a85] mb-1.5 block font-medium">University email</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="aryan@cuj.ac.in"
                className="w-full bg-[#ece4c8] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-[#1a2540] placeholder-[#5a6a85] outline-none focus:border-blue-500/50 transition-colors" />
            </div>

            <div>
              <label className="text-[11px] text-[#5a6a85] mb-1.5 block font-medium">Password</label>
              <input name="password" type="password" value={form.password} onChange={handle} placeholder="••••••••"
                className="w-full bg-[#ece4c8] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-[#1a2540] placeholder-[#5a6a85] outline-none focus:border-blue-500/50 transition-colors" />
            </div>

            {tab === "login" && (
              <div className="flex justify-end">
                <button type="button" className="text-[11px] text-blue-400 hover:text-blue-300 cursor-pointer bg-transparent border-0">
                  Forgot password?
                </button>
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-xs text-red-400">{error}</div>
            )}

            <button type="submit" disabled={loading}
              className={`w-full py-2.5 rounded-xl text-sm font-semibold text-white border-0 cursor-pointer transition-all mt-1
                ${loading ? "bg-blue-500/50 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 active:scale-[0.98]"}`}>
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                  {tab === "login" ? "Signing in…" : "Creating account…"}
                </span>
              ) : tab === "login" ? "Sign in to platform" : "Create account"}
            </button>
          </form>

          {tab === "login" && (
            <>
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-white/[0.07]" />
                <span className="text-[11px] text-[#5a6a85]">or continue with</span>
                <div className="flex-1 h-px bg-white/[0.07]" />
              </div>
              <button
                onClick={() => { setLoading(true); setTimeout(onLogin, 1000); }}
                className="w-full py-2.5 rounded-xl text-sm font-medium border border-white/[0.1] bg-transparent text-[#1a2540] hover:bg-black/5 transition-all cursor-pointer flex items-center justify-center gap-2">
                <span className="text-base">🎓</span> Continue with CUJ SSO
              </button>
            </>
          )}
        </div>

        {/* Footer note */}
        <p className="text-center text-[11px] text-[#5a6a85] mt-5 leading-relaxed">
          Access restricted to CUJ CSE students and faculty.<br />
          Use your <span className="text-blue-400">@cuj.ac.in</span> email to register.
        </p>
      </div>
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Send,
  Wallet,
  CreditCard,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Index() {
const [email, setEmail] = React.useState("");
const [joined, setJoined] = React.useState(false);
const [loading, setLoading] = React.useState(false);

const handleWaitlist = async () => {
  if (!email) return;

  try {
    setLoading(true);

    // Example API call
    // Replace with your backend / Supabase / Firebase logic
    await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setJoined(true);
    setEmail("");
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="bg-[#FFF7F3] text-[#1F2937] overflow-x-hidden font-[Poppins]">
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] bg-[#FFD7C2]/50 blur-3xl rounded-full" />
        <div className="absolute top-[20%] right-[-120px] w-[340px] h-[340px] bg-[#D9CCFF]/50 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] left-[30%] w-[340px] h-[340px] bg-[#FFE8A3]/40 blur-3xl rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#6C5CE7] flex items-center justify-center shadow-lg shadow-violet-300/30">
              <span className="text-white text-lg font-bold">₹</span>
            </div>

            <div>
              <h1 className="font-bold text-xl leading-none">
                Finsteps
              </h1>

              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mt-1">
                finance app
              </p>
            </div>
          </div>

          {/* NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {["Features", "Solutions", "Pricing", "Resources"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-black transition"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            {/* <button className="hidden md:block text-sm font-semibold text-gray-600 hover:text-black">
              Sign in
            </button>

            <Link
              to="/dashboard"
              className="bg-[#6C5CE7] hover:bg-[#5A4BE0] text-white px-5 py-3 rounded-2xl font-semibold shadow-xl shadow-violet-300/40 transition"
            >
              Open App
            </Link> */}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-8 lg:pt-14 pb-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="relative">
            {/* floating shapes */}
            <div className="absolute top-0 right-20 text-[#FFD54F]">
              <Star className="w-6 h-6 fill-[#FFD54F]" />
            </div>

            <div className="absolute top-20 right-0 w-5 h-5 rounded-full bg-[#FFD54F]" />
            <div className="absolute top-36 right-24 w-3 h-3 rounded-full bg-[#6C5CE7]" />

            {/* heading */}
            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
              A smarter
              <br />
              way to manage
              <br />
              <span className="text-[#6C5CE7]">
                your money
              </span>
            </h1>

            {/* desc */}
            <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-lg">
              A modern, playful finance app with pastel
              colors, rounded cards, and friendly
              illustrations built for the next generation.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
  {/* Main CTA */}
  {/* <Link
    to="/dashboard"
    className="group bg-[#6C5CE7] hover:bg-[#5A4BE0] text-white px-7 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-2xl shadow-violet-300/40 transition hover:-translate-y-0.5"
  >
    Get Started
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
  </Link> */}

  {/* Waitlist Card */}
  <div className="bg-white/90 backdrop-blur-xl border border-[#ECE8FF] shadow-lg rounded-3xl p-2 flex items-center gap-2 w-full sm:w-auto">
    <div className="flex-1 min-w-[220px]">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-transparent outline-none px-4 py-3 text-sm text-[#2B2434] placeholder:text-gray-400"
      />
    </div>

    <button
      onClick={handleWaitlist}
      disabled={loading || joined}
      className={`px-5 py-3 rounded-2xl font-semibold text-sm transition-all ${
        joined
          ? "bg-green-500 text-white"
          : "bg-[#6C5CE7] hover:bg-[#5A4BE0] text-white"
      }`}
    >
      {loading
        ? "Joining..."
        : joined
        ? "Joined ✓"
        : "Join Waitlist"}
    </button>
  </div>
</div></div>
{/* 
            stats
            <div className="flex gap-10 mt-14">
              {[
                ["$4.5B+", "Transactions"],
                ["2M+", "Active Users"],
                ["15x", "Avg. Growth"],
              ].map(([v, l]) => (
                <div key={l}>
                  <h3 className="text-3xl font-bold">
                    {v}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {l}
                  </p>
                </div>
              ))}
            </div> */}

            {/* character */}
            <div className="mt-12 relative">
              <img
                src="https://cdn.dribbble.com/userupload/11332963/file/original-29c6a58e1d3266df89e26db5bbf8ef55.png?resize=1024x768"
                alt=""
                className="w-[420px] max-w-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">
<img
  src="/Finance.svg"
  alt="Finance Illustration"
  className="w-[420px] max-w-full object-contain"
/>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">
        <div className="text-center">
          <span className="bg-[#EEE8FF] text-[#6C5CE7] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest">
            Features
          </span>

          <h2 className="text-5xl font-extrabold mt-6">
            Everything in one place
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg">
            Powerful features designed to make your
            financial life simple and exciting.
          </p>
        </div>

        {/* feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              emoji: "💳",
              title: "Smart Payments",
              desc: "Instant transfers and bill splits with zero hidden fees.",
              bg: "bg-[#F0EBFF]",
            },
            {
              emoji: "🏦",
              title: "Savings Goals",
              desc: "Set goals and watch your savings grow automatically.",
              bg: "bg-[#DFF5EF]",
            },
            {
              emoji: "📈",
              title: "Easy Investing",
              desc: "Start investing with just ₹100 directly from the app.",
              bg: "bg-[#FFF1D6]",
            },
            {
              emoji: "🔒",
              title: "Secure Banking",
              desc: "Biometric auth and advanced fraud protection.",
              bg: "bg-[#FFE8E2]",
            },
            {
              emoji: "📊",
              title: "Analytics",
              desc: "AI-powered insights that track your spending.",
              bg: "bg-[#EDE7FF]",
            },
            {
              emoji: "🌍",
              title: "Global Transfers",
              desc: "Transfer money internationally with low fees.",
              bg: "bg-[#DDF6FB]",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`${item.bg} rounded-[32px] p-8 shadow-sm border border-white`}
            >
              <div className="text-5xl">
                {item.emoji}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* PHONE COMPONENT */
function PhoneCard({
  children,
  large = false,
}: {
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`bg-black rounded-[42px] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.18)]
      ${large ? "w-[340px] h-[690px]" : "w-[250px] h-[560px]"}`}
    >
      <div className="w-full h-full bg-white rounded-[34px] overflow-hidden relative">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50" />
        <div className="pt-7 h-full">{children}</div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blush-purple rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base">₹</span>
            </div>
            <span className="text-blush-dark font-bold text-xl">finsteps</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-blush-gray">
            {["Home","Payments","Savings","Investments","Profile"].map(item => (
              <button
                key={item}
                onClick={() => setActiveNav(item.toLowerCase())}
                className={`transition ${activeNav === item.toLowerCase() ? "text-blush-purple" : "hover:text-blush-dark"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 bg-blush-peach rounded-xl flex items-center justify-center">
              <span>🔔</span>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blush-purple rounded-full" />
            </button>
            <div className="w-9 h-9 bg-blush-coral rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
              TP
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting + Balance Hero */}
        <div className="bg-blush-bg rounded-3xl p-8 mb-8 relative overflow-hidden">
          {/* decorative bg */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blush-purple/20 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-white/80 font-medium mb-1">Good morning 👋</p>
              <h1 className="text-3xl font-extrabold text-white mb-4">Welcome back, Tarun!</h1>
              <div className="flex items-end gap-3">
                <div>
                  <p className="text-white/70 text-sm">Total Balance</p>
                  <p className="text-white font-extrabold text-4xl tracking-tight">₹12,45,680</p>
                </div>
                <span className="bg-blush-mint text-blush-teal text-xs font-bold px-3 py-1.5 rounded-xl mb-1">+12.5% ↑</span>
              </div>
            </div>
            {/* Quick action buttons */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: "💸", label: "Send", color: "bg-white/20" },
                { icon: "💰", label: "Receive", color: "bg-white/20" },
                { icon: "🧾", label: "Pay Bills", color: "bg-white/20" },
                { icon: "🔁", label: "Transfer", color: "bg-white/20" },
              ].map(btn => (
                <button
                  key={btn.label}
                  className={`${btn.color} backdrop-blur rounded-2xl p-3 flex flex-col items-center gap-1.5 hover:bg-white/30 transition`}
                >
                  <span className="text-2xl">{btn.icon}</span>
                  <span className="text-white text-xs font-semibold">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <MiniStatCard label="Saved This Month" amount="₹28,500" change="+8.2%" color="bg-blush-mint" textColor="text-blush-teal" />
          <MiniStatCard label="Investments" amount="₹5,42,000" change="+18.9%" color="bg-blush-lavender" textColor="text-blush-purple" />
          <MiniStatCard label="Spending" amount="₹45,320" change="-5.3%" color="bg-blush-peach" textColor="text-blush-coral" isNegative />
          <MiniStatCard label="Income" amount="₹76,200" change="+2.1%" color="bg-blush-beige" textColor="text-blush-dark" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left col */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Transactions */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-blush-dark text-lg">Recent Transactions</h2>
                <button className="bg-blush-lavender text-blush-purple text-xs font-bold px-4 py-1.5 rounded-full">View All</button>
              </div>
              <div className="space-y-2">
                {transactions.map(t => (
                  <TransactionRow key={t.title} {...t} />
                ))}
              </div>
            </div>

            {/* Spending Breakdown */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-blush-dark text-lg">Spending Breakdown</h2>
                <span className="text-blush-gray text-xs">May 2024</span>
              </div>
              <div className="space-y-4">
                {spending.map(s => (
                  <CategoryBar key={s.label} {...s} />
                ))}
              </div>
            </div>
          </div>

          {/* Right col */}
          <div className="space-y-6">
            {/* Savings Goal */}
            <div className="bg-blush-lavender rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-blush-dark text-base">Savings Goal</h2>
                <span className="text-2xl">🏝️</span>
              </div>
              <p className="text-blush-gray text-sm mb-1">Vacation Fund</p>
              <div className="flex items-end gap-2 mb-3">
                <p className="font-extrabold text-blush-dark text-2xl">₹75,000</p>
                <p className="text-blush-gray text-sm mb-0.5">/ ₹1,00,000</p>
              </div>
              <div className="w-full bg-white rounded-full h-3 mb-4">
                <div className="bg-blush-purple h-3 rounded-full" style={{ width: "75%" }} />
              </div>
              <p className="text-blush-purple text-xs font-semibold mb-4">75% of goal reached 🎉</p>
              <button className="w-full bg-blush-purple text-white font-bold py-3 rounded-2xl text-sm hover:bg-blush-purple-dark transition">
                Add Funds
              </button>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-blush-dark text-base">Portfolio</h2>
                <button className="text-blush-purple text-xs font-bold">Manage</button>
              </div>
              <div className="space-y-3">
                {portfolio.map(p => (
                  <PortfolioItem key={p.name} {...p} />
                ))}
              </div>
              <button className="w-full bg-blush-mint text-blush-teal font-bold py-3 rounded-2xl text-sm mt-4 hover:opacity-90 transition">
                Explore More
              </button>
            </div>

            {/* Month Summary */}
            <div className="bg-blush-dark rounded-3xl p-6 text-white">
              <h3 className="font-bold text-base mb-4">Month Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blush-mint" />
                    <span className="text-white/70 text-sm">Total Earned</span>
                  </div>
                  <span className="font-bold">₹76,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blush-coral" />
                    <span className="text-white/70 text-sm">Total Spent</span>
                  </div>
                  <span className="font-bold">₹45,320</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm font-semibold">Net Saved</span>
                  <span className="font-extrabold text-blush-yellow text-lg">₹30,880</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Data ── */
const transactions = [
  { icon: "🛒", title: "Amazon Purchase", sub: "Shopping", amount: "-₹3,450", type: "expense" as const },
  { icon: "💼", title: "Salary Deposit", sub: "Income", amount: "+₹75,000", type: "income" as const },
  { icon: "📺", title: "Netflix", sub: "Entertainment", amount: "-₹499", type: "expense" as const },
  { icon: "☕", title: "Coffee Shop", sub: "Food & Drink", amount: "-₹250", type: "expense" as const },
  { icon: "📚", title: "Dividend Income", sub: "Investment", amount: "+₹1,200", type: "income" as const },
];

const spending = [
  { label: "Shopping", percentage: 32, amount: "₹14,500", color: "bg-blush-purple" },
  { label: "Food & Dining", percentage: 28, amount: "₹12,650", color: "bg-blush-coral" },
  { label: "Utilities", percentage: 22, amount: "₹9,950", color: "bg-blush-cyan" },
  { label: "Entertainment", percentage: 18, amount: "₹8,150", color: "bg-blush-yellow" },
];

const portfolio = [
  { icon: "📱", name: "Tech Stocks", value: "₹2,10,000", ret: "+15.2%", positive: true },
  { icon: "📊", name: "Mutual Funds", value: "₹1,85,500", ret: "+8.9%", positive: true },
  { icon: "💎", name: "Gold", value: "₹95,000", ret: "+3.2%", positive: true },
  { icon: "📜", name: "Bonds", value: "₹51,500", ret: "+2.1%", positive: true },
];

/* ── Sub-components ── */
function MiniStatCard({
  label, amount, change, color, textColor, isNegative = false
}: {
  label: string; amount: string; change: string; color: string; textColor: string; isNegative?: boolean;
}) {
  return (
    <div className={`${color} rounded-2xl p-5`}>
      <p className="text-blush-gray text-xs font-semibold mb-2">{label}</p>
      <p className={`${textColor} font-extrabold text-lg leading-tight`}>{amount}</p>
      <p className={`text-xs font-semibold mt-1 ${isNegative ? "text-blush-coral" : "text-blush-teal"}`}>{change} vs last month</p>
    </div>
  );
}

function TransactionRow({
  icon, title, sub, amount, type
}: {
  icon: string; title: string; sub: string; amount: string; type: "income" | "expense";
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blush-peach rounded-xl flex items-center justify-center text-xl">{icon}</div>
        <div>
          <p className="font-semibold text-blush-dark text-sm">{title}</p>
          <p className="text-blush-gray text-xs">{sub}</p>
        </div>
      </div>
      <span className={`font-bold text-sm ${type === "income" ? "text-blush-teal" : "text-blush-dark"}`}>{amount}</span>
    </div>
  );
}

function CategoryBar({ label, percentage, amount, color }: { label: string; percentage: number; amount: string; color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <p className="text-blush-dark font-semibold text-sm">{label}</p>
        <p className="text-blush-gray text-sm">{amount}</p>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
      <p className="text-blush-gray text-xs mt-1">{percentage}%</p>
    </div>
  );
}

function PortfolioItem({ icon, name, value, ret, positive }: { icon: string; name: string; value: string; ret: string; positive: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <div>
          <p className="font-semibold text-blush-dark text-sm">{name}</p>
          <p className="text-blush-gray text-xs">{value}</p>
        </div>
      </div>
      <span className={`font-bold text-sm ${positive ? "text-blush-teal" : "text-blush-coral"}`}>{ret}</span>
    </div>
  );
}

import { useState } from "react";

type Status = "New" | "In Review" | "Approved" | "In Production" | "Rejected";

interface Order {
  id: string;
  name: string;
  groupName: string;
  email: string;
  phone: string;
  uniformType: string;
  quantity: number;
  referenceImage: string;
  status: Status;
}

const INITIAL_ORDERS: Order[] = [
  { id: "ORD-0021", name: "Sophia Wren", groupName: "Bridal Bloom Co.", email: "sophia@bridalboom.com", phone: "+1 (832) 441-9021", uniformType: "Bridesmaid Gown", quantity: 6, referenceImage: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=80&h=80&fit=crop", status: "New" },
  { id: "ORD-0022", name: "Marcus Allen", groupName: "Elite Suits NYC", email: "marcus@elitesuits.com", phone: "+1 (212) 773-5540", uniformType: "Corporate Blazer Set", quantity: 12, referenceImage: "https://images.unsplash.com/photo-1594938298603-c8148c4b4d14?w=80&h=80&fit=crop", status: "New" },
  { id: "ORD-0023", name: "Isabelle Moreau", groupName: "Luxe Prom Paris", email: "isa@luxeprom.fr", phone: "+33 6 12 34 56 78", uniformType: "Prom Evening Gown", quantity: 4, referenceImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=80&h=80&fit=crop", status: "In Review" },
  { id: "ORD-0024", name: "Daniel Osei", groupName: "Kente Royal Wear", email: "daniel@kenteroyal.gh", phone: "+233 20 811 4321", uniformType: "Traditional Kente Dress", quantity: 20, referenceImage: "https://images.unsplash.com/photo-1603217040830-96be1dce8c86?w=80&h=80&fit=crop", status: "Approved" },
  { id: "ORD-0025", name: "Priya Nair", groupName: "Silk Thread Studio", email: "priya@silkthread.in", phone: "+91 98451 33201", uniformType: "Saree Uniform Set", quantity: 9, referenceImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=80&h=80&fit=crop", status: "Rejected" },
  { id: "ORD-0026", name: "Elena Vasquez", groupName: "Flamenco Atelier", email: "elena@flamencoa.es", phone: "+34 612 887 001", uniformType: "Performance Dress", quantity: 3, referenceImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=80&h=80&fit=crop", status: "New" },
  { id: "ORD-0027", name: "James Thornton", groupName: "Navy Ceremonial HQ", email: "j.thornton@navcere.mil", phone: "+1 (703) 220-8810", uniformType: "Military Ceremonial", quantity: 30, referenceImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop", status: "In Production" },
  { id: "ORD-0028", name: "Amara Diallo", groupName: "Boubou Prestige", email: "amara@boubouprestige.sn", phone: "+221 77 432 1100", uniformType: "Grand Boubou", quantity: 15, referenceImage: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=80&h=80&fit=crop", status: "Approved" },
];

const ALL_STATUSES: Status[] = ["New", "In Review", "Approved", "In Production", "Rejected"];

const STATUS_STYLES: Record<Status, { badge: string; dot: string; row: string }> = {
  "New": { badge: "bg-amber-50 text-amber-800 border border-amber-200", dot: "bg-amber-500", row: "" },
  "In Review": { badge: "bg-orange-50 text-orange-700 border border-orange-200", dot: "bg-orange-400", row: "" },
  "Approved": { badge: "bg-emerald-50 text-emerald-700 border border-emerald-200", dot: "bg-emerald-500", row: "" },
  "In Production": { badge: "bg-sky-50 text-sky-700 border border-sky-200", dot: "bg-sky-500", row: "" },
  "Rejected": { badge: "bg-red-50 text-red-700 border border-red-200", dot: "bg-red-500", row: "" },
};

const STAT_CARD_STYLES: Record<Status, { active: string; count: string }> = {
  "New": { active: "bg-amber-600 text-white shadow-amber-200 shadow-lg border-amber-600", count: "text-amber-600" },
  "In Review": { active: "bg-orange-500 text-white shadow-orange-200 shadow-lg border-orange-500", count: "text-orange-500" },
  "Approved": { active: "bg-emerald-600 text-white shadow-emerald-200 shadow-lg border-emerald-600", count: "text-emerald-600" },
  "In Production": { active: "bg-sky-600 text-white shadow-sky-200 shadow-lg border-sky-600", count: "text-sky-600" },
  "Rejected": { active: "bg-red-500 text-white shadow-red-200 shadow-lg border-red-500", count: "text-red-500" },
};

const AVATAR_COLORS = [
  "bg-amber-100 text-amber-700",
  "bg-red-100 text-red-700",
  "bg-orange-100 text-orange-700",
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
  "bg-teal-100 text-teal-700",
  "bg-stone-100 text-stone-700",
  "bg-yellow-100 text-yellow-700",
];
const avatarColor = (name: string) => AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase();

const SortIcon = ({ active, dir }: { active: boolean; dir: "asc" | "desc" }) => (
  <span className="inline-flex flex-col ml-1 gap-px">
    <svg width="7" height="5" viewBox="0 0 7 5" className={active && dir === "asc" ? "opacity-100" : "opacity-25"}>
      <path d="M3.5 0L7 5H0z" fill={active && dir === "asc" ? "#b5894e" : "#7a756d"} />
    </svg>
    <svg width="7" height="5" viewBox="0 0 7 5" className={active && dir === "desc" ? "opacity-100" : "opacity-25"}>
      <path d="M3.5 5L0 0h7z" fill={active && dir === "desc" ? "#b5894e" : "#7a756d"} />
    </svg>
  </span>
);

interface StatusBadgeProps { status: Status; onChange: (s: Status) => void; }
const StatusBadge = ({ status, onChange }: StatusBadgeProps) => {
  const [open, setOpen] = useState(false);
  const cfg = STATUS_STYLES[status];
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide cursor-pointer transition-all duration-150 hover:shadow-sm ${cfg.badge}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot} ${status === "New" ? "animate-pulse" : ""}`} />
        {status}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-0.5 opacity-60">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1.5 z-50 bg-card border border-border rounded-xl shadow-xl shadow-muted/80 overflow-hidden min-w-[160px]">
            {ALL_STATUSES.map((s) => {
              const sc = STATUS_STYLES[s];
              return (
                <button
                  key={s}
                  onClick={() => { onChange(s); setOpen(false); }}
                  className={`flex items-center gap-2.5 w-full px-3.5 py-2.5 text-left text-xs font-medium transition-colors duration-100 ${s === status ? sc.badge.replace("border", "").replace(/ border-\S+/, "") + " font-semibold" : "text-muted-foreground hover:bg-secondary"}`}
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${sc.dot}`} />
                  {s}
                  {s === status && (
                    <svg className="ml-auto" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

interface ImageModalProps { src: string; name: string; onClose: () => void; }
const ImageModal = ({ src, name, onClose }: ImageModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/50 backdrop-blur-sm" onClick={onClose}>
    <div className="bg-card rounded-2xl shadow-2xl p-5 max-w-xs w-full mx-4" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-foreground">{name} — Reference</span>
        <button onClick={onClose} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-border transition-colors text-sm">✕</button>
      </div>
      <img src={src} alt={name} className="w-full aspect-square object-cover rounded-xl shadow-inner" />
      <p className="text-xs text-muted-foreground text-center mt-3">Reference design image</p>
    </div>
  </div>
);

export default function DressAdminDashboard() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");
  const [modalImg, setModalImg] = useState<{ src: string; name: string } | null>(null);
  const [sortField, setSortField] = useState<keyof Order | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const updateStatus = (id: string, newStatus: Status) =>
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));

  const handleSort = (field: keyof Order) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("asc"); }
  };

  const filtered = orders
    .filter((o) =>
      (filterStatus === "All" || o.status === filterStatus) &&
      [o.name, o.groupName, o.email, o.uniformType].some((f) =>
        f.toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      const va = a[sortField], vb = b[sortField];
      if (typeof va === "number" && typeof vb === "number") return sortDir === "asc" ? va - vb : vb - va;
      return sortDir === "asc"
        ? String(va).localeCompare(String(vb))
        : String(vb).localeCompare(String(va));
    });

  const counts = ALL_STATUSES.reduce<Record<string, number>>(
    (acc, s) => ({ ...acc, [s]: orders.filter((o) => o.status === s).length }),
    {}
  );

  const COLS: { label: string; field?: keyof Order; align?: string }[] = [
    { label: "Order" },
    { label: "Customer", field: "name" },
    { label: "Group", field: "groupName" },
    { label: "Contact" },
    { label: "Uniform Type", field: "uniformType" },
    { label: "Qty", field: "quantity", align: "text-center" },
    { label: "Reference", align: "text-center" },
    { label: "Status", field: "status" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-screen-xl mx-auto px-6 py-8">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-1">Uniform Management</p>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Order Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">Review, approve and track all custom dress & uniform orders</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-amber-200 transition-all duration-150 active:scale-95 self-start sm:self-auto">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            New Order
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {ALL_STATUSES.map((s) => {
            const sc = STAT_CARD_STYLES[s];
            const isActive = filterStatus === s;
            return (
              <button
                key={s}
                onClick={() => setFilterStatus(filterStatus === s ? "All" : s)}
                className={`rounded-2xl px-4 py-4 text-left border transition-all duration-200 ${isActive
                  ? sc.active
                  : "bg-card border-border hover:border-muted-foreground/30 hover:shadow-sm"
                  }`}
              >
                <div className={`text-2xl font-bold leading-none mb-1.5 ${isActive ? "text-white" : sc.count}`}>
                  {counts[s] ?? 0}
                </div>
                <div className={`text-xs font-semibold tracking-wide uppercase ${isActive ? "text-white/80" : "text-muted-foreground"}`}>
                  {s}
                </div>
              </button>
            );
          })}
        </div>

        {/* Table Card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm shadow-muted overflow-hidden">

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-4 border-b border-border/60">
            <div className="relative w-full sm:w-72">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="6.5" cy="6.5" r="4.5" stroke="#7a756d" strokeWidth="1.4" />
                <path d="M10 10l3 3" stroke="#7a756d" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search orders…"
                className="w-full pl-9 pr-4 py-2 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
              />
            </div>
            <div className="flex items-center gap-3">
              {filterStatus !== "All" && (
                <button
                  onClick={() => setFilterStatus("All")}
                  className="flex items-center gap-1.5 text-xs font-medium text-accent bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 hover:bg-amber-100 transition-colors"
                >
                  <span>{filterStatus}</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2l-6 6" stroke="#b5894e" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
              )}
              <span className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/80">{filtered.length}</span> of {orders.length} orders
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[960px]">
              <thead>
                <tr className="bg-secondary border-b border-border/60">
                  {COLS.map((col) => (
                    <th
                      key={col.label}
                      onClick={() => col.field && handleSort(col.field)}
                      className={`px-4 py-3 text-left text-xs font-bold tracking-widest uppercase text-muted-foreground select-none ${col.field ? "cursor-pointer hover:text-foreground transition-colors" : ""} ${col.align ?? ""}`}
                    >
                      <span className="inline-flex items-center gap-0.5">
                        {col.label}
                        {col.field && (
                          <SortIcon
                            active={sortField === col.field}
                            dir={sortDir}
                          />
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary">
                {filtered.map((order, i) => (
                  <tr key={order.id} className="hover:bg-secondary/60 transition-colors duration-100 group">
                    {/* Order ID */}
                    <td className="px-4 py-3.5">
                      <div className="text-xs font-mono font-semibold text-accent bg-amber-50 border border-amber-100 rounded-lg px-2 py-1 inline-block whitespace-nowrap">
                        {order.id}
                      </div>
                    </td>

                    {/* Customer */}
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${avatarColor(order.name)}`}>
                          {initials(order.name)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground leading-tight">{order.name}</div>
                          <div className="text-xs text-muted-foreground leading-tight mt-0.5">#{String(i + 1).padStart(3, "0")}</div>
                        </div>
                      </div>
                    </td>

                    {/* Group */}
                    <td className="px-4 py-3.5">
                      <span className="text-sm text-foreground/70">{order.groupName}</span>
                    </td>

                    {/* Contact */}
                    <td className="px-4 py-3.5">
                      <div className="space-y-0.5">
                        <a href={`mailto:${order.email}`} className="block text-xs text-muted-foreground hover:text-accent transition-colors font-mono truncate max-w-[170px]">
                          {order.email}
                        </a>
                        <div className="text-xs text-muted-foreground/70 font-mono">{order.phone}</div>
                      </div>
                    </td>

                    {/* Uniform Type */}
                    <td className="px-4 py-3.5">
                      <div className="inline-flex items-center gap-1.5 bg-muted text-foreground/80 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-border">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="text-muted-foreground">
                          <rect x="1" y="3" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M4 3V2a1.5 1.5 0 013 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        {order.uniformType}
                      </div>
                    </td>

                    {/* Qty */}
                    <td className="px-4 py-3.5 text-center">
                      <span className="text-sm font-bold text-foreground tabular-nums">{order.quantity}</span>
                      <span className="text-xs text-muted-foreground ml-0.5">pcs</span>
                    </td>

                    {/* Reference Image */}
                    <td className="px-4 py-3.5 text-center">
                      <button
                        onClick={() => setModalImg({ src: order.referenceImage, name: order.name })}
                        className="relative inline-block group/img"
                      >
                        <img
                          src={order.referenceImage}
                          alt="ref"
                          className="w-10 h-10 rounded-xl object-cover border-2 border-white shadow-md group-hover/img:shadow-lg group-hover/img:scale-105 transition-all duration-150"
                        />
                        <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover/img:bg-accent/20 flex items-center justify-center transition-all">
                          <svg className="opacity-0 group-hover/img:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.5" />
                            <path d="M7 4v6M4 7h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </button>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3.5">
                      <StatusBadge status={order.status} onChange={(s) => updateStatus(order.id, s)} />
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={8} className="py-16 text-center">
                      <div className="text-4xl mb-3">🧵</div>
                      <p className="text-muted-foreground text-sm font-medium">No orders match your filters</p>
                      <button onClick={() => { setSearch(""); setFilterStatus("All"); }} className="mt-2 text-xs text-accent hover:underline">
                        Clear filters
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-border/60 bg-secondary/60">
            <p className="text-xs text-muted-foreground">
              Showing <span className="font-semibold text-foreground/70">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 rounded-lg border border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-accent flex items-center justify-center transition-all text-xs">
                ‹
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${p === 1
                    ? "bg-accent text-accent-foreground shadow-sm shadow-amber-200"
                    : "border border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-accent"
                    }`}
                >
                  {p}
                </button>
              ))}
              <button className="w-8 h-8 rounded-lg border border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-accent flex items-center justify-center transition-all text-xs">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Status Flow Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-xs font-bold tracking-widest text-muted-foreground/50 uppercase">Flow</span>
          {ALL_STATUSES.map((s, i) => {
            const cfg = STATUS_STYLES[s];
            return (
              <span key={s} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                {s}
                {i < ALL_STATUSES.length - 1 && <span className="text-border ml-1">→</span>}
              </span>
            );
          })}
        </div>

      </div>

      {modalImg && <ImageModal src={modalImg.src} name={modalImg.name} onClose={() => setModalImg(null)} />}
    </div>
  );
}

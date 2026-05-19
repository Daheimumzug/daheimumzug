"use client";

import { useState, useEffect, useRef } from "react";

const GOLD  = "#b08968";
const NAVY  = "#0b1f3a";
const NAVY2 = "#102a4d";
const DARK  = "#071222";

// SVG Icons
const IconWA = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <path d="M16 3C8.82 3 3 8.82 3 16c0 2.41.64 4.66 1.76 6.61L3 29l6.57-1.73A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="#fff"/>
    <path d="M21.5 18.77c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51H12.4c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.2 3.05.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" fill="#25d366"/>
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.19.92z"/>
  </svg>
);

const IconEuro = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10h12M4 14h12M19.5 4.5a9 9 0 1 0 0 15"/>
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconNoPayment = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const IconTruck = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const IconHome = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const IconOffice = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="8" y1="3" x2="8" y2="21"/>
  </svg>
);

const IconBox = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>
);

const IconSofa = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0z"/><line x1="6" y1="19" x2="6" y2="21"/><line x1="18" y1="19" x2="18" y2="21"/>
  </svg>
);

const IconClipboard = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);

const IconTruckBig = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const IconLock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    const isFloat = !Number.isInteger(target);
    let count = 0;
    const id = setInterval(() => {
      count++;
      const v = (target / 60) * count;
      if (count >= 60) { setVal(target); clearInterval(id); }
      else setVal(isFloat ? Math.round(v * 10) / 10 : Math.floor(v));
    }, 18);
    return () => clearInterval(id);
  }, [visible, target]);
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{val}{suffix}</span>;
}

function Counter({ value, onChange, label, priceEach, hidePrice }: {
  value: number;
  onChange: (v: number) => void;
  label: string;
  priceEach: number;
  hidePrice?: boolean;
}) {
  return (
    <div style={{ marginBottom: 0 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.38)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 7, display: "flex", justifyContent: "space-between" }}>
        <span>{label}</span>
        {!hidePrice && <span style={{ color: GOLD }}>+{priceEach} {"\u20AC"} / St{"\u00FC"}ck</span>}
      </div>
      <div style={{ display: "flex", alignItems: "center", background: "rgba(7,18,34,0.9)", border: "1px solid rgba(176,137,104,0.22)", borderRadius: 14, overflow: "hidden", height: 50 }}>
        <button type="button" onClick={() => onChange(Math.max(0, value - 1))}
          style={{ width: 50, height: "100%", background: "none", border: "none", borderRight: "1px solid rgba(176,137,104,0.2)", color: GOLD, fontSize: 22, cursor: "pointer", fontFamily: "inherit" }}>{"\u2212"}</button>
        <div style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: 700, color: "#fff" }}>{value}</div>
        <button type="button" onClick={() => onChange(value + 1)}
          style={{ width: 50, height: "100%", background: "none", border: "none", borderLeft: "1px solid rgba(176,137,104,0.2)", color: GOLD, fontSize: 22, cursor: "pointer", fontFamily: "inherit" }}>+</button>
      </div>
    </div>
  );
}

function CountdownTimer() {
  const [seconds, setSeconds] = useState(24 * 60 * 60);
  useEffect(() => {
    const id = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 10 }}>
      {[h, m, s].map((unit, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ background: NAVY, borderRadius: 8, padding: "6px 10px", fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 900, color: GOLD, minWidth: 40, textAlign: "center" }}>{unit}</div>
          {i < 2 && <span style={{ color: GOLD, fontWeight: 900, fontSize: 16 }}>:</span>}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [rooms,         setRooms]         = useState("1");
  const [floor,         setFloor]         = useState("0");
  const [elevator,      setElevator]      = useState("yes");
  const [distance,      setDistance]      = useState(0);
  const [disassemble,   setDisassemble]   = useState(0);
  const [assemble,      setAssemble]      = useState(0);
  const [kitchenAbbau,  setKitchenAbbau]  = useState(0);
  const [kitchenAufbau, setKitchenAufbau] = useState(false);
  const [price,         setPrice]         = useState(280);

  const [distMode,    setDistMode]    = useState("address");
  const [addrFrom,    setAddrFrom]    = useState("");
  const [addrTo,      setAddrTo]      = useState("");
  const [addrLoading, setAddrLoading] = useState(false);
  const [addrError,   setAddrError]   = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [phone,     setPhone]     = useState("");
  const [message,   setMessage]   = useState("");

  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq,   setOpenFaq]   = useState<number | null>(null);

  const [heroRef,    heroVisible]    = useInView(0.05);
  const [statsRef,   statsVisible]   = useInView(0.1);
  const [aboutRef,   aboutVisible]   = useInView(0.1);
  const [servRef,    servVisible]    = useInView(0.1);
  const [calcRef,    calcVisible]    = useInView(0.1);
  const [faqRef,     faqVisible]     = useInView(0.1);
  const [contactRef, contactVisible] = useInView(0.1);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    let base = 280;
    base += ({ "1": 0, "2": 140, "3": 280, "4": 420 }[rooms]  ?? 0);
    base += ({ "0": 0, "1": 40,  "2": 90,  "3": 150 }[floor]  ?? 0);
    if (elevator === "no") base += 100;
    base += Number(distance) * 2;
    base += disassemble  * 50;
    base += assemble     * 100;
    base += kitchenAbbau * 200;
    if (kitchenAufbau) base += 300;
    setPrice(Math.round(base));
  }, [rooms, floor, elevator, distance, disassemble, assemble, kitchenAbbau, kitchenAufbau]);

  const calcDistanceKm = async (from: string, to: string) => {
    setAddrLoading(true); setAddrError("");
    try {
      const geo = (q: string) =>
        fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`, {
          headers: { "Accept-Language": "de" },
        }).then(r => r.json());
      const [r1, r2] = await Promise.all([geo(from), geo(to)]);
      if (!r1[0] || !r2[0]) { setAddrError("Adresse nicht gefunden. Bitte genauer eingeben."); setAddrLoading(false); return; }
      const toRad = (x: number) => x * Math.PI / 180;
      const [lat1, lon1, lat2, lon2] = [+r1[0].lat, +r1[0].lon, +r2[0].lat, +r2[0].lon];
      const dLat = toRad(lat2 - lat1), dLon = toRad(lon2 - lon1);
      const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
      setDistance(Math.round(6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))));
    } catch { setAddrError("Fehler bei der Berechnung. Bitte manuell eingeben."); }
    setAddrLoading(false);
  };

  useEffect(() => {
    if (distMode !== "address") return;
    if (!addrFrom.trim() || !addrTo.trim()) return;
    const timer = setTimeout(() => calcDistanceKm(addrFrom, addrTo), 900);
    return () => clearTimeout(timer);
  }, [addrFrom, addrTo, distMode]);

  const handleSubmit = () => {
    const roomsLabel = ({ "1": "1 Zimmer", "2": "2 Zimmer", "3": "3 Zimmer", "4": "4+ Zimmer" } as Record<string,string>)[rooms] ?? rooms;
    const floorLabel = ({ "0": "EG", "1": "1. OG", "2": "2. OG", "3": "3+ OG" } as Record<string,string>)[floor] ?? floor;
    const lines = [
      `*Neue Umzugsanfrage - DaheimUmzug*`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `E-Mail: ${email || "-"}`,
      `Telefon: ${phone || "-"}`,
      ``,
      `Zimmer: ${roomsLabel}`,
      `Stockwerk: ${floorLabel}`,
      `Aufzug: ${elevator === "yes" ? "Ja" : "Nein"}`,
      `Entfernung: ${distMode === "address" && addrFrom && addrTo ? `${addrFrom} -> ${addrTo} (~${distance} km)` : `${distance} km`}`,
      disassemble > 0   ? `Schrank abbauen: ${disassemble}x`        : "",
      assemble > 0      ? `Schrank aufbauen: ${assemble}x`          : "",
      kitchenAbbau > 0  ? `Kueche abbauen: ${kitchenAbbau}x`       : "",
      kitchenAufbau     ? `Kueche aufbauen: Ja (Preis auf Anfrage)` : "",
      `Schaetzpreis: ${price} EUR`,
      ``,
      message ? `Nachricht: ${message}` : "",
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/49000000000?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navLinks = [
    { label: "Leistungen", id: "leistungen" },
    { label: "Rechner",    id: "calc" },
    { label: "FAQ",        id: "faq" },
    { label: "Kontakt",    id: "kontakt" },
  ];

  const services = [
    { icon: <IconHome />,      title: "Privatumzug",   desc: "Vom Studio bis zur Villa \u2014 wir k\u00FCmmern uns um jeden Karton mit gr\u00F6\u00DFter Sorgfalt.", price: "ab 280 \u20AC" },
    { icon: <IconOffice />,    title: "B\u00FCroumzug", desc: "Schnelle, diskrete B\u00FCroverlagerungen \u2014 minimale Ausfallzeit f\u00FCr Ihr Unternehmen.", price: "auf Anfrage" },
    { icon: <IconBox />,       title: "Einlagerung",   desc: "Sichere Zwischenlagerung Ihrer Gegenst\u00E4nde \u2014 trocken, versichert, flexibel buchbar.", price: "ab 49 \u20AC / Mo." },
    { icon: <IconSofa />,      title: "M\u00F6belmontage", desc: "Professionelles Auf- und Abbauen aller M\u00F6belst\u00FCcke \u2014 IKEA bis Ma\u00DFanfertigung.", price: "ab 50 \u20AC / St\u00FCck" },
    { icon: <IconClipboard />, title: "Verpackung",    desc: "Wir verpacken alles sicher \u2014 Spezialverpackung f\u00FCr Kunst, Glas und Elektronik.", price: "ab 80 \u20AC" },
    { icon: <IconTruckBig />,  title: "Fernumzug",     desc: "Deutschlandweit und europaweit \u2014 mit Vollkasko-Versicherung und GPS-Tracking.", price: "auf Anfrage" },
  ];

  const faqs = [
    { q: "Wie weit im Voraus soll ich buchen?", a: "Wir empfehlen mindestens 2\u20133 Wochen vor dem gew\u00FCnschten Umzugstermin. In der Hochsaison (Mai\u2013September) idealerweise 4\u20136 Wochen." },
    { q: "Ist mein Umzugsgut versichert?", a: "Ja, jeder Umzug ist standardm\u00E4\u00DFig mit einer Transportversicherung bis 50.000 \u20AC abgedeckt. Auf Wunsch bieten wir auch h\u00F6here Deckungssummen an." },
    { q: "Kann ich den Termin kurzfristig \u00E4ndern?", a: "TerminÃ¤nderungen sind bis 48 Stunden vorher kostenlos m\u00F6glich. Danach berechnen wir eine kleine Bearbeitungsgeb\u00FChr." },
    { q: "Liefert ihr auch Verpackungsmaterial?", a: "Selbstverst\u00E4ndlich! Kartons, Luftpolsterfolie, Klebeband und Schutzdecken liefern wir auf Wunsch vorab zu Ihnen nach Hause." },
    { q: "Arbeitet ihr auch am Wochenende?", a: "Ja! Wir sind 7 Tage die Woche einsatzbereit \u2014 auch an Sonn- und Feiertagen, ohne Aufpreis." },
    { q: "Wie genau ist der Preisrechner?", a: "Der Rechner gibt eine solide Sch\u00E4tzung f\u00FCr Standardumz\u00FCge. F\u00FCr eine verbindliche Offerte kommen wir gerne kostenlos zu Ihnen." },
  ];

  const IS: React.CSSProperties = {
    width: "100%", padding: "14px 16px", borderRadius: 14,
    background: "rgba(7,18,34,0.9)", border: "1px solid rgba(176,137,104,0.22)",
    color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit",
    transition: "border-color 0.2s",
  };
  const LS: React.CSSProperties = {
    fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.38)",
    textTransform: "uppercase", letterSpacing: "0.15em",
    display: "block", marginBottom: 7,
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: NAVY, color: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,700&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${NAVY}; }
        ::-webkit-scrollbar-thumb { background: ${GOLD}; border-radius: 3px; }
        .fu  { opacity:0; transform:translateY(32px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
        .fu.on { opacity:1; transform:translateY(0); }
        .fu.d1 { transition-delay:.1s; } .fu.d2 { transition-delay:.2s; }
        .fu.d3 { transition-delay:.3s; } .fu.d4 { transition-delay:.4s; }
        .fu.d5 { transition-delay:.5s; } .fu.d6 { transition-delay:.6s; }
        @keyframes letterIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .letter { display:inline-block; opacity:0; animation:letterIn .55s forwards; }
        @keyframes slowZoom { from{transform:scale(1)} to{transform:scale(1.07)} }
        .hero-zoom { animation:slowZoom 22s infinite alternate ease-in-out; }
        @keyframes gpulse { 0%,100%{box-shadow:0 0 0 0 rgba(176,137,104,.35)} 60%{box-shadow:0 0 0 10px rgba(176,137,104,0)} }
        .gpulse { animation:gpulse 2.5s infinite; }
        @keyframes wapulse { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.35)} 60%{box-shadow:0 0 0 12px rgba(37,211,102,0)} }
        .wapulse { animation:wapulse 2.2s infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .serv-card { transition:transform .3s, box-shadow .3s, border-color .3s; }
        .serv-card:hover { transform:translateY(-6px); box-shadow:0 24px 48px rgba(0,0,0,.3); border-color:rgba(176,137,104,.45) !important; }
        .inp:focus { border-color:${GOLD} !important; box-shadow:0 0 0 3px rgba(176,137,104,.13) !important; }
        .gold-btn { display:block; width:100%; background:${GOLD}; color:#fff; padding:16px; border-radius:14px; border:none; font-size:14px; font-weight:700; cursor:pointer; transition:all .22s; font-family:inherit; text-align:center; text-decoration:none; }
        .gold-btn:hover { background:#9a7454; transform:translateY(-2px); box-shadow:0 10px 28px rgba(176,137,104,.32); }
        .ham { display:none; flex-direction:column; gap:5px; cursor:pointer; background:none; border:none; padding:6px; z-index:200; }
        .ham span { display:block; width:24px; height:2px; background:#fff; border-radius:2px; transition:all .3s; }
        .ham.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .ham.open span:nth-child(2) { opacity:0; }
        .ham.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }
        .mob-overlay { display:none; position:fixed; inset:0; background:rgba(7,18,34,.97); backdrop-filter:blur(20px); flex-direction:column; justify-content:center; align-items:center; gap:28px; z-index:150; }
        .mob-overlay.open { display:flex; }
        .mob-overlay a, .mob-overlay button { color:#fff; text-decoration:none; font-size:26px; font-weight:700; font-style:italic; transition:color .2s; background:none; border:none; cursor:pointer; font-family:inherit; }
        .mob-overlay a:hover, .mob-overlay button:hover { color:${GOLD}; }
        .faq-item { border-bottom: 1px solid rgba(176,137,104,.12); }
        .trust-bar { display:flex; gap:28px; align-items:center; flex-wrap:wrap; justify-content:center; }
        select option { background:${DARK}; }
        textarea { resize:vertical; min-height:110px; }
        img { max-width:100%; display:block; }
        @media (max-width:768px) {
          .ham { display:flex; }
          .desktop-nav { display:none !important; }
          .hero-cols > div:not(:first-child) { display:none !important; }
          .stats-grid  { grid-template-columns:1fr 1fr !important; gap:28px !important; }
          .about-grid  { grid-template-columns:1fr !important; }
          .about-img-col { display:none !important; }
          .calc-wrap   { flex-direction:column !important; }
          .calc-left   { border-right:none !important; border-bottom:1px solid rgba(176,137,104,.12) !important; flex:unset !important; }
          .calc-fields { grid-template-columns:1fr !important; }
          .serv-grid   { grid-template-columns:1fr !important; }
          .contact-names { grid-template-columns:1fr !important; }
          .footer-grid { grid-template-columns:1fr !important; gap:28px !important; text-align:center !important; }
          .footer-bottom { flex-direction:column !important; align-items:center !important; }
          .hero-btns   { flex-direction:column !important; align-items:stretch !important; }
          .trust-bar   { gap:16px !important; }
        }
        @media (min-width:769px) and (max-width:1024px) {
          .about-grid  { gap:40px !important; }
          .calc-fields { grid-template-columns:1fr 1fr !important; }
          .serv-grid   { grid-template-columns:1fr 1fr !important; }
        }
      `}</style>

      {/* WHATSAPP FLOATING */}
      <a href="https://wa.me/49000000000?text=Hallo%2C%20ich%20moechte%20einen%20Umzug%20anfragen."
        target="_blank" rel="noopener noreferrer" className="wapulse"
        style={{ position:"fixed", bottom:28, right:28, zIndex:999, width:58, height:58, borderRadius:"50%", background:"#25d366", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 28px rgba(37,211,102,.4)", transition:"transform .25s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        <IconWA />
      </a>

      {/* MOBILE OVERLAY */}
      <div className={`mob-overlay ${menuOpen ? "open" : ""}`}>
        <button type="button" className="ham open" onClick={() => setMenuOpen(false)} style={{ position:"absolute", top:20, right:20 }}>
          <span /><span /><span />
        </button>
        {navLinks.map(l => (
          <button key={l.id} type="button" onClick={() => { setMenuOpen(false); setTimeout(() => scrollTo(l.id), 100); }}>
            {l.label}
          </button>
        ))}
        <a href="#kontakt" onClick={() => setMenuOpen(false)}
          style={{ background:GOLD, padding:"13px 36px", borderRadius:14, fontSize:16, fontStyle:"normal", fontWeight:700 }}>
          Anfrage senden
        </a>
      </div>

      {/* NAVBAR */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:scrolled?"rgba(11,31,58,.95)":"transparent", backdropFilter:scrolled?"blur(18px)":"none", borderBottom:scrolled?"1px solid rgba(176,137,104,.1)":"none", transition:"all .35s", padding:"0 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", height:68, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button type="button" onClick={() => scrollTo("hero")}
            style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:10, padding:0 }}>
            <img src="/images/logo.jpg" alt="DaheimUmzug Logo" style={{ height:40, width:"auto", borderRadius:8, objectFit:"contain" }} />
            <span style={{ fontFamily:"'Playfair Display', serif", fontSize:20, fontWeight:900, color:"#fff", fontStyle:"italic" }}>
              Daheim<span style={{ color:GOLD }}>Umzug</span>
            </span>
          </button>
          <div className="desktop-nav" style={{ display:"flex", gap:28, alignItems:"center" }}>
            {navLinks.map(l => (
              <button key={l.id} type="button" onClick={() => scrollTo(l.id)}
                style={{ background:"none", border:"none", color:"rgba(255,255,255,.65)", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", transition:"color .2s", padding:0 }}
                onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.65)")}>
                {l.label}
              </button>
            ))}
            <button type="button" onClick={() => scrollTo("kontakt")}
              style={{ background:GOLD, color:"#fff", padding:"10px 22px", borderRadius:12, border:"none", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", transition:"all .22s" }}
              onMouseEnter={e => { e.currentTarget.style.background="#9a7454"; e.currentTarget.style.transform="scale(1.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.transform="scale(1)"; }}>
              Anfrage senden
            </button>
          </div>
          <button type="button" className={`ham ${menuOpen?"open":""}`} onClick={() => setMenuOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" ref={heroRef as React.RefObject<HTMLElement>} style={{ position:"relative", minHeight:"100svh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <div className="hero-cols" style={{ position:"absolute", inset:0, display:"grid", gridTemplateColumns:"1fr 1fr 1fr" }}>
          {[
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
            "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
          ].map((src, i) => (
            <div key={i} style={{ overflow:"hidden", borderRight:i<2?"1px solid rgba(255,255,255,.04)":"none" }}>
              <img src={src} alt="" className="hero-zoom" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(.3) saturate(.7)" }} />
            </div>
          ))}
          <div style={{ position:"absolute", inset:0, background:`linear-gradient(to bottom,rgba(11,31,58,.5) 0%,rgba(11,31,58,.7) 50%,${NAVY} 100%)` }} />
        </div>
        <div style={{ position:"relative", zIndex:10, textAlign:"center", padding:"100px 24px 60px", maxWidth:860, width:"100%" }}>
          <div className="gpulse" style={{ display:"inline-block", background:"rgba(176,137,104,.12)", border:"1px solid rgba(176,137,104,.35)", color:GOLD, fontSize:10, fontWeight:700, padding:"6px 18px", borderRadius:999, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:28 }}>
            Premium Umzugsservice &middot; Baden-W&uuml;rttemberg
          </div>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(52px,10vw,100px)", fontWeight:900, fontStyle:"italic", lineHeight:.95, letterSpacing:"-2px", marginBottom:28, color:"#fff" }}>
            {"DAHEIM".split("").map((c,i) => <span key={i} className="letter" style={{ animationDelay:`${i*.055}s` }}>{c}</span>)}
            <br />
            <span style={{ color:GOLD }}>
              {"UMZUG".split("").map((c,i) => <span key={i} className="letter" style={{ animationDelay:`${(i+6)*.055+.2}s` }}>{c}</span>)}
            </span>
          </h1>
          <p className={`fu ${heroVisible?"on":""} d3`} style={{ fontSize:"clamp(15px,2vw,18px)", color:"rgba(255,255,255,.6)", fontWeight:300, lineHeight:1.75, maxWidth:540, margin:"0 auto 36px" }}>
            Ihr Partner f&uuml;r stressfreie Umz&uuml;ge &mdash; von der Planung bis zum letzten Karton.{" "}
            <strong style={{ color:"#fff", fontWeight:700 }}>Sorgfalt garantiert.</strong>
          </p>
          <div className={`fu ${heroVisible?"on":""} d4 hero-btns`} style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <button type="button" onClick={() => scrollTo("calc")}
              style={{ background:GOLD, color:"#fff", padding:"16px 36px", borderRadius:14, border:"none", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", boxShadow:`0 12px 32px rgba(176,137,104,.3)`, transition:"all .22s" }}
              onMouseEnter={e => { e.currentTarget.style.background="#9a7454"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.transform="translateY(0)"; }}>
              Preis berechnen &rarr;
            </button>
            <a href="tel:+4915112345678" style={{ background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.13)", color:"#fff", padding:"16px 32px", borderRadius:14, textDecoration:"none", fontSize:14, fontWeight:600, transition:"all .22s", display:"flex", alignItems:"center", gap:8 }}
              onMouseEnter={e => (e.currentTarget.style.background="rgba(255,255,255,.12)")}
              onMouseLeave={e => (e.currentTarget.style.background="rgba(255,255,255,.07)")}>
              <IconPhone /> Jetzt anrufen
            </a>
          </div>
        </div>
        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:.4 }}>
          <span style={{ fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color:GOLD }}>Scroll</span>
          <div style={{ width:1, height:44, background:`linear-gradient(to bottom,${GOLD},transparent)` }} />
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background:DARK, borderBottom:"1px solid rgba(176,137,104,.1)", padding:"18px 24px" }}>
        <div className="trust-bar" style={{ maxWidth:1000, margin:"0 auto" }}>
          {[
            { icon:<IconShield />,    label:"Vollkasko-Versicherung", sub:"bis 50.000 \u20AC gedeckt" },
            { icon:<IconCheck />,     label:"Gepr\u00FCftes Unternehmen",  sub:"seit 2016 aktiv" },
            { icon:<IconClock />,     label:"24h Antwortgarantie",    sub:"schnelle R\u00FCckmeldung" },
            { icon:<IconNoPayment />, label:"Keine Anzahlung",        sub:"Zahlung erst nach Umzug" },
          ].map((b,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:9, padding:"4px 0" }}>
              {b.icon}
              <div>
                <div style={{ fontSize:12, fontWeight:700, color:"#fff", lineHeight:1.2 }}>{b.label}</div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,.35)", letterSpacing:"0.05em" }}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section ref={statsRef as React.RefObject<HTMLElement>} style={{ background:GOLD, padding:"32px 24px" }}>
        <div className="stats-grid" style={{ maxWidth:960, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, textAlign:"center" }}>
          {[{n:1200,s:"+",label:"Umz\u00FCge"},{n:8,s:" J.",label:"Erfahrung"},{n:15,s:"",label:"Profis"},{n:4.9,s:"\u2605",label:"Bewertung"}].map((item,i) => (
            <div key={i} className={`fu ${statsVisible?"on":""} d${i+1}`}>
              <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,4vw,42px)", fontWeight:900, color:NAVY, lineHeight:1 }}>
                {statsVisible ? <AnimatedNumber target={item.n} suffix={item.s} /> : `0${item.s}`}
              </div>
              <div style={{ fontSize:10, fontWeight:700, color:"rgba(11,31,58,.55)", textTransform:"uppercase", letterSpacing:"0.14em", marginTop:4 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="leistungen" ref={aboutRef as React.RefObject<HTMLElement>} style={{ padding:"96px 24px", background:NAVY }}>
        <div className="about-grid" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>
          <div className={`fu ${aboutVisible?"on":""}`}>
            <p style={{ color:GOLD, fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:14 }}>&Uuml;ber uns</p>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,4vw,46px)", fontWeight:900, fontStyle:"italic", lineHeight:1.1, marginBottom:22 }}>
              Qualit&auml;t, die man beim<br />Umziehen <span style={{ color:GOLD }}>f&uuml;hlt.</span>
            </h2>
            <p style={{ color:"rgba(255,255,255,.52)", lineHeight:1.8, fontSize:15, marginBottom:14 }}>
              Willkommen bei <strong style={{ color:"#fff" }}>DaheimUmzug</strong>. Wir sind nicht einfach nur ein Transportunternehmen &mdash; wir sind Ihre pers&ouml;nliche Umzugs-Spezialeinheit in Baden-W&uuml;rttemberg.
            </p>
            <p style={{ color:"rgba(255,255,255,.52)", lineHeight:1.8, fontSize:15, marginBottom:32 }}>
              Mit &uuml;ber 8 Jahren Erfahrung garantieren wir einen reibungslosen Ablauf. Ihre M&ouml;bel sind mehr als Gegenst&auml;nde &mdash; sie sind Teil Ihrer Geschichte.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
              {["Kostenlose Besichtigung vor Ort","Vollkasko-Versicherung inklusive","Profi-Equipment f\u00FCr empfindliche Elektronik"].map((item,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:28, height:28, borderRadius:"50%", background:"rgba(176,137,104,.14)", border:"1px solid rgba(176,137,104,.3)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <IconCheck />
                  </div>
                  <span style={{ fontSize:14, fontWeight:600, color:"rgba(255,255,255,.82)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`about-img-col fu ${aboutVisible?"on":""} d2`} style={{ position:"relative" }}>
            <div style={{ position:"absolute", inset:-16, background:"rgba(176,137,104,.07)", borderRadius:48, filter:"blur(32px)" }} />
            <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80" alt="Team"
              style={{ position:"relative", width:"100%", borderRadius:32, boxShadow:"0 32px 72px rgba(0,0,0,.4)", border:"1px solid rgba(255,255,255,.06)", filter:"saturate(.85)" }} />
            <div style={{ position:"absolute", bottom:24, left:-16, background:GOLD, borderRadius:16, padding:"14px 20px", boxShadow:`0 12px 32px rgba(176,137,104,.4)` }}>
              <div style={{ fontFamily:"'Playfair Display', serif", fontSize:22, fontWeight:900, color:NAVY, lineHeight:1 }}>4.9 &#9733;</div>
              <div style={{ fontSize:10, fontWeight:700, color:"rgba(11,31,58,.55)", textTransform:"uppercase", letterSpacing:"0.1em" }}>Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servRef as React.RefObject<HTMLElement>} style={{ padding:"80px 24px", background:`linear-gradient(180deg,${NAVY} 0%,${DARK} 100%)` }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div className={`fu ${servVisible?"on":""}`} style={{ textAlign:"center", marginBottom:52 }}>
            <p style={{ color:GOLD, fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12 }}>Unsere Leistungen</p>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,48px)", fontWeight:900, fontStyle:"italic" }}>
              Alles aus <span style={{ color:GOLD }}>einer Hand</span>
            </h2>
          </div>
          <div className="serv-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
            {services.map((s,i) => (
              <div key={i} className={`serv-card fu ${servVisible?"on":""} d${(i%3)+1}`}
                style={{ background:NAVY2, borderRadius:22, padding:"28px 24px", border:"1px solid rgba(176,137,104,.12)", cursor:"default" }}>
                <div style={{ marginBottom:14 }}>{s.icon}</div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                  <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:19, fontWeight:900, fontStyle:"italic", margin:0, color:"#fff" }}>{s.title}</h3>
                  <span style={{ background:"rgba(176,137,104,.15)", border:"1px solid rgba(176,137,104,.3)", color:GOLD, fontSize:10, fontWeight:700, padding:"4px 10px", borderRadius:99, whiteSpace:"nowrap", marginLeft:8 }}>{s.price}</span>
                </div>
                <p style={{ color:"rgba(255,255,255,.45)", fontSize:13, lineHeight:1.7, margin:0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" ref={calcRef as React.RefObject<HTMLElement>} style={{ padding:"96px 24px", background:`linear-gradient(160deg,${DARK} 0%,${NAVY2} 100%)` }}>
        <div style={{ maxWidth:980, margin:"0 auto" }}>
          <div className={`fu ${calcVisible?"on":""}`} style={{ textAlign:"center", marginBottom:52 }}>
            <p style={{ color:GOLD, fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12 }}>Preisrechner</p>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,48px)", fontWeight:900, fontStyle:"italic" }}>
              Ihr Preis in <span style={{ color:GOLD }}>Sekunden</span>
            </h2>
          </div>
          <div className={`fu ${calcVisible?"on":""} d2`} style={{ background:"rgba(16,42,77,.75)", borderRadius:32, border:"1px solid rgba(176,137,104,.15)", backdropFilter:"blur(20px)" }}>
            <div className="calc-wrap" style={{ display:"flex" }}>
              {/* LEFT */}
              <div className="calc-left" style={{ flex:"0 0 290px", background:"rgba(7,18,34,.6)", padding:"44px 32px", borderRight:"1px solid rgba(176,137,104,.1)", display:"flex", flexDirection:"column", justifyContent:"space-between", gap:28 }}>
                <div>
                  <p style={{ color:GOLD, fontSize:10, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>Sch&auml;tzung</p>
                  <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:24, fontWeight:900, fontStyle:"italic", lineHeight:1.2, marginBottom:10 }}>
                    Schnell &amp;<br /><span style={{ color:GOLD }}>Transparent</span>
                  </h3>
                  <p style={{ color:"rgba(255,255,255,.36)", fontSize:13, lineHeight:1.7 }}>Keine versteckten Kosten. Der Preis aktualisiert sich sofort.</p>
                </div>
                <div style={{ background:GOLD, borderRadius:20, padding:"26px 22px", textAlign:"center" }}>
                  <div style={{ fontSize:9, fontWeight:700, color:"rgba(11,31,58,.5)", textTransform:"uppercase", letterSpacing:"0.18em", marginBottom:6 }}>Gesch&auml;tzter Preis</div>
                  <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(34px,4vw,46px)", fontWeight:900, fontStyle:"italic", color:NAVY, lineHeight:1 }}>{price} &euro;</div>
                  <div style={{ fontSize:9, color:"rgba(11,31,58,.38)", marginTop:6, textTransform:"uppercase", letterSpacing:"0.1em" }}>unverbindlich</div>
                </div>
                <div style={{ background:"rgba(176,137,104,.08)", border:"1px solid rgba(176,137,104,.2)", borderRadius:16, padding:"16px 14px", textAlign:"center" }}>
                  <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,.38)", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:4 }}>Angebot g&uuml;ltig f&uuml;r</div>
                  <CountdownTimer />
                  <div style={{ fontSize:10, color:"rgba(255,255,255,.28)", marginTop:6 }}>Jetzt anfragen &amp; Preis sichern</div>
                </div>
              </div>
              {/* RIGHT */}
              <div style={{ flex:1, padding:"44px 32px" }}>
                <div className="calc-fields" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:18 }}>
                  <div style={{ gridColumn:"1 / -1" }}>
                    <label style={LS}>Entfernung</label>
                    <div style={{ display:"flex", gap:8, marginBottom:10 }}>
                      {[["manual","Km eingeben"],["address","Adressen eingeben"]].map(([mode,lbl]) => (
                        <button key={mode} type="button" onClick={() => { setDistMode(mode); setAddrError(""); }}
                          style={{ flex:1, padding:"9px", borderRadius:10, border:"none", cursor:"pointer", fontSize:12, fontWeight:700, fontFamily:"inherit", transition:"all .2s", background:distMode===mode?GOLD:"rgba(7,18,34,.8)", color:distMode===mode?NAVY:"rgba(255,255,255,.5)" }}>
                          {lbl}
                        </button>
                      ))}
                    </div>
                    {distMode==="manual" ? (
                      <input type="number" min={0} placeholder="z.B. 25"
                        value={distance===0?"":distance}
                        onChange={e => setDistance(e.target.value===""?0:Number(e.target.value))}
                        className="inp" style={IS} />
                    ) : (
                      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                        <input type="text" value={addrFrom} onChange={e => setAddrFrom(e.target.value)}
                          placeholder="Von: z.B. Hauptstr. 1, Stuttgart" className="inp" style={IS} />
                        <input type="text" value={addrTo} onChange={e => setAddrTo(e.target.value)}
                          placeholder="Nach: z.B. Gartenstr. 5, Freiburg" className="inp" style={IS} />
                        {addrLoading && (
                          <p style={{ color:GOLD, fontSize:12, margin:0, display:"flex", alignItems:"center", gap:6 }}>
                            <span style={{ display:"inline-block", width:12, height:12, border:`2px solid ${GOLD}`, borderTopColor:"transparent", borderRadius:"50%", animation:"spin .7s linear infinite" }} />
                            Entfernung wird berechnet...
                          </p>
                        )}
                        {addrError && <p style={{ color:"#e07070", fontSize:12, margin:0 }}>{addrError}</p>}
                        {!addrLoading && distance>0 && distMode==="address" && (
                          <p style={{ color:GOLD, fontSize:12, fontWeight:700, margin:0 }}>&#10003; Entfernung: ~{distance} km</p>
                        )}
                        {!addrLoading && !addrError && (!addrFrom.trim()||!addrTo.trim()) && (
                          <p style={{ color:"rgba(255,255,255,.28)", fontSize:11, margin:0 }}>Beide Adressen eingeben &mdash; Preis passt sich automatisch an.</p>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <label style={LS}>Anzahl Zimmer</label>
                    <select value={rooms} onChange={e => setRooms(e.target.value)} className="inp" style={IS}>
                      <option value="1">1 Zimmer</option>
                      <option value="2">2 Zimmer</option>
                      <option value="3">3 Zimmer</option>
                      <option value="4">4+ Zimmer</option>
                    </select>
                  </div>
                  <div>
                    <label style={LS}>Stockwerk</label>
                    <select value={floor} onChange={e => setFloor(e.target.value)} className="inp" style={IS}>
                      <option value="0">Erdgeschoss</option>
                      <option value="1">1. Stock</option>
                      <option value="2">2. Stock</option>
                      <option value="3">3+ Stock</option>
                    </select>
                  </div>
                  <div style={{ gridColumn:"1 / -1" }}>
                    <label style={LS}>Aufzug</label>
                    <select value={elevator} onChange={e => setElevator(e.target.value)} className="inp" style={IS}>
                      <option value="yes">Aufzug vorhanden</option>
                      <option value="no">Kein Aufzug</option>
                    </select>
                  </div>
                  <div style={{ gridColumn:"1 / -1", borderTop:"1px solid rgba(176,137,104,.15)", paddingTop:20, marginTop:4 }}>
                    <p style={{ fontSize:10, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:"0.18em", marginBottom:16 }}>
                      Zusatzleistungen
                    </p>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:16 }}>
                      <Counter label="Schrank abbauen"  priceEach={50}  value={disassemble}  onChange={setDisassemble} />
                      <Counter label="Schrank aufbauen" priceEach={100} value={assemble}     onChange={setAssemble} />
                      <Counter label="K\u00FCche abbauen"    priceEach={200} value={kitchenAbbau} onChange={setKitchenAbbau} />
                      <div>
                        <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.38)", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:7, display:"flex", justifyContent:"space-between" }}>
                          <span>K&uuml;che aufbauen</span>
                          <span style={{ color:GOLD, fontStyle:"italic" }}>auf Anfrage</span>
                        </div>
                        <button type="button" onClick={() => setKitchenAufbau(v => !v)}
                          style={{ width:"100%", height:50, borderRadius:14, border:"1px solid rgba(176,137,104,0.22)", background:kitchenAufbau?GOLD:"rgba(7,18,34,0.9)", color:kitchenAufbau?NAVY:"rgba(255,255,255,0.5)", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", transition:"all .2s", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                          {kitchenAufbau ? "&#10003; Gew\u00FCnscht" : "Nicht ben\u00F6tigt"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ background:"rgba(176,137,104,.08)", border:"1px solid rgba(176,137,104,.22)", borderRadius:16, padding:"18px 20px", marginBottom:14, display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, flexWrap:"wrap" }}>
                  <div>
                    <div style={{ fontSize:12, fontWeight:700, color:"#fff" }}>Preis jetzt festschreiben</div>
                    <div style={{ fontSize:11, color:"rgba(255,255,255,.38)", marginTop:2 }}>Kostenlose Vor-Ort-Besichtigung inklusive</div>
                  </div>
                  <div style={{ fontFamily:"'Playfair Display', serif", fontSize:26, fontWeight:900, fontStyle:"italic", color:GOLD, whiteSpace:"nowrap" }}>{price} &euro;</div>
                </div>
                <button type="button" className="gold-btn" onClick={() => scrollTo("kontakt")}>
                  Verbindliches Angebot anfragen &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" ref={faqRef as React.RefObject<HTMLElement>} style={{ padding:"96px 24px", background:`linear-gradient(160deg,${DARK} 0%,${NAVY2} 100%)` }}>
        <div style={{ maxWidth:760, margin:"0 auto" }}>
          <div className={`fu ${faqVisible?"on":""}`} style={{ textAlign:"center", marginBottom:52 }}>
            <p style={{ color:GOLD, fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12 }}>FAQ</p>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,48px)", fontWeight:900, fontStyle:"italic" }}>
              H&auml;ufige <span style={{ color:GOLD }}>Fragen</span>
            </h2>
          </div>
          <div className={`fu ${faqVisible?"on":""} d2`} style={{ background:"rgba(16,42,77,.6)", borderRadius:24, border:"1px solid rgba(176,137,104,.14)", backdropFilter:"blur(16px)" }}>
            {faqs.map((f,i) => (
              <div key={i} className="faq-item" style={{ borderBottom:i<faqs.length-1?"1px solid rgba(176,137,104,.1)":"none" }}>
                <button type="button" onClick={() => setOpenFaq(openFaq===i?null:i)}
                  style={{ width:"100%", background:"none", border:"none", padding:"22px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, cursor:"pointer", fontFamily:"inherit", textAlign:"left" }}>
                  <span style={{ fontSize:15, fontWeight:600, color:openFaq===i?GOLD:"#fff", transition:"color .2s", lineHeight:1.4 }}>{f.q}</span>
                  <span style={{ color:GOLD, fontSize:22, fontWeight:300, flexShrink:0, transition:"transform .3s", transform:openFaq===i?"rotate(45deg)":"rotate(0deg)" }}>+</span>
                </button>
                <div style={{ maxHeight:openFaq===i?300:0, overflow:"hidden", transition:"max-height .35s cubic-bezier(.22,1,.36,1)" }}>
                  <p style={{ margin:0, padding:"0 28px 22px", color:"rgba(255,255,255,.5)", fontSize:14, lineHeight:1.75 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" ref={contactRef as React.RefObject<HTMLElement>} style={{ padding:"96px 24px", background:NAVY }}>
        <div style={{ maxWidth:660, margin:"0 auto" }}>
          <div className={`fu ${contactVisible?"on":""}`} style={{ textAlign:"center", marginBottom:48 }}>
            <p style={{ color:GOLD, fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12 }}>Kontakt</p>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,46px)", fontWeight:900, fontStyle:"italic" }}>
              Ihr Umzug beginnt<br /><span style={{ color:GOLD }}>mit einem Gespr&auml;ch</span>
            </h2>
          </div>
          {submitted ? (
            <div style={{ textAlign:"center", padding:"56px 32px", background:NAVY2, borderRadius:28, border:`1px solid ${GOLD}` }}>
              <div style={{ fontSize:42, marginBottom:14, color:GOLD }}>&#10003;</div>
              <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:24, fontStyle:"italic", marginBottom:8 }}>Vielen Dank!</h3>
              <p style={{ color:"rgba(255,255,255,.48)", fontSize:14 }}>WhatsApp wurde ge&ouml;ffnet &mdash; wir melden uns innerhalb von 24 Stunden.</p>
              <button type="button" onClick={() => setSubmitted(false)}
                style={{ marginTop:20, background:"none", border:`1px solid rgba(176,137,104,.4)`, color:GOLD, padding:"10px 24px", borderRadius:12, cursor:"pointer", fontFamily:"inherit", fontSize:13, fontWeight:600 }}>
                Neue Anfrage
              </button>
            </div>
          ) : (
            <div className={`fu ${contactVisible?"on":""} d2`}
              style={{ background:"rgba(16,42,77,.7)", borderRadius:28, padding:"40px 32px", border:"1px solid rgba(176,137,104,.14)", backdropFilter:"blur(16px)" }}>
              <div className="contact-names" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
                <div>
                  <label style={LS}>Vorname</label>
                  <input type="text" placeholder="Max" className="inp" style={IS} value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                  <label style={LS}>Nachname</label>
                  <input type="text" placeholder="Mustermann" className="inp" style={IS} value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
              </div>
              <div style={{ marginBottom:16 }}>
                <label style={LS}>E-Mail</label>
                <input type="email" placeholder="max@beispiel.de" className="inp" style={IS} value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div style={{ marginBottom:16 }}>
                <label style={LS}>Telefon</label>
                <input type="tel" placeholder="+49 ..." className="inp" style={IS} value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div style={{ marginBottom:26 }}>
                <label style={LS}>Nachricht</label>
                <textarea placeholder="Von wo nach wo, wann, welche Wohnung?" className="inp" style={IS} value={message} onChange={e => setMessage(e.target.value)} />
              </div>
              <button type="button" className="gold-btn" onClick={handleSubmit}
                style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                <IconWA /> Anfrage per WhatsApp senden &rarr;
              </button>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:18, marginTop:18, flexWrap:"wrap" }}>
                {[
                  <><IconLock /> Keine Weitergabe</>,
                  <>&#10003; Kostenlos &amp; unverbindlich</>,
                  <><IconClock /> Antwort in 24h</>,
                ].map((t,i) => (
                  <span key={i} style={{ fontSize:11, color:"rgba(255,255,255,.28)", display:"flex", alignItems:"center", gap:4 }}>{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop:"1px solid rgba(255,255,255,.06)", padding:"48px 24px 28px", background:DARK }}>
        <div className="footer-grid" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:44, marginBottom:36 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <div style={{ width:32, height:32, borderRadius:7, background:GOLD, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, fontWeight:900, color:NAVY, fontFamily:"'Playfair Display', serif", fontStyle:"italic" }}>D</div>
              <span style={{ fontFamily:"'Playfair Display', serif", fontSize:19, fontWeight:900, fontStyle:"italic" }}>Daheim<span style={{ color:GOLD }}>Umzug</span></span>
            </div>
            <p style={{ color:"rgba(255,255,255,.28)", fontSize:13, lineHeight:1.7, maxWidth:260 }}>
              Ihr zuverl&auml;ssiger Umzugspartner in Baden-W&uuml;rttemberg &mdash; mit Leidenschaft und Sorgfalt.
            </p>
            <div style={{ display:"flex", gap:10, marginTop:18 }}>
              <a href="https://wa.me/49000000000" target="_blank" rel="noopener noreferrer"
                style={{ width:36, height:36, borderRadius:10, background:"#25d366", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", transition:"opacity .2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity=".7")}
                onMouseLeave={e => (e.currentTarget.style.opacity="1")}>
                <IconWA />
              </a>
              <a href="tel:+49000000000"
                style={{ width:36, height:36, borderRadius:10, background:"rgba(176,137,104,.15)", border:"1px solid rgba(176,137,104,.3)", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", transition:"opacity .2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity=".7")}
                onMouseLeave={e => (e.currentTarget.style.opacity="1")}>
                <IconPhone />
              </a>
              <a href="mailto:info@daheimumzug.de"
                style={{ width:36, height:36, borderRadius:10, background:"rgba(176,137,104,.15)", border:"1px solid rgba(176,137,104,.3)", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", transition:"opacity .2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity=".7")}
                onMouseLeave={e => (e.currentTarget.style.opacity="1")}>
                <IconEuro />
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontSize:10, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:16 }}>Navigation</div>
            {navLinks.map(l => (
              <button key={l.id} type="button" onClick={() => scrollTo(l.id)}
                style={{ display:"block", background:"none", border:"none", color:"rgba(255,255,255,.35)", fontSize:13, marginBottom:10, cursor:"pointer", fontFamily:"inherit", padding:0, transition:"color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color="#fff")}
                onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,.35)")}>
                {l.label}
              </button>
            ))}
          </div>
          <div>
            <div style={{ fontSize:10, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:16 }}>Kontakt</div>
            {["info@daheimumzug.de","+49 000 000000","Baden-W\u00FCrttemberg"].map((c,i) => (
              <div key={i} style={{ color:"rgba(255,255,255,.35)", fontSize:13, marginBottom:10 }}>{c}</div>
            ))}
          </div>
        </div>
        <div className="footer-bottom" style={{ maxWidth:1100, margin:"0 auto", paddingTop:22, borderTop:"1px solid rgba(255,255,255,.05)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
          <span style={{ color:"rgba(255,255,255,.16)", fontSize:11 }}>&copy; {new Date().getFullYear()} DaheimUmzug. Alle Rechte vorbehalten.</span>
          <div style={{ display:"flex", gap:18 }}>
            {["Impressum","Datenschutz","AGB"].map(l => (
              <a key={l} href="#" style={{ color:"rgba(255,255,255,.16)", fontSize:11, textDecoration:"none", transition:"color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color=GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,.16)")}>
                {l}
              </a>
            ))}
          </div>
        </div>
        <div style={{ maxWidth:1100, margin:"12px auto 0", textAlign:"center" }}>
          <span style={{ color:"rgba(255,255,255,.16)", fontSize:11 }}>Powered by{" "}
            <a href="https://www.codivax.com" target="_blank" rel="noopener noreferrer"
              style={{ color:GOLD, fontWeight:700, textDecoration:"none", transition:"opacity .2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity=".7")}
              onMouseLeave={e => (e.currentTarget.style.opacity="1")}>
              CodivaX
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
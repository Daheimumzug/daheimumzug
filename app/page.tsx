"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({
    rooms: "1",
    floor: "0",
    elevator: "yes",
    distance: 20,
    boxes: 10,
  });

  const [price, setPrice] = useState(320);

  const calc = (d) => {
    let base = 280;
    const rooms = { "1": 0, "2": 140, "3": 280, "4": 420 };
    const floors = { "0": 0, "1": 40, "2": 90, "3": 150 };

    base += rooms[d.rooms] || 0;
    base += floors[d.floor] || 0;
    if (d.elevator === "no") base += 100;
    base += Number(d.distance) * 2;
    base += Number(d.boxes) * 1.5;

    setPrice(Math.round(base));
  };

  const update = (k, v) => {
    const newData = { ...data, [k]: v };
    setData(newData);
    calc(newData);
  };

  return (
    <div className="bg-[#0b1f3a] text-white selection:bg-[#b08968]/40 scroll-smooth">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 grayscale-[20%]">
          <div className="relative h-full border-r border-white/10">
            <img src="/images/home.jpg" className="h-full w-full object-cover" alt="Home" />
          </div>
          <div className="relative h-full border-r border-white/10">
            <img src="/images/truck.jpg" className="h-full w-full object-cover" alt="Truck" />
          </div>
          <div className="relative h-full">
            <img src="/images/movers.jpg" className="h-full w-full object-cover" alt="Movers" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f3a]/70 via-[#0b1f3a]/80 to-[#0b1f3a]"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="inline-block bg-[#b08968] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase shadow-lg shadow-[#b08968]/30">
            Premium Umzugsservice Baden-Württemberg
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
            Daheim<span className="text-[#b08968]">Umzug</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
            Mehr als nur ein Transport – wir bringen Ihr Zuhause sicher ans Ziel.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#calc" className="bg-[#b08968] hover:bg-[#8c6b4f] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-[#b08968]/20">
              Preis berechnen
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION - إضافة نص عن الشركة */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-[#b08968] font-bold tracking-widest uppercase text-sm mb-4">Warum DaheimUmzug?</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight italic">
            Ihr Vertrauen ist unser höchstes Gut.
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              Bei <span className="text-white font-bold tracking-tight">DaheimUmzug</span> verstehen wir, dass ein Umzug mehr ist als nur das Schleppen von Kisten. Es ist der Beginn eines neuen Lebensabschnitts. 
            </p>
            <p>
              Als Experten in <span className="text-[#b08968] font-semibold italic text-[1.1rem]">Baden-Württemberg</span> stehen wir für deutsche Gründlichkeit, absolute Pünktlichkeit und faire Festpreise. Ob Privatumzug oder Firmenauflösung – unser Team arbeitet mit höchster Präzision und Sorgfalt.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-black text-[#b08968]">100%</div>
              <div className="text-xs uppercase text-gray-500 font-bold">Haftpflichtversichert</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#b08968]">Festpreis</div>
              <div className="text-xs uppercase text-gray-500 font-bold">Keine versteckten Kosten</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-[#b08968]/20 rounded-[3rem] blur-2xl"></div>
          <img src="/images/truck.jpg" className="relative rounded-[2rem] shadow-2xl border border-white/10 transition-transform hover:rotate-2 duration-500" alt="Our Team" />
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-16 bg-[#102a4d]/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            { title: "Sicherer Transport", img: "/images/truck.jpg", desc: "Unsere moderne Flotte ist speziell für den sicheren Möbeltransport ausgestattet." },
            { title: "Profi-Team", img: "/images/movers.jpg", desc: "Geschulte Mitarbeiter, die wissen, wie man empfindliche Fracht behandelt." },
            { title: "Sorgfaltsgarantie", img: "/images/home.jpg", desc: "Vom Einpackservice bis zum Aufbau – wir schützen Ihr Eigentum wie unser eigenes." }
          ].map((item, idx) => (
            <div key={idx} className="group bg-[#102a4d] rounded-[2rem] shadow-2xl p-4 transition-all hover:-translate-y-4 border border-white/10">
              <div className="overflow-hidden rounded-[1.5rem] mb-6">
                <img src={item.img} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-black text-2xl mb-2 px-2 text-white italic tracking-tighter">{item.title}</h3>
              <p className="text-gray-400 px-2 pb-4 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section id="calc" className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#102a4d] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10 relative">
          
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <h4 className="text-9xl font-black italic select-none">UMZUG</h4>
          </div>

          {/* LEFT INFO */}
          <div className="md:w-1/3 bg-[#0b1f3a] p-12 text-white flex flex-col justify-center border-r border-white/10 relative z-10">
            <h2 className="text-3xl font-black mb-6 leading-tight italic">
              Sofort- <br /><span className="text-[#b08968]">Angebot</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Keine Lust auf lange Telefonate? Berechnen Sie Ihren Umzugspreis direkt online. Transparent und fair.
            </p>
            <ul className="mt-8 space-y-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <li className="flex items-center gap-2"><span className="text-[#b08968]">✔</span> Gratis Beratung</li>
              <li className="flex items-center gap-2"><span className="text-[#b08968]">✔</span> Versicherung inkl.</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="md:w-2/3 p-8 md:p-14 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase ml-2 tracking-widest italic">Distanz (km)</label>
                <input type="number" value={data.distance} onChange={(e) => update("distance", e.target.value)} className="w-full p-4 rounded-2xl bg-[#0b1f3a] border border-white/5 text-white focus:border-[#b08968] outline-none transition-all font-bold" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase ml-2 tracking-widest italic">Zimmer</label>
                <select value={data.rooms} onChange={(e) => update("rooms", e.target.value)} className="w-full p-4 rounded-2xl bg-[#0b1f3a] border border-white/5 text-white outline-none focus:border-[#b08968] font-bold">
                  <option value="1">1 Zimmer</option><option value="2">2 Zimmer</option><option value="3">3 Zimmer</option><option value="4">4+ Zimmer</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase ml-2 tracking-widest italic">Etage</label>
                <select value={data.floor} onChange={(e) => update("floor", e.target.value)} className="w-full p-4 rounded-2xl bg-[#0b1f3a] border border-white/5 text-white outline-none focus:border-[#b08968] font-bold">
                  <option value="0">EG</option><option value="1">1. OG</option><option value="2">2. OG</option><option value="3">3+ OG</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase ml-2 tracking-widest italic">Aufzug</label>
                <select value={data.elevator} onChange={(e) => update("elevator", e.target.value)} className="w-full p-4 rounded-2xl bg-[#0b1f3a] border border-white/5 text-white outline-none focus:border-[#b08968] font-bold">
                  <option value="yes">Vorhanden</option><option value="no">Nicht Vorhanden</option>
                </select>
              </div>
            </div>

            <div className="bg-[#b08968] p-8 rounded-[2.5rem] text-[#0b1f3a] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-[#b08968]/20 transform transition-hover hover:scale-[1.01]">
              <div className="text-center md:text-left">
                <div className="text-[10px] uppercase font-black tracking-widest opacity-60">Ihr Festpreis ab</div>
                <div className="text-6xl font-black italic tracking-tighter leading-none">{price} €</div>
              </div>
              <button className="bg-[#0b1f3a] text-white px-8 py-5 rounded-2xl font-black text-sm tracking-[0.15em] hover:bg-black transition-colors shadow-lg uppercase">
                Anfrage senden
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center bg-[#0b1f3a]">
        <div className="mb-6 text-xl font-black tracking-tighter italic uppercase">
          Daheim<span className="text-[#b08968]">Umzug</span>
        </div>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">
          Baden-Württemberg • Pünktlich • Sicher • Professionell
        </p>
      </footer>
    </div>
  );
}

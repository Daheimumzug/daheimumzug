"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    rooms: "1",
    floor: "0",
    elevator: "yes",
    distance: 20,
    boxes: 10,
  });

  const [price, setPrice] = useState(350);

  const calculatePrice = (data: any) => {
    let base = 300;

    const roomRates: any = { "1": 0, "2": 150, "3": 300, "4": 500 };
    const floorRates: any = { "0": 0, "1": 50, "2": 100, "3": 180 };

    base += roomRates[data.rooms] || 0;
    base += floorRates[data.floor] || 0;
    if (data.elevator === "no") base += 120;
    base += Number(data.distance) * 2.5;
    base += Number(data.boxes) * 2;

    setPrice(Math.round(base));
  };

  const handleChange = (key: string, value: any) => {
    const newData = { ...formData, [key]: value };
    setFormData(newData);
    calculatePrice(newData);
  };

  const whatsappLink = () => {
    const phone = "49123456789";

    const text = `Hallo DaheimUmzug!
Ich brauche ein Angebot:
- Zimmer: ${formData.rooms}
- Stockwerk: ${formData.floor}
- Aufzug: ${formData.elevator}
- Distanz: ${formData.distance} km
- Kartons: ${formData.boxes}
- Preis ca: ${price}€`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/images/logo.jpg"
          alt="DaheimUmzug"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">

          <img
            src="/images/logo.jpg"
            alt="logo"
            className="h-16 mx-auto mb-6 rounded-xl"
          />

          <h1 className="text-5xl md:text-7xl font-black">
            Stressfrei umziehen
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            Professioneller Umzug in Baden-Württemberg
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="p-6 border rounded-2xl">
            <h3 className="font-bold text-xl">Schnell</h3>
            <p className="text-gray-500 mt-2">Schneller Umzug Service</p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-bold text-xl">Sicher</h3>
            <p className="text-gray-500 mt-2">Ihre Möbel sind geschützt</p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-bold text-xl">Fair</h3>
            <p className="text-gray-500 mt-2">Transparente Preise</p>
          </div>

        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-xl mx-auto p-6 mb-20" id="calculator">

        <h2 className="text-3xl font-black text-center mb-8">
          Preis berechnen
        </h2>

        <div className="space-y-4">

          <input
            type="number"
            value={formData.distance}
            onChange={(e) => handleChange("distance", e.target.value)}
            className="w-full p-4 border rounded-xl"
            placeholder="Distanz km"
          />

          <select
            value={formData.rooms}
            onChange={(e) => handleChange("rooms", e.target.value)}
            className="w-full p-4 border rounded-xl"
          >
            <option value="1">1 Zimmer</option>
            <option value="2">2 Zimmer</option>
            <option value="3">3 Zimmer</option>
            <option value="4">4+ Zimmer</option>
          </select>

          <select
            value={formData.floor}
            onChange={(e) => handleChange("floor", e.target.value)}
            className="w-full p-4 border rounded-xl"
          >
            <option value="0">Erdgeschoss</option>
            <option value="1">1. Stock</option>
            <option value="2">2. Stock</option>
            <option value="3">3+ Stock</option>
          </select>

          <select
            value={formData.elevator}
            onChange={(e) => handleChange("elevator", e.target.value)}
            className="w-full p-4 border rounded-xl"
          >
            <option value="yes">Aufzug vorhanden</option>
            <option value="no">Kein Aufzug</option>
          </select>

          <input
            type="number"
            value={formData.boxes}
            onChange={(e) => handleChange("boxes", e.target.value)}
            className="w-full p-4 border rounded-xl"
            placeholder="Kartons"
          />

          <div className="bg-red-600 text-white text-center p-6 rounded-2xl">
            <p>Geschätzter Preis</p>
            <h3 className="text-5xl font-black">ab {price} €</h3>
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl font-bold"
          >
            Jetzt Angebot anfragen
          </a>

        </div>
      </section>

    </div>
  );
}
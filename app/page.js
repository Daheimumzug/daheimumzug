"use client";

import { useState } from "react";

// 👇 نحدد شكل البيانات
type FormData = {
  rooms: string;
  floor: string;
  elevator: string;
  distance: number;
  boxes: number;
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    rooms: "1",
    floor: "0",
    elevator: "yes",
    distance: 20,
    boxes: 10,
  });

  const [price, setPrice] = useState<number>(350);

  const calculatePrice = (data: FormData) => {
    let base = 300;

    const roomRates: Record<string, number> = {
      "1": 0,
      "2": 150,
      "3": 300,
      "4": 500,
    };

    const floorRates: Record<string, number> = {
      "0": 0,
      "1": 50,
      "2": 100,
      "3": 180,
    };

    base += roomRates[data.rooms] || 0;
    base += floorRates[data.floor] || 0;

    if (data.elevator === "no") base += 120;

    base += Number(data.distance) * 2.5;
    base += Number(data.boxes) * 2;

    setPrice(Math.round(base));
  };

  const handleChange = (key: keyof FormData, value: string | number) => {
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
    <div className="min-h-screen bg-[#0b1f3a] text-white">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

        <img
          src="/images/home.jpg"
          className="absolute w-full h-full object-cover"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center">

          <img
            src="/images/logo.jpg"
            alt="logo"
            className="h-20 mx-auto mb-6 rounded-xl shadow-lg"
          />

          <h1 className="text-5xl md:text-7xl font-black">
            Daheim<span className="text-[#b08968]">Umzug</span>
          </h1>

          <p className="mt-4 text-gray-200">
            Ihr Umzug in Baden-Württemberg
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          <div className="bg-[#102a4d] p-6 rounded-2xl">Schnell</div>
          <div className="bg-[#102a4d] p-6 rounded-2xl">Sicher</div>
          <div className="bg-[#102a4d] p-6 rounded-2xl">Fair</div>

        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-xl mx-auto p-6">

        <h2 className="text-3xl font-black mb-6 text-center">
          Preis berechnen
        </h2>

        <input
          type="number"
          value={formData.distance}
          onChange={(e) =>
            handleChange("distance", Number(e.target.value))
          }
          className="w-full p-4 mb-3 text-black rounded-xl"
          placeholder="Distanz"
        />

        <select
          value={formData.rooms}
          onChange={(e) => handleChange("rooms", e.target.value)}
          className="w-full p-4 mb-3 text-black rounded-xl"
        >
          <option value="1">1 Zimmer</option>
          <option value="2">2 Zimmer</option>
          <option value="3">3 Zimmer</option>
          <option value="4">4+ Zimmer</option>
        </select>

        <select
          value={formData.floor}
          onChange={(e) => handleChange("floor", e.target.value)}
          className="w-full p-4 mb-3 text-black rounded-xl"
        >
          <option value="0">EG</option>
          <option value="1">1. Stock</option>
          <option value="2">2. Stock</option>
          <option value="3">3+ Stock</option>
        </select>

        <select
          value={formData.elevator}
          onChange={(e) => handleChange("elevator", e.target.value)}
          className="w-full p-4 mb-3 text-black rounded-xl"
        >
          <option value="yes">Aufzug</option>
          <option value="no">Kein Aufzug</option>
        </select>

        <input
          type="number"
          value={formData.boxes}
          onChange={(e) =>
            handleChange("boxes", Number(e.target.value))
          }
          className="w-full p-4 mb-4 text-black rounded-xl"
          placeholder="Kartons"
        />

        <div className="bg-[#b08968] text-[#0b1f3a] text-center p-6 rounded-2xl mb-4">
          <p>Preis</p>
          <h3 className="text-4xl font-black">ab {price} €</h3>
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          className="block text-center bg-green-500 p-4 rounded-xl font-bold"
        >
          Angebot senden
        </a>

      </section>
    </div>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daheimumzug.de"),

  title: {
    default: "DaheimUmzug | Umzugsservice in Baden-Württemberg",
    template: "%s | DaheimUmzug",
  },

  description:
    "Professioneller Umzugsservice in Baden-Württemberg. Privat- und Firmenumzüge, Möbeltransport, Entrümpelung und Montage. Schnell, sicher und zuverlässig.",

  keywords: [
    "Umzug Baden-Württemberg",
    "Umzugsunternehmen Stuttgart",
    "Umzug Heilbronn",
    "Umzug Karlsruhe",
    "Möbeltransport",
    "Entrümpelung",
    "Firmenumzug",
    "Privatumzug",
    "Transportservice Deutschland",
  ],

  authors: [{ name: "DaheimUmzug" }],
  creator: "DaheimUmzug",
  publisher: "DaheimUmzug",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://daheimumzug.de",
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://daheimumzug.de",
    siteName: "DaheimUmzug",

    title: "DaheimUmzug | Ihr professioneller Umzugspartner",

    description:
      "Stressfreie Umzüge in Baden-Württemberg. Faire Festpreise, schnelle Termine und zuverlässiger Service.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DaheimUmzug",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "DaheimUmzug | Umzugsservice Baden-Württemberg",

    description:
      "Professionelle Umzüge und Transporte in Baden-Württemberg.",

    images: ["/og-image.jpg"],
  },

  category: "transport",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
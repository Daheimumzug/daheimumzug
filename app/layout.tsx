import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DaheimUmzug | Umzug & Transport Baden-Württemberg",
  description:
    "DaheimUmzug – professioneller Umzugsservice in Baden-Württemberg. Schnell, sicher und zuverlässig.",
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
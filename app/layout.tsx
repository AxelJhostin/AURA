import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "AURA — De la reacción a la evidencia",
  description:
    "Laboratorio bilingüe de evidencia para entrenar alfabetización mediática e informacional mediante el método Analiza, Ubica, Rastrea y Actúa.",
  applicationName: "AURA Evidence Lab",
  keywords: [
    "alfabetización mediática",
    "media and information literacy",
    "UNESCO Youth Hackathon 2026",
    "educación",
    "evidencia",
  ],
  authors: [{ name: "Equipo AURA" }],
  creator: "Equipo AURA",
  openGraph: {
    title: "AURA — De la reacción a la evidencia",
    description:
      "Un laboratorio de evidencia que entrena a jóvenes para investigar, justificar y actuar.",
    type: "website",
    locale: "es_EC",
    alternateLocale: "en",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "AURA — De la reacción a la evidencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA — De la reacción a la evidencia",
    description:
      "Laboratorio bilingüe de evidencia para Alfabetización Mediática e Informacional.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f0e7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

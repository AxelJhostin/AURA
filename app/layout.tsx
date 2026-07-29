import type { Metadata, Viewport } from "next";
import "./globals.css";

const canonicalUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: "AURA — Investiga antes de compartir",
  description:
    "Laboratorio bilingüe para comprobar becas, salud, emergencias y otras afirmaciones virales antes de compartirlas o entregar datos.",
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
    title: "AURA — Investiga antes de compartir",
    description:
      "Practica cómo verificar el origen, comparar evidencia y actuar responsablemente antes de compartir una afirmación viral.",
    type: "website",
    locale: "es_EC",
    alternateLocale: "en",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "AURA — Investiga antes de compartir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA — Investiga antes de compartir",
    description:
      "Comprueba el origen, compara evidencia y actúa antes de compartir.",
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

import type { Metadata, Viewport } from "next";
import "./globals.css";

const canonicalUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: "AURA Opportunity Circles — Investiga antes de entregar tus datos",
  description:
    "Programa juvenil bilingüe para comprobar becas, empleos, intercambios y otras oportunidades digitales antes de entregar documentos, dinero o confianza.",
  applicationName: "AURA Opportunity Circles",
  keywords: [
    "alfabetización mediática",
    "media and information literacy",
    "UNESCO Youth Hackathon 2026",
    "scholarship scams",
    "job scams",
    "oportunidades juveniles",
    "evidencia y transferencia",
  ],
  authors: [{ name: "Equipo AURA" }],
  creator: "Equipo AURA",
  openGraph: {
    title: "AURA Opportunity Circles",
    description:
      "Jóvenes entrenando a jóvenes para proteger sus datos, dinero y confianza ante oportunidades digitales urgentes.",
    type: "website",
    locale: "es_EC",
    alternateLocale: "en",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "AURA Opportunity Circles — de oportunidades urgentes a decisiones informadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA Opportunity Circles",
    description:
      "Comprueba becas, empleos e intercambios antes de entregar datos, dinero o confianza.",
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

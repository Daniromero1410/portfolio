import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Daniel Romero - Full Stack Developer",
  description: "Portfolio de Daniel Alejandro Romero Moreno - Ingeniero de Software con experiencia en desarrollo Full Stack, Big Data, ETL y Machine Learning.",
  keywords: ["Full Stack Developer", "Software Engineer", "Big Data", "Machine Learning", "React", "Node.js", "Python"],
  authors: [{ name: "Daniel Alejandro Romero Moreno" }],
  openGraph: {
    title: "Daniel Romero - Full Stack Developer",
    description: "Portfolio de Daniel Alejandro Romero Moreno - Ingeniero de Software",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body className={`${jetbrainsMono.variable} ${inter.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

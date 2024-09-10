import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Fonts Variable
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "CM - Frontend Web Developer",
  description:
    "CoderMahabub is a React-based Frontend web Developer, currently living in Japan. Computer Science graduate specializing in React and Next.js web development. Based in Japan, seeking full-time opportunities while improving Japanese language skills. Skilled in building responsive, scalable, and user-friendly web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans "
        )}
      >
        {children}
      </body>
    </html>
  );
}

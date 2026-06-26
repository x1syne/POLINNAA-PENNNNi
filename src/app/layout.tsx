import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grooming Salon - груминг в Павловском Посаде",
  description:
    "Груминг-салон для собак и кошек в Павловском Посаде: стрижки, гигиена, мытье, вычес и экспресс-линька.",
  metadataBase: new URL("https://grooming-salon.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}

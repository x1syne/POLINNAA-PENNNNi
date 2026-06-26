import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

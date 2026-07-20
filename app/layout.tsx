import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayyan Babar - Data Systems Engineer",
  description:
    "Data systems engineer focused on real-time IoT pipelines, backend reliability, Azure data platforms, Kafka, ADX, and cybersecurity-aware architecture.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ayyan Babar - Data Systems Engineer",
    description:
      "Real-time IoT systems, backend reliability, Azure data platforms, Kafka replay layers, ADX, and cybersecurity-aware architecture.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

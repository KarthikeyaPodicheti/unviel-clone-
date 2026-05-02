import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://unveil.fr"),
  title: "UNVEIL®",
  description:
    "UNVEIL® is a creative studio using artificial intelligence to expand human creativity.",
  icons: {
    icon: "/seo/favicon.png",
  },
  openGraph: {
    title: "UNVEIL®",
    description:
      "UNVEIL® is a creative studio using artificial intelligence to expand human creativity.",
    images: ["/seo/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

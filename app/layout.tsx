import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oladeji Johnson | Portfolio",
  description: "Showcasing my skills, projects, and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

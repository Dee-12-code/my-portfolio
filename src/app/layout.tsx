import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";
export const metadata = {
  title: "Oladeji Johnson | Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black bg-animated text-white min-h-screen flex flex-col">
        <Navbar />
        <ParticlesBackground />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

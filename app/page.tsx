import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Blog />
      <TechStack />
      <Contact />
    </main>
  );
}

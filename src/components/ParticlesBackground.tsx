"use client"; 

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // ✅ Correct import

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Load slim version
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: "#000",
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#0ff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;

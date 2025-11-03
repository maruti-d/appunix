import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // lighter, stable build
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000" },
        fullScreen: { enable: false },
        particles: {
          number: { value: 60 },
          move: { enable: true, speed: 1.1 },
          size: { value: 5, random: { enable: true, minimumValue: 2 } },
          opacity: { value: 0.6 },
          links: {
            enable: true,
            distance: 130,
            color: "#00e5a8",
            opacity: 0.4,
          },
          color: { value: "#00e5a8" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 150, links: { opacity: 1 } } },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.55,
      }}
    />
  );
}

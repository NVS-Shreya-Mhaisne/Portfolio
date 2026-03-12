import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // lightweight version

export default function ParticlesBg() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: false }, // we’ll contain inside Home
      particles: {
        number: { value: 70, density: { enable: true, area: 800 } },
        color: { value: "#c7b8ff" },
        links: { enable: true, color: "#ffffff", opacity: 0.2, distance: 150 },
        move: { enable: true, speed: 1.2 },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;
  return <Particles id="tsparticles" options={options} className="particles" />;
}

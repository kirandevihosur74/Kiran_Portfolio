"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
  const { resolvedTheme } = useTheme();

  const triangleColor = resolvedTheme === "dark" ? "#F1F5F9" : "#CBD5E1"; // slate-400
  const triangleOpacity = resolvedTheme === "dark" ? 0.18 : 0.22;
  const triangleNumber = resolvedTheme === "dark" ? 80 : 30;

  const particlesInit = useCallback(async (engine: any) => {
    await loadTrianglesPreset(engine);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{ width: "100vw", height: "100vh", position: "absolute" }}
        options={{
          preset: "triangles",
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            color: { value: triangleColor },
            links: { color: triangleColor, opacity: triangleOpacity },
            opacity: { value: triangleOpacity },
            move: { enable: true, speed: 0.3 },
            number: { value: triangleNumber },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 2 },
            },
          },
        }}
      />
    </div>
  );
} 
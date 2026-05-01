import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlgoVision Lab — Visualize, Benchmark & Analyze Algorithms" },
      {
        name: "description",
        content:
          "Interactive lab to visualize, benchmark, and analyze sorting, divide & conquer, and graph algorithms with real-time charts and reports.",
      },
      { property: "og:title", content: "AlgoVision Lab" },
      {
        property: "og:description",
        content: "Visualize and benchmark algorithms with real-time charts and analysis.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/algovision-lab.html"
      title="AlgoVision Lab"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}

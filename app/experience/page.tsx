import { Metadata } from "next";
import Timeline from "@/components/Timeline";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience | Yanfei Dai",
  description: "Professional experience and career journey of Yanfei Dai as a Machine Learning Engineer.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Experience
      </h1>
      <p className="text-muted text-center mb-16 max-w-2xl mx-auto">
        My professional journey building ML systems and AI applications at scale.
      </p>

      <Timeline experiences={experiences} />
    </div>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import { experiences, education } from "@/data/experience";

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

      {/* Education Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors"
            >
              <div className="flex items-start gap-4">
                {edu.logo ? (
                  <div className="w-14 h-14 relative flex-shrink-0 bg-white rounded-lg p-1">
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 bg-background rounded-lg border border-border flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">
                      {edu.school.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold">{edu.school}</h3>
                  <p className="text-muted text-sm mt-1">{edu.degree}</p>
                  <p className="text-muted text-sm mt-2">
                    {edu.location} • {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

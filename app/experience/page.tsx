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
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8">
                <div className="flex items-center gap-5">
                  {edu.logo && (
                    <div className="w-16 h-16 relative flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-md">
                      <Image
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-muted mt-1">{edu.degree}</p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-border/50 flex items-center justify-between text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

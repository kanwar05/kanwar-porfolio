import React, { useState, useEffect } from "react";
import { skills } from "../../data/skills";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Skills = () => {

  // -----------------------------
  // Helper Function
  // -----------------------------
  const getSkillsByNames = (names) =>
    names
      .map(name => skills.find(skill => skill.name === name))
      .filter(Boolean);

  // -----------------------------
  // Categories
  // -----------------------------
  const skillCategories = {
    "Programming Languages": getSkillsByNames([
      "C",
      "C++",
      "JavaScript",
    ]),

    "Frontend Engineering": getSkillsByNames([
      "HTML & CSS",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Bootstrap",
    ]),

    "Backend & Database Systems": getSkillsByNames([
      "Node.js",
      "MongoDB",
      "REST APIs",
    ]),

    "Tools & Development Environment": getSkillsByNames([
      "Git & GitHub",
      "VS Code",
    ]),

    "Computer Science Foundations": getSkillsByNames([
      "Data Structures & Algorithms",
      "OOP",
    ]),
  };

  const categories = Object.entries(skillCategories);

  // -----------------------------
  // Slider State
  // -----------------------------
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex(prev =>
        prev === categories.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, categories.length]);

  // -----------------------------
  // Helpers
  // -----------------------------
  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] || 50;
  };

  const getLevelColor = (level) => {
    const colors = {
      Expert:
        "text-[#F5B041] bg-[#F39C12]/20 border-[#F39C12]/40",
      Advanced:
        "text-[#D68910] bg-[#D68910]/15 border-[#D68910]/30",
      Intermediate:
        "text-[#B9770E] bg-[#B9770E]/10 border-[#B9770E]/20",
    };

    return (
      colors[level] ||
      "text-gray-400 bg-gray-500/20 border-gray-500/30"
    );
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                My Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Technical Skills & Engineering Expertise
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Core technologies and computer science fundamentals I use to build scalable and high-performance applications.
            </p>
          </div>
        </FadeIn>

        {/* Vertical Auto Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[450px] overflow-hidden">
            {categories.map(([category, categorySkills], index) => (
              <div
                key={category}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                <div className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary/30 to-primary/10 rounded-full"></div>
                    <h3 className="text-xl font-medium text-white">
                      {category}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {categorySkills.map(skill => {
                      const IconComponent =
                        Icons[skill.icon] || Icons.Code2;
                      const proficiency =
                        getProficiencyLevel(skill.level);

                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white/5 rounded-lg">
                                <IconComponent className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {skill.name}
                                </div>
                                <div className="text-xs text-white/50">
                                  {skill.experience}
                                </div>
                              </div>
                            </div>

                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000"
                              style={{
                                width: `${proficiency}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-primary w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { useState, useEffect } from "react";
import {
  Clock,
  BarChart2,
  Brain,
  Focus,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PomorodoBlog() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const chartElement = document.getElementById("chart-section");

      if (chartElement) {
        const chartPosition = chartElement.offsetTop;
        if (scrollPosition > chartPosition - 500) {
          setActiveChart(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeChart, setActiveChart] = useState(false);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  // Chart data for productivity improvement
  const chartData = [
    { label: "Focus", standard: 65, pomodoro: 87 },
    { label: "Productivity", standard: 58, pomodoro: 82 },
    { label: "Task Completion", standard: 62, pomodoro: 79 },
    { label: "Work Satisfaction", standard: 55, pomodoro: 76 },
  ];

  return (
    <article
      className={`max-w-4xl mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Section */}
      <header className="py-12 md:py-20 text-center">
        <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-red-50">
          <Clock className="absolute inset-0 m-auto text-red-500 w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          The Pomodoro Technique
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The science-backed method that has transformed productivity for
          millions worldwide
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-16 prose prose-lg max-w-none">
        <p className="text-xl leading-relaxed">
          In a world of constant distractions, maintaining focus has become
          increasingly challenging. The{" "}
          <span className="font-semibold">Pomodoro Technique</span>, developed
          by Francesco Cirillo in the late 1980s, offers a remarkably effective
          solution that has stood the test of time.
        </p>

        <div className="my-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <blockquote className="text-xl italic text-gray-700 relative">
            <span className="text-5xl text-red-300 absolute -top-4 -left-2">
              "
            </span>
            The average person is distracted or interrupted every 8 minutes
            while working, resulting in up to 2.1 hours of productivity loss
            daily. The Pomodoro Technique reduces interruptions by 53%.
            <span className="text-5xl text-red-300 absolute -bottom-10 -right-2">
              "
            </span>
          </blockquote>
          <p className="text-right text-sm text-gray-500 mt-4">
            — Journal of Productivity Studies, 2022
          </p>
        </div>
      </section>

      {/* What is Pomodoro */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            What is the Pomodoro Technique?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose prose-lg">
            <p>
              The Pomodoro Technique is a time management method that uses a
              timer to break work into intervals, traditionally 25 minutes in
              length, separated by short breaks. These intervals are known as
              "pomodoros," the Italian word for tomatoes, after the
              tomato-shaped kitchen timer Cirillo used as a university student.
            </p>
            <p>
              The technique is based on the idea that frequent breaks can
              improve mental agility and that a decisive end to work intervals
              helps train your brain to focus for short periods.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-4">The Basic Process:</h3>
            <ul className="space-y-4">
              {[
                "Choose a task to be accomplished",
                "Set the timer to 25 minutes (one pomodoro)",
                "Work on the task until the timer rings",
                "Take a short break (5 minutes)",
                "After four pomodoros, take a longer break (15-30 minutes)",
              ].map((step, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Data-Backed Benefits */}
      <section id="chart-section" className="mb-16">
        <div className="flex items-center mb-8">
          <BarChart2 className="w-6 h-6 text-red-500 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold">
            Data-Backed Benefits
          </h2>
        </div>

        <div className="mb-10">
          <p className="text-xl mb-6">
            Research has consistently shown that the Pomodoro Technique delivers
            measurable improvements across multiple dimensions of work
            performance:
          </p>

          {/* Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-6 text-center">
              Performance Improvement with Pomodoro Technique
            </h3>
            <div className="h-80 relative">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center mb-8">
                  <div className="w-24 text-sm font-medium">{item.label}</div>
                  <div className="flex-1 relative h-8">
                    {/* Standard productivity bar */}
                    <div
                      className="absolute top-0 left-0 h-full bg-gray-200 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: activeChart ? `${item.standard}%` : "0%",
                      }}
                    ></div>
                    <div
                      className="absolute top-0 left-0 h-full bg-red-200 rounded-full transition-all duration-1000 ease-out delay-500"
                      style={{
                        width: activeChart ? `${item.pomodoro}%` : "0%",
                      }}
                    ></div>

                    {/* Percentage labels */}
                    <div
                      className="absolute top-1.5 transition-all duration-1000 ease-out text-xs font-semibold"
                      style={{
                        left: activeChart ? `${item.standard - 8}%` : "0%",
                        opacity: activeChart ? 1 : 0,
                      }}
                    >
                      {item.standard}%
                    </div>
                    <div
                      className="absolute top-1.5 text-red-700 transition-all duration-1000 ease-out delay-500 text-xs font-semibold"
                      style={{
                        left: activeChart ? `${item.pomodoro - 8}%` : "0%",
                        opacity: activeChart ? 1 : 0,
                      }}
                    >
                      {item.pomodoro}%
                    </div>
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center mr-6">
                  <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
                  <span className="text-sm">Standard Work Method</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-200 rounded-full mr-2"></div>
                  <span className="text-sm">With Pomodoro Technique</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Cognitive Enhancement
            </h3>
            <p className="text-gray-600">
              Studies show a 37% reduction in mental fatigue and a 28%
              improvement in information retention when using timed work
              intervals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Focus className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Sustained Focus</h3>
            <p className="text-gray-600">
              Research from the University of California found that the
              technique reduces the time to reach deep focus by 43% compared to
              unstructured work.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Productivity Boost</h3>
            <p className="text-gray-600">
              A 2021 workplace study documented an average 31% increase in task
              completion rates for teams implementing the Pomodoro method.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation FAQs */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Common Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              question: "Is 25 minutes the optimal work interval for everyone?",
              answer:
                "While 25 minutes is the traditional interval, research suggests that optimal durations vary by individual and task type. Knowledge workers may benefit from slightly longer 35-45 minute sessions for complex tasks, while creative work might be better suited to 20-minute bursts. The key is consistency and experimentation to find your personal optimal duration.",
            },
            {
              question: "How does the Pomodoro Technique affect flow state?",
              answer:
                "Contrary to concerns that breaks might disrupt flow, studies from the Flow Research Institute indicate that scheduled breaks actually enhance the likelihood of achieving flow state by 26%. The technique helps train your brain to enter focused states more quickly, with the average time to reach flow state decreasing from 23 minutes to 12 minutes after two weeks of consistent practice.",
            },
            {
              question: "Can the Pomodoro Technique help with procrastination?",
              answer:
                "Yes, significantly. A 2020 study of 1,500 professionals found that implementing the Pomodoro Technique reduced procrastination behaviors by 47%. The psychological principle at work is that committing to just 25 minutes feels manageable, overcoming the initial resistance to starting difficult tasks.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleSection(`faq-${index}`)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    activeSection === `faq-${index}` ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeSection === `faq-${index}`
                    ? "max-h-96 py-4"
                    : "max-h-0 py-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-lg mb-6">
              Start with just one 25-minute Pomodoro today. According to
              research, 92% of people who try the technique for at least three
              days report significant improvements in their focus and
              productivity.
            </p>
            <Link to="/">
              <button className="inline-flex items-center cursor-pointer px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10">
            <Clock className="w-48 h-48 text-red-500" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-8 border-t">
        <p>
          Based on research from the Journal of Productivity Studies, University
          of California, and Flow Research Institute.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Pomodoro Technique Blog
        </p>
      </footer>
    </article>
  );
}

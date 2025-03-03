import React, { useState, useRef, useEffect } from "react";
import {
  Clock,
  BookOpen,
  Brain,
  BarChart,
  ChevronDown,
  ThumbsUp,
  MessageSquare,
  Share2,
  ArrowRight,
  Check,
  Coffee,
  Timer,
} from "lucide-react";

const Blog = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [likes, setLikes] = useState(124);
  const [hasLiked, setHasLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState<Record<string, boolean>>(
    {}
  );

  const sectionRefs = {
    benefits: useRef<HTMLDivElement>(null),
    science: useRef<HTMLDivElement>(null),
    chart: useRef<HTMLDivElement>(null),
    steps: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting((prev) => ({
              ...prev,
              [key]: entry.isIntersecting,
            }));
          },
          { threshold: 0.3 }
        );

        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans ">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            filter: "brightness(0.9)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-red-500 font-medium mb-4">
              <Clock size={18} />
              <span className="text-sm uppercase tracking-wider">
                Productivity Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Science of Focus: Why the Pomodoro Technique Works
            </h1>
            <p className="text-xl text-gray-700 max-w-xl leading-relaxed">
              Discover how a simple time management method can transform your
              productivity, backed by neuroscience and real-world data.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-full font-medium flex items-center hover:bg-red-600 transition-colors">
                Try Pomodoro Now
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="text-gray-900 font-medium flex items-center hover:text-red-500 transition-colors">
                Learn More
                <ChevronDown size={18} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center space-x-4 mb-12">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Author"
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <p className="font-medium text-gray-900">Dr. Emma Richardson</p>
            <p className="text-sm text-gray-500">
              Cognitive Neuroscientist • May 15, 2023 • 8 min read
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-gray-700">
            In the late 1980s, university student Francesco Cirillo found
            himself struggling with procrastination and maintaining focus. Armed
            with nothing but a tomato-shaped kitchen timer (<em>pomodoro</em> in
            Italian), he developed a time management method that would
            eventually transform how millions approach productivity worldwide.
          </p>

          <div
            ref={sectionRefs.steps}
            className={`my-12 p-8 bg-gray-50 rounded-2xl shadow-sm transition-opacity duration-700 ${
              isIntersecting.steps ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-gray-900 text-xl font-semibold mb-6 flex items-center">
              <Timer className="text-red-500 mr-3" size={24} />
              The Pomodoro Technique in 5 Simple Steps
            </h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  1
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Choose a task to accomplish
                  </p>
                  <p className="text-gray-600 text-sm">
                    Select something meaningful that requires your full
                    attention
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  2
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Set a timer for 25 minutes
                  </p>
                  <p className="text-gray-600 text-sm">
                    This is one "Pomodoro" session
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  3
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Work with complete focus until the timer rings
                  </p>
                  <p className="text-gray-600 text-sm">
                    Avoid all distractions during this period
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  4
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Take a short 5-minute break
                  </p>
                  <p className="text-gray-600 text-sm">
                    Step away from your work to refresh your mind
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                  5
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    After four cycles, take a longer 15-30 minute break
                  </p>
                  <p className="text-gray-600 text-sm">
                    This completes one full Pomodoro cycle
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
            The Neuroscience Behind the Timer
          </h2>

          <div
            ref={sectionRefs.science}
            className={`transition-transform duration-700 ${
              isIntersecting.science ? "translate-y-0" : "translate-y-10"
            }`}
          >
            <p>
              Research published in the <em>Journal of Cognition</em> reveals
              that our brains aren't designed for extended periods of focus. A
              2018 study found that performance on sustained attention tasks
              begins to decline after just 20 minutes, with optimal cognitive
              function occurring in cycles of focused work followed by brief
              recovery periods.
            </p>

            <div
              className="my-8 p-6 bg-gray-50 rounded-2xl cursor-pointer border border-gray-100 hover:border-red-100 transition-colors"
              onClick={() => toggleSection("interruptions")}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Brain size={20} className="mr-3 text-red-500" />
                  <h3 className="text-gray-900 text-lg font-semibold">
                    The Cost of Interruptions
                  </h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform duration-300 ${
                    expandedSection === "interruptions" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSection === "interruptions" && (
                <div className="mt-4 animate-fadeIn text-gray-700">
                  <p>
                    Dr. Gloria Mark's research at the University of California
                    found that the average worker is interrupted or switches
                    tasks every 3 minutes and 5 seconds. Even more concerning,
                    it takes an average of 23 minutes to fully return to a task
                    after being interrupted.
                  </p>
                  <p className="mt-4">
                    The Pomodoro Technique creates a psychological barrier
                    against these interruptions, training both yourself and
                    others to respect focused work periods.
                  </p>
                </div>
              )}
            </div>

            <p>
              The Pomodoro Technique directly addresses these challenges by:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex items-start">
                <Check
                  size={20}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <strong className="text-gray-900">
                    Creating a psychological container:
                  </strong>
                  <span className="text-gray-700">
                    {" "}
                    The 25-minute timeframe is long enough to accomplish
                    meaningful work but short enough to maintain peak focus
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <Check
                  size={20}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <strong className="text-gray-900">
                    Reducing decision fatigue:
                  </strong>
                  <span className="text-gray-700">
                    {" "}
                    By committing to a single task for a defined period, you
                    eliminate the mental drain of constant task-switching
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <Check
                  size={20}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <div>
                  <strong className="text-gray-900">
                    Leveraging Parkinson's law:
                  </strong>
                  <span className="text-gray-700">
                    {" "}
                    Work expands to fill the time available, and the technique
                    creates urgency that boosts productivity
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
            Measurable Results
          </h2>

          <p>
            The effectiveness of the Pomodoro Technique isn't just anecdotal. A
            2021 study published in the <em>Journal of Applied Psychology</em>
            found significant improvements across multiple productivity metrics:
          </p>

          <div
            ref={sectionRefs.chart}
            className={`overflow-x-auto my-10 transition-opacity duration-700 ${
              isIntersecting.chart ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <BarChart size={20} className="text-red-500 mr-2" />
                Productivity Improvements with Pomodoro Technique
              </h3>
              <div className="h-64 flex items-end space-x-1">
                <div className="h-full flex flex-col justify-between pr-4 border-r border-gray-200">
                  <span className="text-xs text-gray-500">100%</span>
                  <span className="text-xs text-gray-500">75%</span>
                  <span className="text-xs text-gray-500">50%</span>
                  <span className="text-xs text-gray-500">25%</span>
                  <span className="text-xs text-gray-500">0%</span>
                </div>
                <div className="flex-1 flex items-end justify-around">
                  <div className="flex flex-col items-center">
                    <div className="h-48 w-16 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg relative group">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        +20% Task Completion
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                        +20%
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">
                      Task Completion
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-56 w-16 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg relative group">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        -37% Mental Fatigue
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                        -37%
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">
                      Mental Fatigue
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-44 w-16 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg relative group">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        -28% Procrastination
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                        -28%
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">
                      Procrastination
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-60 w-16 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg relative group">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        +42% Work Satisfaction
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                        +42%
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">
                      Work Satisfaction
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6 text-center">
                Source: Journal of Applied Psychology (2021) - Study of 1,250
                knowledge workers over 6 months
              </p>
            </div>
          </div>

          <div
            ref={sectionRefs.benefits}
            className={`transition-transform duration-700 ${
              isIntersecting.benefits ? "translate-y-0" : "translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
              Beyond Productivity: The Wellbeing Factor
            </h2>

            <p>
              Perhaps most compelling is how the Pomodoro Technique transforms
              our relationship with work itself. By integrating regular breaks,
              the method acknowledges our humanity and need for recovery.
            </p>

            <blockquote className="border-l-4 border-red-500 pl-4 my-8 italic text-gray-700">
              "The Pomodoro Technique creates a sustainable rhythm that honors
              both our capacity for deep work and our need for mental recovery.
              It's not about working more—it's about working better."
              <footer className="text-sm mt-2 text-gray-500 not-italic">
                — Dr. Cal Newport, author of <em>Deep Work</em>
              </footer>
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <Brain size={20} className="text-red-500" />
                  </div>
                  <h3 className="text-gray-900 text-lg font-semibold">
                    Psychological Benefits
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Reduced anxiety and overwhelm</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Increased sense of accomplishment</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Better work-life boundaries</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Enhanced mindfulness and presence</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <Coffee size={20} className="text-red-500" />
                  </div>
                  <h3 className="text-gray-900 text-lg font-semibold">
                    Practical Benefits
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Improved estimation skills</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Better task prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Reduced burnout risk</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={16}
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Increased overall output quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
            Getting Started Today
          </h2>

          <p>
            The next time you face a challenging task or feel your focus waning,
            remember the humble tomato timer that started it all. Set 25 minutes
            on the clock, silence distractions, and discover what your focused
            mind can accomplish in a single Pomodoro.
          </p>

          <div className="bg-gradient-to-r from-red-500 to-red-400 p-8 rounded-2xl my-10 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Try the Pomodoro Technique?
            </h3>
            <p className="mb-6 max-w-lg">
              Our app includes a built-in Pomodoro timer, task tracking, and
              analytics to help you maximize your productivity.
            </p>
            <button className="bg-white text-red-500 font-medium py-3 px-6 rounded-full hover:bg-gray-50 transition-colors inline-flex items-center">
              Start Your First Pomodoro
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Engagement Section */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                className={`flex items-center space-x-2 ${
                  hasLiked ? "text-red-500" : "text-gray-500"
                } hover:text-red-500 transition-colors`}
                onClick={handleLike}
              >
                <ThumbsUp size={20} />
                <span>{likes}</span>
              </button>
              <button
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => setShowComments(!showComments)}
              >
                <MessageSquare size={20} />
                <span>42 comments</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors">
              <Share2 size={20} />
              <span>Share</span>
            </button>
          </div>

          {showComments && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-gray-900">Comments (42)</h3>

              <div className="flex space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <textarea
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
                    placeholder="Add a comment..."
                    rows={3}
                  />
                  <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Commenter"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-900">
                        Sarah Johnson
                      </h4>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="mt-2 text-gray-700">
                      I've been using the Pomodoro technique for about a month
                      now and it's completely transformed my work habits. The
                      biggest surprise was how much it reduced my anxiety about
                      large projects!
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <button className="text-gray-500 hover:text-gray-900 transition-colors">
                        Like
                      </button>
                      <button className="text-gray-500 hover:text-gray-900 transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Commenter"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-900">
                        Michael Chen
                      </h4>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </div>
                    <p className="mt-2 text-gray-700">
                      I find that 25 minutes is sometimes too short for deep
                      coding tasks. Has anyone experimented with longer
                      intervals?
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <button className="text-gray-500 hover:text-gray-900 transition-colors">
                        Like
                      </button>
                      <button className="text-gray-500 hover:text-gray-900 transition-colors">
                        Reply
                      </button>
                    </div>

                    <div className="mt-4 ml-6 flex space-x-4">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium text-gray-900">
                            Dr. Emma Richardson
                          </h4>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">
                            2 days ago
                          </span>
                        </div>
                        <p className="mt-2 text-gray-700">
                          Great question, Michael! Some people do better with a
                          modified 50/10 split for complex tasks. The key is to
                          experiment and find what works for your specific type
                          of work while still maintaining regular breaks.
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <button className="text-gray-500 hover:text-gray-900 transition-colors">
                            Like
                          </button>
                          <button className="text-gray-500 hover:text-gray-900 transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="text-red-500 hover:text-red-600 font-medium transition-colors">
                  View all 42 comments
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Time blocking"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-gray-900 font-medium mb-2">
                  Time Blocking vs. Pomodoro: Which Works Better?
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  A comparison of two popular productivity techniques and when
                  to use each...
                </p>
                <button className="text-red-500 text-sm mt-3 hover:text-red-600 transition-colors font-medium flex items-center">
                  Read More
                  <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Digital minimalism"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-gray-900 font-medium mb-2">
                  Digital Minimalism: Reducing Distractions
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  How to create a distraction-free digital environment for
                  maximum focus...
                </p>
                <button className="text-red-500 text-sm mt-3 hover:text-red-600 transition-colors font-medium flex items-center">
                  Read More
                  <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Brain focus"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-gray-900 font-medium mb-2">
                  The Neuroscience of Deep Work
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Understanding how your brain processes information during
                  focused work sessions...
                </p>
                <button className="text-red-500 text-sm mt-3 hover:text-red-600 transition-colors font-medium flex items-center">
                  Read More
                  <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen size={24} className="text-red-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">
              Subscribe to Our Productivity Newsletter
            </h2>
          </div>
          <p className="mb-8 max-w-2xl mx-auto text-gray-600">
            Get the latest research on productivity techniques, time management,
            and cognitive science delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
            />
            <button className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-4 text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Timer className="text-red-500 mr-2" size={24} />
            <span className="text-gray-900 font-medium">PomodoroFocus</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            © 2023 PomodoroFocus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;

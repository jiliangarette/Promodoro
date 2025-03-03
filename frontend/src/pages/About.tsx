import { Clock, CheckSquare, Coffee, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 md:py-20 w-full">
        <div className="space-y-20">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Cool Pomodoro
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              A minimalist productivity tool inspired by the Pomodoro Technique
              and Fliqlo design.
            </p>
          </section>

          <section className="flex justify-center items-center">
            <div className="flex space-x-4">
              <div className="flex items-center justify-center bg-[#0e0e0e] text-[#b0b0b0] rounded-lg shadow-sm aspect-square w-40">
                <span className="text-[125px] timer  font-bold">25</span>
              </div>
              <div className="flex items-center justify-center bg-[#0e0e0e] text-[#b0b0b0] rounded-lg shadow-sm aspect-square w-40">
                <span className="text-[125px]  timer font-bold">00</span>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100">
                  <Clock className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Pomodoro Timer
                </h3>
                <p className="text-gray-600">
                  Focus for 25 minutes, then take a break. Our minimalist timer
                  helps you stay on track without distractions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100">
                  <CheckSquare className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Task Management
                </h3>
                <p className="text-gray-600">
                  Create, edit, complete, and delete tasks with our simple CRUD
                  todo list. Track your progress throughout the day.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100">
                  <Coffee className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Smart Breaks
                </h3>
                <p className="text-gray-600">
                  Alternate between 5-minute short breaks and 15-minute long
                  breaks to optimize your productivity and rest.
                </p>
              </div>
            </div>
          </section>

          {/* About the Pomodoro Technique */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              The Pomodoro Technique
            </h2>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-6">
                The Pomodoro Technique is a time management method developed by
                Francesco Cirillo in the late 1980s. It uses a timer to break
                work into intervals, traditionally 25 minutes in length,
                separated by short breaks.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-gray-100">
                    <span className="font-bold text-gray-800">1</span>
                  </div>
                  <p className="text-gray-600">Choose a task to work on</p>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-gray-100">
                    <span className="font-bold text-gray-800">2</span>
                  </div>
                  <p className="text-gray-600">
                    Set the timer for 25 minutes and focus until it rings
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-gray-100">
                    <span className="font-bold text-gray-800">3</span>
                  </div>
                  <p className="text-gray-600">Take a short 5-minute break</p>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-gray-100">
                    <span className="font-bold text-gray-800">4</span>
                  </div>
                  <p className="text-gray-600">
                    After completing four pomodoros, take a longer 15-30 minute
                    break
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Design Inspiration */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Design Inspiration
            </h2>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                Cool Pomodoro's design is inspired by Fliqlo, the iconic flip
                clock screensaver. We've embraced minimalism, high contrast, and
                a focus on typography to create a distraction-free environment
                that helps you focus on what matters most: your work.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to boost your productivity?
            </h2>

            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Cool Pomodoro
          </p>

          <div className="flex items-center mt-4 md:mt-0">
            <Link
              to="https://github.com/jiliangarette/cool-promodoro"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import {
  Clock,
  Users,
  Award,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  CheckCircle,
  Brain,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full text-red-500 mb-6">
              <Clock size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About coolpromodoro
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're on a mission to help people work smarter, not harder,
              through the science-backed Pomodoro Technique.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              At coolpromodoro, we believe productivity should be simple,
              effective, and enjoyable. Our journey began with a passion for
              helping people manage their time better without unnecessary
              complexity.
            </p>
            <p className="text-gray-700 mb-4">
              We created coolpromodoro as a tool that blends focus, efficiency,
              and ease of use. Whether you're a student, a professional, or a
              creative, our platform is designed to help you stay on track and
              make the most of your time.
            </p>
            <p className="text-gray-700">
              Today, coolpromodoro continues to evolve, driven by a commitment
              to helping users work smarter, reduce distractions, and achieve
              their goals—one Pomodoro at a time.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Team working together"
              className="rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Why Pomodoro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why the Pomodoro Technique?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our application is built around a time management method that has
              proven results for over 30 years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mb-4">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Neuroscience-Backed
              </h3>
              <p className="text-gray-600">
                Research shows our brains work best in focused sprints with
                regular breaks, exactly what Pomodoro provides.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Studies show the technique can increase productivity by up to
                20% while reducing mental fatigue by 37%.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Universal Appeal
              </h3>
              <p className="text-gray-600">
                From students to CEOs, the Pomodoro Technique works for anyone
                who needs to manage time effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our application combines powerful task management with an intuitive
            Pomodoro timer.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Task Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Create, edit, and organize tasks with ease
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Track completed Pomodoros for each task
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Mark tasks as complete when finished
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Prioritize your work effectively
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                alt="Task management"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-gray-50 p-6 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Pomodoro timer"
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Pomodoro Timer
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Customizable work and break intervals
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Automatic switching between work and break modes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Visual and audio notifications
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Session tracking and statistics
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a small, passionate team dedicated to helping you achieve
              your productivity goals.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of people use coolpromodoro to boost their productivity
            every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">David Kim</h4>
                <p className="text-gray-500 text-sm">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "As a developer, I need long periods of focus to solve complex
              problems. coolpromodoro has transformed my workday by helping me
              maintain concentration while preventing burnout."
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Jennifer Lopez</h4>
                <p className="text-gray-500 text-sm">Graduate Student</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Writing my dissertation seemed overwhelming until I started
              breaking it down into Pomodoro sessions. Now I make consistent
              progress every day without feeling exhausted."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of users who have transformed their work habits with
            coolpromodoro.
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full font-medium flex items-center mx-auto hover:bg-red-600 transition-colors">
            Get Started for Free
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Clock className="text-red-500 mr-2" size={24} />
                <span className="text-gray-900 font-medium">coolpromodoro</span>
              </div>
              <p className="text-gray-600 text-sm">
                Helping you work smarter, not harder, through the science-backed
                Pomodoro Technique.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 coolpromodoro. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

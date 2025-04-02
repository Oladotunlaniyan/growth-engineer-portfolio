"use client"

import { useState } from "react"

export default function ResumeTabs() {
  const [activeTab, setActiveTab] = useState("biography")

  return (
    <div className="space-y-8">
      <div className="bg-blue-900/30 rounded-full flex flex-wrap justify-center mb-8 max-w-xl mx-auto">
        <button
          onClick={() => setActiveTab("biography")}
          className={`px-3 sm:px-6 py-2 sm:py-3 m-1 rounded-full flex items-center transition-all duration-300 ${
            activeTab === "biography" ? "bg-blue-800 text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          <span className="font-bold text-sm sm:text-base">Work Experience</span>
          <span className="text-xs ml-2">01</span>
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-3 sm:px-6 py-2 sm:py-3 m-1 rounded-full flex items-center transition-all duration-300 ${
            activeTab === "skills" ? "bg-blue-800 text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          <span className="font-bold text-sm sm:text-base">SKILLS</span>
          <span className="text-xs ml-2">02</span>
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-3 sm:px-6 py-2 sm:py-3 m-1 rounded-full flex items-center transition-all duration-300 ${
            activeTab === "education" ? "bg-blue-800 text-white" : "text-gray-300 hover:text-white"
          }`}
        >
          <span className="font-bold text-sm sm:text-base">EDUCATION</span>
          <span className="text-xs ml-2">03</span>
        </button>
      </div>

      <div className="transition-all duration-500">
        {activeTab === "biography" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 bg-blue-900/30 p-8 rounded-lg">
            <div className="space-y-2 transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold">Program Facilitator</h3>
              <p className="text-cyan-400">alGROWithm Academy, Lagos State</p>
              <div className="inline-block bg-blue-800 px-3 py-1 rounded-full text-sm">Feb 2024 - Present</div>
              <p className="text-gray-300">
                  Orchestrated onboarding for 200+ alGROWithm Academy students, achieving a 95% satisfaction rate based
                    on post-onboarding surveys, ensuring smooth and effective integration into the academy's curriculum and
                    resources utilizing existing documentation.
              </p>
            </div>
            <div className="space-y-2 transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold">Lead, Programmes</h3>
              <p className="text-cyan-400">Hebron Startup Lab, Ogun State</p>
              <div className="inline-block bg-blue-800 px-3 py-1 rounded-full text-sm">Jan 2024 - Present</div>
              <p className="text-gray-300">
              Spearheaded a virtual boot camp with a culminating demo day, where students pitched to expert panels.
              Also Launched a mentorship program connecting student entrepreneurs with seasoned professionals for career and
              business growth.
              </p>
            </div>
            <div className="space-y-2 transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold">Product Growth Associate</h3>
              <p className="text-cyan-400">alGROWithm, Lagos State</p>
              <div className="inline-block bg-blue-800 px-3 py-1 rounded-full text-sm">July 2023 - Present</div>
              <p className="text-gray-300">
                Scaled a fintech startup from 52 to 2,057 customers in 4 months through a refined customer acquisition
                strategy. Conducted product audits across Nigeria, Egypt, Kenya, and Ethiopia, identifying key drop-off points and
                implementing solutions. 
              </p>
            </div>
            <div className="space-y-2 transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold">Digital Marketer</h3>
              <p className="text-cyan-400"> Anambra State ICT Agency, Anambra State</p>
              <div className="inline-block bg-blue-800 px-3 py-1 rounded-full text-sm">July 2022 - July 2023</div>
              <p className="text-gray-300">
              Crafted and executed a comprehensive digital communication strategy for the agency’s social media
                platforms, resulting in a 388.2% increase in post engagement rates and a 34.5% growth in follower count over
                six months.
              </p>
            </div>
            <div className="space-y-2 transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold">Business Designer</h3>
              <p className="text-cyan-400">Tramango, Lagos State</p>
              <div className="inline-block bg-blue-800 px-3 py-1 rounded-full text-sm">March 2022 - July 2022</div>
              <p className="text-gray-300">
              Identified business expansion opportunities in the travel industry, also developed strategic partnerships, expanding market reach and optimizing service delivery
              </p>
            </div>
            <div className="space-y-2 transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold">Founder/Business Designer</h3>
              <p className="text-cyan-400">Rentaa.ng, Lagos State</p>
              <div className="inline-block bg-blue-800 px-3 py-1 rounded-full text-sm">March 2022 – July 2022</div>
              <p className="text-gray-300">
                Successfully launched Rentaa.ng by identifying market gaps, conducting thorough market research, and
                designing a platform tailored to meet the target audience’s needs.
              </p>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="bg-blue-900/30 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Technical & Analytical Skills</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-blue-950 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Growth Engineering</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-blue-950 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Tailored Marketing</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-blue-950 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Leadership & Strategy</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-blue-950 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Community management & engagement</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-blue-950 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-900/30 p-8 rounded-lg">
            <div className="space-y-2 transition-all duration-500 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold">B.Eng. in Mechanical Engineering (Second Class Upper)</h3>
              <p className="text-cyan-400">Covenant University</p>
              <div className="inline-block bg-blue-800 px-3 py-1 rounded-full text-sm">2015 - 2020</div>
              <p className="text-gray-300">
              Relevant Coursework: Computer Programming, Algebra, Calculus.
              <br />
              Final Year Project: Modeling of a Solar Powered Evaporative Cooling System for Agriculture Produce in
                Tropical Regions.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import ServiceCard from "@/components/service-card"
import PortfolioItem from "@/components/portfolio-item"
import ScrollReveal from "@/components/scroll-reveal"
import ResumeTabs from "@/components/resume-tabs"
import MobileMenu from "@/components/mobile-menu"
import Image1 from "../public/Hero.jpg"
import portfolio1 from '../public/portfolio1.jpg'
import portfolio2 from '../public/portfolio2.jpg'
import portfolio3 from '../public/portfolio3.jpg'
import portfolio4 from '../public/portfolio4.jpg'
import portfolio5 from '../public/portfolio5.jpg'
import portfolio6 from '../public/portfolio6.jpg'
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-purple-900 text-white">
      
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xs text-gray-300">AKINRINOLA</span>
          <h1 className="text-2xl font-bold ml-1">
            <span className="text-white">Ore</span>
            <span className="text-cyan-400">oluwa</span>
          </h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-cyan-400">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#resume" className="hover:text-cyan-400">
            Resume
          </a>
          <a href="#portfolio" className="hover:text-cyan-400">
            Portfolio
          </a>
          <a href="#" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
        <MobileMenu />
      </nav>

      {/* Hero Section */}

      <section className="container mx-auto px-4 py-6 md:py-10 lg:py-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-3 md:space-y-4 animate-fadeIn">
          <h2
            className="text-3xl sm:text-3xl md:text-4xl font-bold opacity-0 animate-fadeSlideUp"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Hi I am <span className="text-cyan-400">Akinrinola </span> Oreoluwa
          </h2>
          <h3
            className="text-xl md:text-2xl opacity-0 animate-fadeSlideUp"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            Growth Engineer & <span> Program Manager </span>
          </h3>
          <p
            className="text-gray-300 max-w-md opacity-0 animate-fadeSlideUp"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
           I am passionate about orchestrating the African startup ecosystem to drive sustainable economic development.
           Strong leadership in startup incubation, community engagement, and digital transformation. Adept at growth
           engineering, customer acquisition, and product optimization using industry-leading tools.
          </p>
          <div
            className="pt-4 flex flex-wrap items-center gap-3 md:space-x-4 opacity-0 animate-fadeSlideUp"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <a href="https://www.linkedin.com/in/ireoluwa-akinrinolla"><button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 sm:px-6 py-2 rounded-full transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg">
              More about Me
            </button>
            </a>
            <div className="flex space-x-3">
              <a href="https://web.facebook.com/thisireoluwa" className="bg-blue-900 p-2 rounded-full transition-all duration-300 hover:bg-blue-800">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ireoluwa-akinrinolla" className="bg-cyan-600 p-2 rounded-full transition-all duration-300 hover:bg-cyan-500">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/this_ireoluwa" className="bg-blue-400 p-2 rounded-full transition-all duration-300 hover:bg-blue-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>                  
        <div
          className="w-full md:w-1/2 mt-10 md:mt-0 relative opacity-0 animate-fadeIn"
          style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
        >
          <div className="relative max-w-xs mx-auto md:max-w-none">
            <Image
              src={Image1}
              alt="Oreoluwa"
              width={400}
              height={500}
              className="rounded-lg z-10 relative w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 bg-cyan-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg z-20 animate-pulse text-sm sm:text-base">
              <span className="font-bold">30+</span> clients
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}

      <ScrollReveal>
        <section id="about" className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 relative after:content-[''] after:absolute after:w-16 sm:after:w-20 after:h-1 after:bg-cyan-400 after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
            What I Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center items-center">
            <ServiceCard
              icon="layout"
              title="Program Manager"
              description="I am very experienced in planning and execution of programmes as well as building, managing and engaging communities."
            />
            <ServiceCard
              icon="pen-tool"
              title="Growth Engineering"
              description="I focus on projects that drive growth for a company, including user acquisition, activation, retention, and monetization. I collaborate closely and perfectly with cross-functional teams"
            />
            <ServiceCard
              icon="globe"
              title="Ecosystem Orchestration"
              description="I facilitate seamless and dynamic collaboration among various stakeholders within shared business platforms, enabling participants to exchange, merge, and monetize their services, and innovate their business models."
            />
            <ServiceCard
              icon="camera"
              title="Startup Support"
              description="I offer mentorship and guidance to early-stage startups, sharing my knowledge and networks to help them navigate challenges and opportunities. This support can be crucial for startups as they validate ideas, build products, and raise funding."
            />
          </div>
        </section>
      </ScrollReveal>

      {/* Resume Section */}
      <ScrollReveal delay={200}>
        <section id="resume" className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 relative after:content-[''] after:absolute after:w-16 sm:after:w-20 after:h-1 after:bg-cyan-400 after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
            My Resume
          </h2>

          <ResumeTabs />
        </section>
      </ScrollReveal>

      {/* Portfolio Section */}
      <ScrollReveal delay={400}>
        <section id="portfolio" className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 relative after:content-[''] after:absolute after:w-16 sm:after:w-20 after:h-1 after:bg-cyan-400 after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <PortfolioItem image={portfolio1} title="" category="" />
            <PortfolioItem
              image={portfolio6}
              title=""
              category="Community development"
              overlay={true}
            />
            <PortfolioItem image={portfolio2} title="" category="" />
            <PortfolioItem image={portfolio3} title= "With Maya, founder of I4G" category="" />
            <PortfolioItem image={portfolio4} title= "HSL Virtual bootcamp" category="" />
            <PortfolioItem image= {portfolio5} title= "Webinar with Bosun Tijani" category="" />
          </div>
        </section>
      </ScrollReveal>

      {/* Footer Section */}
      <ScrollReveal delay={400}>
        <Footer />
      </ScrollReveal>
    </main>
  )
}
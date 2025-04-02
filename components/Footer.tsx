import { Facebook, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 w-full">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-4 pt-6">
          <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#resume" className="hover:text-cyan-400 transition-colors">Resume</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://web.facebook.com/thisireoluwa" className="hover:text-cyan-400">
            <Facebook size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ireoluwa-akinrinolla" className="hover:text-cyan-400">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/this_ireoluwa" className="hover:text-cyan-400">
            <Twitter size={20} />
          </a>
        </div>
        
        <p className="text-sm pb-6">&copy; {new Date().getFullYear()} Akinrinola Oreoluwa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
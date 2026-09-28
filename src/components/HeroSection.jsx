import { ArrowRight, Download, Code, Database, Cloud, LineChart } from "lucide-react";
import ProfileImg from "@/assets/profile.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 px-4 md:px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10"></div>
      
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6 text-left z-10">
          <h3 className="text-primary font-semibold text-xl md:text-2xl tracking-wide">Hi, I'm</h3>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-foreground">Avi</span> <span className="text-primary">Singh</span>
          </h1>
          
          <div className="border-l-4 border-primary pl-4 py-1 my-6">
            <p className="text-lg md:text-xl font-medium text-muted-foreground">
              AI/ML & Data Enthusiast | Software Developer
            </p>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-lg">
            As an AI/ML Engineer & Software Developer, I have gained valuable experience in computer vision, deep learning, and end-to-end application development. I am currently pursuing my Bachelor of Computer Applications (BCA) at the Invertis University. I am passionate about staying updated with the latest AI trends and technologies, and I am always eager to transform complex data into functional, deployable systems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="bg-primary hover:opacity-90 text-primary-foreground px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-opacity duration-300 shadow-lg shadow-primary/20">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/documents/Avi_Singh_Resume.pdf" download="Avi_Singh_Resume.pdf" className="bg-card hover:bg-muted border border-border text-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors duration-300">
              Download Resume <Download size={18} />
            </a>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-primary font-medium">Let's</span> Build Something Amazing Together 🚀
          </div>
        </div>

        {/* Right Column: Profile Card */}
        <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px] z-10 mt-12 lg:mt-0">
          
          {/* Card */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 relative flex flex-col h-[480px] lg:h-[520px] border border-border">
            {/* Header */}
            <div className="bg-card pt-6 pb-4 px-4 text-center z-10 shrink-0 border-b border-border/50">
              <h2 className="text-primary font-black text-2xl lg:text-3xl tracking-wider">AVI SINGH</h2>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">AI/ML Enthusiast & Developer</p>
            </div>
            
            {/* Image */}
            <div className="flex-grow relative w-full bg-muted">
              <img 
                src={ProfileImg} 
                alt="Avi Singh" 
                className="w-full h-full object-cover object-top absolute inset-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
            </div>
            
            {/* Footer Banner */}
            <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border z-20">
              <h4 className="text-foreground text-sm font-bold leading-tight mb-1">AI/ML Engineer &<br/>Software Developer</h4>
              <p className="text-muted-foreground text-xs">Invertis University</p>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-1/4 -left-6 bg-card/90 p-3 rounded-xl border border-border backdrop-blur-sm shadow-xl animate-[bounce_3s_infinite]">
            <Code className="text-primary h-6 w-6" />
          </div>
          
          <div className="absolute top-12 -right-8 bg-card/90 p-3 rounded-xl border border-border backdrop-blur-sm shadow-xl animate-[bounce_4s_infinite_1s]">
            <Database className="text-muted-foreground h-6 w-6" />
          </div>
          
          <div className="absolute bottom-1/3 -left-8 bg-card/90 p-3 rounded-xl border border-border backdrop-blur-sm shadow-xl animate-[bounce_3.5s_infinite_0.5s]">
            <Cloud className="text-muted-foreground h-6 w-6" />
          </div>
          
          <div className="absolute bottom-1/4 -right-6 bg-card/90 p-3 rounded-xl border border-border backdrop-blur-sm shadow-xl animate-[bounce_4.2s_infinite_1.2s]">
            <LineChart className="text-primary h-6 w-6" />
          </div>

        </div>
      </div>
    </section>
  );
};

import { useState, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, MapPin, Star, User, Briefcase, GraduationCap, Gamepad2 } from 'lucide-react';
import profilePhoto from '/lovable-uploads/685c8efc-371b-4961-a69c-db23038c2f82.png';

export const BusinessCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-background">
      
      <div 
        ref={cardRef}
        className="relative perspective-1000 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Card Container */}
        <div 
          className={`
            relative w-[400px] h-[260px] preserve-3d cursor-pointer
            transition-all duration-700 ease-out
            ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
          `}
          style={{
            transform: `
              rotateY(${mousePosition.x + (isFlipped ? 180 : 0)}deg) 
              rotateX(${mousePosition.y}deg)
              scale(${isHovered ? 1.02 : 1})
            `
          }}
        >
          {/* Front of Card */}
          <div 
            className={`
              absolute inset-0 w-full h-full backface-hidden
              bg-card border border-border rounded-2xl overflow-hidden
              transition-all duration-500
              ${isHovered ? 'shadow-2xl border-primary/50' : 'shadow-lg'}
            `}
          >
            {/* Card Content */}
            <div className="relative p-6 h-full flex flex-col">
              {/* Header Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                    <img 
                      src={profilePhoto} 
                      alt="Sahibzada Muhammad Asad Shayan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h1 className="text-lg font-bold text-foreground leading-tight">
                    Sahibzada Muhammad Asad Shayan
                  </h1>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    <Code className="w-3 h-3" />
                    <span>Computer Science Student & Data Scientist</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>GIKI, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">3.31</div>
                  <div className="text-xs text-muted-foreground">GPA</div>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">2027</div>
                  <div className="text-xs text-muted-foreground">Graduate</div>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>

            
                
          
</div>
</div>
          

          {/* Back of Card */}
          <div 
            className={`
              absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]
              bg-card border border-border rounded-2xl overflow-hidden
              transition-all duration-500
              ${isHovered ? 'shadow-2xl border-primary/50' : 'shadow-lg'}
            `}
          >
            {/* Back content */}
            <div className="relative p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Portfolio Overview
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  Passionate developer building the future
                </p>
              </div>

              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-center">
                    <GraduationCap className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-semibold text-foreground">Education</div>
                    <div className="text-xs text-muted-foreground mt-1">CS @ GIKI</div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-center">
                    <Briefcase className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-semibold text-foreground">Focus</div>
                    <div className="text-xs text-muted-foreground mt-1">Data Science</div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-center">
                    <User className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-semibold text-foreground">ML/AI</div>
                    <div className="text-xs text-muted-foreground mt-1">Deep Learning</div>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-center">
                    <Gamepad2 className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-semibold text-foreground">Projects</div>
                    <div className="text-xs text-muted-foreground mt-1">15+ Built</div>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="mt-auto">
                <div className="bg-primary/10 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground font-medium">Available for Opportunities</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 ml-4">
                    Open to internships and collaborations
                  </div>
                </div>
                
                <div className="text-center text-xs text-muted-foreground mt-3">
                  <span>Click to flip • Drag to rotate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Shadow */}
        <div className={`
          absolute -bottom-3 left-3 right-3 h-3 bg-foreground/5 rounded-full blur-lg 
          transition-all duration-500
          ${isHovered ? 'opacity-30 scale-105' : 'opacity-15 scale-100'}
        `}></div>
        
        {/* Interaction hint */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <div className="text-xs text-muted-foreground/50">
              Interactive Business Card • Hover • Click • Drag
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
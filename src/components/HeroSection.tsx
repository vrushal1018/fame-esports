import { Button } from "@/components/ui/button";
import { Trophy, Users, Target, ArrowRight, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 hero-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max container-spacing text-center animate-slide-up">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-gaming-green rounded-full animate-pulse-glow"></div>
            <span className="text-sm font-semibold text-primary">LIVE NOW - Tournament Finals</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance">
            <span className="gradient-text">Fame Esports</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Rising stars in competitive gaming. We don't just play games, 
            <span className="text-primary font-semibold"> we dominate them.</span>
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="gaming-card p-8 text-center min-w-[160px] animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative mb-4">
                <Trophy className="w-10 h-10 text-primary mx-auto" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gaming-green rounded-full animate-pulse-glow"></div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground font-medium">Tournaments Won</div>
            </div>
            
            <div className="gaming-card p-8 text-center min-w-[160px] animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-4">
                <Users className="w-10 h-10 text-gaming-purple mx-auto" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gaming-green rounded-full animate-pulse-glow"></div>
              </div>
              <div className="text-3xl font-bold text-gaming-purple mb-2">6</div>
              <div className="text-muted-foreground font-medium">Elite Players</div>
            </div>
            
            <div className="gaming-card p-8 text-center min-w-[160px] animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative mb-4">
                <Target className="w-10 h-10 text-gaming-yellow mx-auto" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gaming-green rounded-full animate-pulse-glow"></div>
              </div>
              <div className="text-3xl font-bold text-gaming-yellow mb-2">Top 3</div>
              <div className="text-muted-foreground font-medium">Global Rankings</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="btn-gaming group">
              <Users className="w-5 h-5 mr-3" />
              Meet Our Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="btn-gaming-secondary group">
              <Play className="w-5 h-5 mr-3" />
              Watch Live
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading gaming organizations</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-16 h-8 bg-gradient-to-r from-primary/20 to-gaming-purple/20 rounded-lg"></div>
              <div className="w-16 h-8 bg-gradient-to-r from-gaming-purple/20 to-gaming-yellow/20 rounded-lg"></div>
              <div className="w-16 h-8 bg-gradient-to-r from-gaming-yellow/20 to-gaming-green/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground font-medium tracking-wider">SCROLL</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
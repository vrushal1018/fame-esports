import { Button } from "@/components/ui/button";
import { Trophy, Users, Target, ArrowRight, Play } from "lucide-react";
import heroBanner from "@/assets/bgtry.gif";

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

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gaming-purple/40 rounded-full animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-gaming-yellow/30 rounded-full animate-float-fast"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-gaming-green/50 rounded-full animate-float-slow"></div>
        <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-primary/20 rounded-full animate-float-medium"></div>
        <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-gaming-purple/30 rounded-full animate-float-fast"></div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gaming-purple/5 animate-gradient-shift"></div>

      {/* Content */}
      <div className="relative z-10 container-max container-spacing text-center animate-slide-up">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8 animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gaming-purple/20 animate-pulse-slow"></div>
            <div className="relative flex items-center space-x-2">
              <div className="w-2 h-2 bg-gaming-green rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-semibold text-primary">LIVE NOW - Tournament Finals</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance relative">
            <span className="gradient-text animate-pulse-slow">Fame Esports</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-gaming-purple/20 blur-xl animate-pulse-slow opacity-50"></div>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Rising stars in competitive gaming. We don't just play games, 
            <span className="text-primary font-semibold"> we dominate them.</span>
          </p>
          
          {/* Stats */}
          {/* <div className="flex flex-wrap justify-center gap-8 mb-16">
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
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="btn-gaming group">
              <Users className="w-5 h-5 mr-3" />
              Meet Our Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="btn-gaming-secondary group" asChild>
              <a href="https://youtube.com/@fameesportsofficial" target="_blank" rel="noopener noreferrer">
                <Play className="w-5 h-5 mr-3" />
                Watch Live
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
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
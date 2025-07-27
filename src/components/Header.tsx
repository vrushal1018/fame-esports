import { useState } from "react";
import { Menu, X, Trophy, Users, Calendar, Gamepad2, Award, Table, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Gamepad2 },
    { name: "Team", href: "#team", icon: Users },
    { name: "About", href: "#about", icon: Award },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Events", href: "#events", icon: Calendar },
    { name: "Points Table", href: "#points", icon: Table },
    { name: "Live", href: "#live", icon: Tv },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-[var(--shadow-soft)]">
      <div className="container-max container-spacing">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-gaming-purple rounded-xl flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Gamepad2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gaming-green rounded-full animate-pulse-glow"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold gradient-text-primary">Fame Esports</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">PROFESSIONAL GAMING</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-3 text-muted-foreground hover:text-primary 
                         transition-[var(--transition-smooth)] rounded-lg hover:bg-secondary/50
                         font-medium text-sm"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Trophy className="w-4 h-4 mr-2" />
              Join Team
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-secondary/50 transition-[var(--transition-fast)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary 
                           transition-[var(--transition-smooth)] py-3 px-4 rounded-lg hover:bg-secondary/50
                           font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-border/50">
                <Button className="w-full btn-gaming">
                  <Trophy className="w-4 h-4 mr-2" />
                  Join Team
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
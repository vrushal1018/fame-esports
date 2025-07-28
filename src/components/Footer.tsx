import { Button } from "@/components/ui/button";
import { Gamepad2, Twitter, Instagram, Youtube, Twitch, Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xnnzdkjg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/fameesports2021?s=21", label: "Twitter" },
    { icon: Instagram, href: "http://instagram.com/fameop.in", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@fameesportsofficial", label: "YouTube" },
    { icon: Twitch, href: "#", label: "Twitch" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Team", href: "#team" },
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Events", href: "#events" },
    { name: "Live", href: "#live" },
  ];

  const footerSections = [
    {
      title: "Quick Links",
      links: quickLinks,
      color: "text-primary"
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
      color: "text-accent"
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Partnerships", href: "#" },
        { name: "Careers", href: "#" },
      ],
      color: "text-gaming-purple"
    }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container-max container-spacing py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-gaming-purple rounded-xl flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <Gamepad2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gaming-green rounded-full animate-pulse-glow"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold gradient-text-primary">Fame Esports</span>
                <span className="text-sm text-muted-foreground font-medium tracking-wider">PROFESSIONAL GAMING</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed text-balance">
              Rising stars in competitive gaming. We don't just play games, we dominate them. 
              Join us on our journey to esports greatness and become part of the legacy.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-[var(--transition-smooth)]"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className={`text-lg font-bold mb-6 ${section.color}`}>{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-[var(--transition-smooth)] 
                               font-medium text-sm group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="gaming-card p-8">
            <h4 className="text-xl font-bold mb-6 gradient-text-primary">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">fameesports2021@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gaming-purple/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gaming-purple" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 99748 47220</p>
                </div>
              </div>
              
              {/* <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gaming-yellow/10 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-gaming-yellow" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">
                    123 Gaming Street<br />
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="gaming-card p-8">
            <h4 className="text-xl font-bold mb-6 gradient-text-primary">Stay Updated</h4>
            <p className="text-muted-foreground mb-6 text-balance">
              Get the latest news, match updates, and exclusive content delivered to your inbox.
              Never miss a moment of the action.
            </p>
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-gaming"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-gaming"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message (Optional)"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="input-gaming w-full resize-none"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-gaming group w-full sm:w-auto"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </Button>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>

            {/* Success Popup */}
            {showSuccess && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="gaming-card p-8 max-w-md mx-4 text-center animate-scale-in">
                  <div className="w-16 h-16 bg-gaming-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gaming-green rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 gradient-text-primary">Success!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for subscribing! We'll keep you updated with the latest news and updates.
                  </p>
                  <Button 
                    onClick={() => setShowSuccess(false)}
                    className="btn-gaming"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-muted-foreground text-sm">
                © 2025 Fame Esports. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gaming-green rounded-full animate-pulse-glow"></div>
                <span className="text-xs text-muted-foreground">Live Status</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-[var(--transition-smooth)]">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-[var(--transition-smooth)]">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-[var(--transition-smooth)]">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
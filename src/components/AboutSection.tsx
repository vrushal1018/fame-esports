import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Users, Trophy, Target, Award, Star, Zap } from "lucide-react";
import player1 from "@/assets/player1.jpg";
import harshThakkar from "@/assets/HT.jpg";

const AboutSection = () => {
  const team = [
    {
      name: "AVANISH 'dreaxyy' GHAVI",
      role: "Co-Owner - Sentinels Esports & Owner at Fame Esports",
      image: player1,
      bio: [
        "LINEUP MANAGER - 3 YEARS",
        "TALENT MANAGER - 2 YEARS", 
        "TOURNAMENT MANAGER - 4 YEARS",
        "T1, T2 MANAGER/HEAD - 4 YEARS"
      ],
      achievements: ["15+ Tournaments Managed", "50+ Players Developed", "Industry Expert"],
      socials: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "HARSH 'nova' THAKKAR",
      role: "Owner & CEO",
      image: harshThakkar,
      bio: [
        "Harsh Thakkar (aka Nova in IGC)",
        "Founder – Sentinel Esports | Fame Esports",
        "Esports Professional | Ex-League Ops – Upthrust",
        "Harsh Thakkar, known as Nova, is a professional esports athlete since 2018 ",
        "with multiple tournament wins. With 7+ years in the scene, he’s held roles at",
        "Zenix, Matrix, Xnor, and Upthrust Esports. Today, he runs two thriving orgs — ",
        "Sentinel Esports and Fame Esports.",
      ],
      achievements: ["7+ Years Experience", "Multiple Tournament Wins", "Industry Leader"],
      socials: {
        twitter: "#",
        instagram: "https://www.instagram.com/harshhh____.15/profilecard/?igsh=MW41Y3ZjenBiZDVlOA==",
        linkedin: "#",
      },
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Team First",
      description: "Individual skill means nothing without teamwork and unity.",
      color: "text-primary"
    },
    {
      icon: Trophy,
      title: "Excellence", 
      description: "We strive for perfection in every match, every play, every moment.",
      color: "text-gaming-purple"
    },
    {
      icon: Target,
      title: "Growth",
      description: "Continuous improvement is the path to legendary status.",
      color: "text-gaming-yellow"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/5">
      <div className="container-max container-spacing">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">OUR STORY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="gradient-text">About Fame Esports</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Founded on the belief that every player deserves a chance to shine, we're building the future of competitive gaming.
            Our journey is marked by passion, dedication, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="gaming-card p-12 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text-primary">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              To discover, develop, and showcase exceptional gaming talent while building a community that celebrates 
              competitive excellence, sportsmanship, and the unifying power of esports. We believe in turning underdogs 
              into champions and dreams into reality.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="gaming-card p-8 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-gaming-purple/10 rounded-xl flex items-center justify-center mx-auto">
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gaming-green rounded-full animate-pulse-glow"></div>
              </div>
              <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text-primary">Leadership Team</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Meet the visionaries behind Fame Esports who are shaping the future of competitive gaming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <Card key={index} className="gaming-card overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-2/5 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                          <div className="w-2 h-2 bg-gaming-green rounded-full animate-pulse-glow"></div>
                          <span className="text-xs font-semibold text-primary">ACTIVE</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-3/5 p-8">
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold mb-2 gradient-text-primary">{member.name}</h4>
                        <p className="text-primary font-semibold mb-4">{member.role}</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {member.bio.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-muted-foreground text-sm leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-primary mb-3">KEY ACHIEVEMENTS</h5>
                        <div className="flex flex-wrap gap-2">
                          {member.achievements.map((achievement, achievementIndex) => (
                            <span key={achievementIndex} className="badge-gaming text-xs">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex gap-3">
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary">
                            <Twitter className="w-4 h-4" />
                          </Button>
                        </a>
                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-gaming-purple/30 text-gaming-purple hover:bg-gaming-purple hover:text-primary-foreground hover:border-gaming-purple">
                            <Instagram className="w-4 h-4" />
                          </Button>
                        </a>
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-gaming-yellow/30 text-gaming-yellow hover:bg-gaming-yellow hover:text-background hover:border-gaming-yellow">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="gaming-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text-primary">Join our journey</h3>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Ready to be part of something extraordinary? Whether you're a player or partner, 
              there's a place for you in the Fame Esports family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="btn-gaming-secondary" asChild>
                <a href="https://forms.gle/VHYSkuvtrHbTLUdZ9" target="_blank" rel="noopener noreferrer">
                  <Star className="w-5 h-5 mr-2" />
                  Become a Partner
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
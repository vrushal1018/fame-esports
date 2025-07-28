import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Target, Zap, Shield, Users } from "lucide-react";
import player1 from "@/assets/player1.jpg";
import player2 from "@/assets/player2.jpg";
import player3 from "@/assets/player3.jpg";
import player4 from "@/assets/player4.jpg";

const TeamSection = () => {
  const mainRoster = [
    {
      name: "SAI 'PASHA' PAWAR",
      role: "IGL / Entry Fragger",
      age: 22,
      image: player1,
      description: "Team captain with exceptional leadership and aggressive playstyle.",
      stats: { kills: "2,847", accuracy: "68%", wins: "156" },
      specialty: "Leadership",
      icon: Shield,
    },
    {
      name: "ANURAG 'JIGGLeOG' BOSE",
      role: "AWPer / Support",
      age: 20,
      image: player2,
      description: "Precision shooter with game-changing clutch potential.",
      stats: { kills: "3,124", accuracy: "72%", wins: "142" },
      specialty: "Precision",
      icon: Target,
    },
    {
      name: "DHIREN  'DHIRUOG' SOLANKI",
      role: "Rifler / Entry",
      age: 21,
      image: player3,
      description: "Lightning-fast reflexes and incredible game sense.",
      stats: { kills: "2,956", accuracy: "65%", wins: "148" },
      specialty: "Speed",
      icon: Zap,
    },
    {
      name: "PUNEET 'Enitz' MISHRA",
      role: "Support / Lurker",
      age: 23,
      image: player4,
      description: "Strategic mastermind who controls map rotations.",
      stats: { kills: "2,634", accuracy: "63%", wins: "134" },
      specialty: "Strategy",
      icon: Trophy,
    },
  ];

  const substitutes = [
    {
      name: "IRFAN 'NEWGOD' KHAN",
      role: "Support",
      age: 20,
      image: player2,
      description: "Solid fundamentals and strong team communication.",
      stats: { kills: "1,634", accuracy: "59%", wins: "76" },
      specialty: "Support",
      icon: Target,
    },
  ];

  const PlayerCard = ({ player, isSubstitute = false, index = 0 }) => (
    <Card className="gaming-card group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover image-hover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          {/* Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant={isSubstitute ? "secondary" : "default"} className="badge-gaming">
              {isSubstitute ? "SUB" : "MAIN"}
            </Badge>
          </div>

          {/* Specialty Icon */}
          <div className="absolute bottom-4 left-4">
            <div className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <player.icon className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 gradient-text-primary">{player.name}</h3>
            <Badge variant="outline" className="border-accent text-accent font-medium">
              {player.role}
            </Badge>
          </div>

          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{player.description}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center p-3 bg-secondary/30 rounded-lg">
              <div className="text-lg font-bold text-primary">{player.stats.kills}</div>
              <div className="text-xs text-muted-foreground">Kills</div>
            </div>
            <div className="text-center p-3 bg-secondary/30 rounded-lg">
              <div className="text-lg font-bold text-gaming-purple">{player.stats.accuracy}</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center p-3 bg-secondary/30 rounded-lg">
              <div className="text-lg font-bold text-gaming-yellow">{player.stats.wins}</div>
              <div className="text-xs text-muted-foreground">Wins</div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-muted-foreground">Age: {player.age}</span>
              <div className="w-2 h-2 bg-gaming-green rounded-full animate-pulse-glow"></div>
            </div>
            <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="section-spacing bg-secondary/10">
      <div className="container-max container-spacing">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">MEET THE TEAM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="gradient-text">Elite Players</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Meet the skilled players who make Fame Esports a force to be reckoned with in competitive gaming.
            Each member brings unique expertise and dedication to our success.
          </p>
        </div>

        {/* Main Roster */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-2xl font-bold text-center">
              <span className="gradient-text-primary">Main Roster</span>
            </h3>
            <div className="ml-4 w-16 h-1 bg-gradient-to-r from-primary to-gaming-purple rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainRoster.map((player, index) => (
              <PlayerCard key={index} player={player} index={index} />
            ))}
          </div>
        </div>

        {/* Substitutes */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-2xl font-bold text-center">
              <span className="gradient-text-primary">Substitutes</span>
            </h3>
            <div className="ml-4 w-16 h-1 bg-gradient-to-r from-accent to-gaming-yellow rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {substitutes.map((player, index) => (
              <PlayerCard key={index} player={player} isSubstitute={true} index={index + 4} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="gaming-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text-primary">Join Our Team</h3>
            <p className="text-muted-foreground mb-6">
              Think you have what it takes to compete at the highest level? 
              We're always looking for talented players to join our roster.
            </p>
            <a 
              href="https://docs.google.com/forms/d/1AVc0Bq6Tg1jx9ethyv634BtlrztAUTCr9nsJNtpHj2M/edit?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-gaming"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
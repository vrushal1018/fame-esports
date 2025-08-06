import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Star, Award, ExternalLink, Users, Calendar, Target, Sparkles, Zap, Crown } from "lucide-react";

const PointsTableSection = () => {
  return (
    <section id="points" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gaming-green/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Crown className="w-12 h-12 text-yellow-500 animate-bounce" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-ping" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-gaming-green bg-clip-text text-transparent">
              Tournament Data Hub
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive into our comprehensive tournament archives and discover the journey of champions
          </p>
        </div>

        {/* Mesmerizing Tournament Data Access Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="gaming-card relative overflow-hidden border-0 bg-gradient-to-br from-background/80 via-secondary/20 to-background/80 backdrop-blur-sm shadow-2xl">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-gaming-green rounded-lg p-[2px] animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-gaming-green rounded-lg opacity-0 animate-pulse"></div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute top-4 right-4">
              <Trophy className="w-8 h-8 text-yellow-500 animate-bounce delay-100" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Medal className="w-6 h-6 text-blue-500 animate-bounce delay-300" />
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Star className="w-5 h-5 text-purple-500 animate-pulse delay-500" />
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Award className="w-5 h-5 text-orange-500 animate-pulse delay-700" />
            </div>

            <div className="relative bg-background/90 backdrop-blur-sm rounded-lg p-8">
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
                      <ExternalLink className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary via-accent to-gaming-green bg-clip-text text-transparent">
                    Access Tournament Data
                  </span>
                </CardTitle>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Explore our comprehensive tournament archives featuring official rankings, match results, 
                  performance statistics, and championship history across all competitive events.
                </p>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Feature Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-sm">Official Rankings</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-gaming-green rounded-full flex items-center justify-center mx-auto mb-3">
                      <Medal className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-sm">Tournament Results</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-gaming-green/10 to-gaming-green/5 border border-gaming-green/20 hover:border-gaming-green/40 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-gaming-green to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-sm">Performance Stats</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-semibold text-sm">Match History</div>
                  </div>
                </div>

                {/* Main Access Button */}
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="relative overflow-hidden group btn-gaming text-xl px-16 py-8 bg-gradient-to-r from-primary via-accent to-gaming-green hover:from-primary/90 hover:via-accent/90 hover:to-gaming-green/90 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl" 
                    asChild
                  >
                    <a 
                      href="https://drive.google.com/drive/folders/1vNTzdYgfi8rpC4aCYgT6zuaYSAs39Zyz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Users className="w-6 h-6 mr-3 animate-pulse" />
                      <span className="relative z-10">Access Tournament Archives</span>
                      <Zap className="w-5 h-5 ml-3 animate-pulse delay-300" />
                    </a>
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="text-center text-sm text-muted-foreground">
                  <p>📊 Real-time data • 🏆 Championship records • 📈 Performance analytics • 🎯 Match insights</p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>


    </section>
  );
};

export default PointsTableSection;
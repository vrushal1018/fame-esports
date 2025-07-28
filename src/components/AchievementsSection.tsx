import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to championship podiums - every victory tells our story of determination and growth.
          </p>
        </div>

        {/* Achievements Button */}
        <div className="text-center">
          <Button size="lg" className="btn-gaming text-xl px-12 py-6" asChild>
            <a href="https://drive.google.com/drive/folders/1vNTzdYgfi8rpC4aCYgT6zuaYSAs39Zyz" target="_blank" rel="noopener noreferrer">
              <Trophy className="w-6 h-6 mr-3" />
              Achievements
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
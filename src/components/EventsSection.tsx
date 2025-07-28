import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ExternalLink, Trophy, Star, Zap } from "lucide-react";
import achievement1 from "@/assets/achievement1.jpg";

const EventsSection = () => {
  const upcomingEvents = [
    {
      name: "Championship Finals 2024",
      date: "December 15-17, 2024",
      time: "10:00 AM EST",
      format: "LAN",
      location: "Los Angeles, CA",
      participants: "16 Teams",
      prize: "$50,000",
      poster: achievement1,
      status: "Confirmed",
      description: "The biggest tournament of the year featuring top teams from around the world.",
      category: "Major Tournament",
      icon: Trophy,
    },
    {
      name: "Winter Showdown",
      date: "January 8-10, 2025",
      time: "2:00 PM EST",
      format: "Online",
      location: "Remote",
      participants: "32 Teams",
      prize: "$15,000",
      poster: achievement1,
      status: "Registered",
      description: "Online tournament to kick off the new competitive season.",
      category: "Seasonal Event",
      icon: Star,
    },
    {
      name: "Regional Qualifiers",
      date: "February 20-22, 2025",
      time: "12:00 PM EST",
      format: "LAN",
      location: "Chicago, IL",
      participants: "24 Teams",
      prize: "$8,000",
      poster: achievement1,
      status: "Pending",
      description: "Qualification tournament for the spring championship series.",
      category: "Qualifier",
      icon: Zap,
    },
  ];

  const orgHostedEvents = [
    {
      name: "Fame Rising Stars Cup",
      date: "November 30, 2024",
      time: "6:00 PM EST",
      description: "Our signature tournament for upcoming talent in the gaming community.",
      registrationLink: "#",
      poster: achievement1,
      prize: "$2,000",
      spots: "64 Teams",
      category: "Community Event",
      icon: Star,
    },
    {
      name: "Community Gaming Night",
      date: "December 7, 2024",
      time: "8:00 PM EST",
      description: "Weekly community event with fun matches and prize giveaways.",
      registrationLink: "#",
      poster: achievement1,
      prize: "Giveaways",
      spots: "Open",
      category: "Weekly Event",
      icon: Users,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "bg-gaming-green text-background";
      case "Registered": return "bg-primary text-primary-foreground";
      case "Pending": return "bg-gaming-yellow text-background";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const EventCard = ({ event, isHosted = false, index = 0 }) => (
    <Card className="gaming-card group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={event.poster}
            alt={event.name}
            className="w-full h-56 object-cover image-hover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={getStatusColor(event.status)}>
              {event.status}
            </Badge>
          </div>
          
          {/* Format Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-primary/30">
              {event.format}
            </Badge>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
              <event.icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary">{event.category}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-[var(--transition-smooth)]">
            {event.name}
          </h4>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            {event.description}
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">{event.date}</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gaming-purple/10 rounded-lg flex items-center justify-center mr-3">
                <Clock className="w-4 h-4 text-gaming-purple" />
              </div>
              <span className="text-sm font-medium">{event.time}</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gaming-yellow/10 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-4 h-4 text-gaming-yellow" />
              </div>
              <span className="text-sm font-medium">{event.location}</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gaming-green/10 rounded-lg flex items-center justify-center mr-3">
                <Users className="w-4 h-4 text-gaming-green" />
              </div>
              <span className="text-sm font-medium">{event.participants}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-center">
              <span className="text-lg font-bold text-gaming-green">{event.prize}</span>
              <p className="text-xs text-muted-foreground">Prize Pool</p>
            </div>
            <Button size="sm" className="btn-gaming group">
              <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const HostedEventCard = ({ event, index = 0 }) => (
    <Card className="gaming-card group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 relative">
            <img
              src={event.poster}
              alt={event.name}
              className="w-full h-48 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            
            {/* Hosted Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-primary to-gaming-purple text-primary-foreground">
                HOSTED
              </Badge>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-6">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-xl font-bold group-hover:text-primary transition-[var(--transition-smooth)]">
                {event.name}
              </h4>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {event.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{event.date}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gaming-purple/10 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-4 h-4 text-gaming-purple" />
                </div>
                <span className="text-sm font-medium">{event.time}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gaming-yellow/10 rounded-lg flex items-center justify-center mr-3">
                    <Trophy className="w-4 h-4 text-gaming-yellow" />
                  </div>
                  <span><strong>Prize:</strong> {event.prize}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gaming-green/10 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-gaming-green" />
                  </div>
                  <span><strong>Spots:</strong> {event.spots}</span>
                </div>
              </div>
            </div>

            <Button className="w-full btn-gaming group">
              <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Register Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="events" className="section-spacing bg-secondary/10">
      <div className="container-max container-spacing">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">UPCOMING EVENTS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="gradient-text">Tournaments & Events</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Stay updated with our upcoming tournaments and community events. 
            From major championships to community nights, there's always something exciting happening.
          </p>
        </div>

        {/* Upcoming Tournaments */}
        {/* <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-3xl font-bold text-center">
              <span className="gradient-text-primary">Upcoming Tournaments</span>
            </h3>
            <div className="ml-4 w-16 h-1 bg-gradient-to-r from-primary to-gaming-purple rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div> */}

        {/* Org-Hosted Events */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-3xl font-bold text-center">
              <span className="gradient-text-primary">Fame Esports Hosted Events</span>
            </h3>
            <div className="ml-4 w-16 h-1 bg-gradient-to-r from-accent to-gaming-yellow rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {orgHostedEvents.map((event, index) => (
              <HostedEventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="gaming-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text-primary">Get Involved</h3>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Want to participate in our events or host your own tournament? 
              We're always looking for partners and participants to join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gaming">
                <Trophy className="w-5 h-5 mr-2" />
                Register for Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
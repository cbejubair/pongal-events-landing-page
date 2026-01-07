import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Palette, Music, Award, Instagram, Linkedin } from "lucide-react";

const clubInfo = {
  name: "Fine Arts Club",
  institution: "PPG Institute of Technology",
  description:
    "The Fine Arts Club of PPG Institute of Technology is dedicated to promoting and celebrating Tamil culture, art, and heritage. Our club organizes various cultural events throughout the year, fostering creativity and talent among students.",
  mission:
    "To preserve and promote Tamil traditions while providing a platform for students to showcase their artistic talents and cultural knowledge.",
  activities: [
    {
      icon: Palette,
      title: "Cultural Events",
      description: "Organizing traditional festivals and celebrations",
    },
    {
      icon: Music,
      title: "Performing Arts",
      description: "Dance, music, and theatrical performances",
    },
    {
      icon: Users,
      title: "Workshops",
      description: "Skill development in traditional arts",
    },
    {
      icon: Award,
      title: "Competitions",
      description: "Inter-college and intra-college contests",
    },
  ],
  committee: [
    { role: "Faculty Coordinator", name: "Dr. Tamil Selvan" },
    { role: "Club President", name: "Arun Kumar" },
    { role: "Vice President", name: "Priya Lakshmi" },
    { role: "Secretary", name: "Karthik Raja" },
    { role: "Treasurer", name: "Deepa Sundari" },
  ],
};

const staffCoordinators = [
  { name: "Dr. NithyaPrakash", role: "Staff Coordinator [Fine Arts Club]" },
];

const studentCoordinator = {
  name: "Mohammed Jubair A",
  role: "Student Coordinator [Fine Arts Club]",
};

const Organizers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 kolam-pattern opacity-30" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-maroon px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg animate-bounce-in border-2 border-gold">
              <Users className="h-5 w-5 text-gold" />
              Event Organizers
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4 text-shadow-glow animate-slide-in-up">
              {clubInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gold font-bold mb-3 animate-slide-in-up" style={{ animationDelay: '100ms' }}>
              {clubInfo.institution}
            </p>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              {clubInfo.description}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-b from-background to-cream/50">
          <div className="container mx-auto px-4">
            <Card className="border-3 border-maroon/30 bg-card shadow-2xl hover:shadow-glow transition-all duration-500 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 md:p-12 text-center relative z-10">
                <div className="inline-block p-3 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl mb-6 shadow-lg">
                  <Award className="h-8 w-8 text-gold" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gradient-pongal mb-6">
                  Our Mission
                </h2>
                <p className="text-foreground/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                  {clubInfo.mission}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gradient-pongal mb-4">
                What We Do
              </h2>
              <p className="text-foreground/70 text-base max-w-2xl mx-auto">Fostering creativity and celebrating Tamil culture through diverse activities</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clubInfo.activities.map((activity, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <activity.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Staff Coordinators */}
        <section className="py-16 bg-gradient-to-t from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-8">
              Staff Coordinators
            </h2>
            <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
              {staffCoordinators.map((member, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Coordinator */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-8">
              Student Coordinator
            </h2>
            <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {studentCoordinator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {studentCoordinator.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">{studentCoordinator.role}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Event Coordinators */}
        <section className="py-16 bg-gradient-to-t from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-8">
              Event Coordinators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {[
                "Dinesh",
                "Nandhan",
                "Nithya shree PG",
                "Pradeepa",
                "Praveen",
                "Rashika",
                "Rishikanth",
                "Sandhya S",
                "Sanjay S",
                "Sanjay SK",
                "Srisaran",
                "Tharshini Sri",
                "Thiruarasi",
                "Nitheesh",
                "Vivek S",
              ].map((name, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-primary-foreground text-center px-1">
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">
                      {name}
                    </h3>
                    <p className="text-xs text-primary font-medium mt-1">Event Coordinator</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Organizers;

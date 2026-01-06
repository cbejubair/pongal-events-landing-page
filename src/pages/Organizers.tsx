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
  { name: "Dr. Tamil Selvan", role: "Faculty Coordinator" },
  { name: "Arun Kumar", role: "Staff Coordinator" },
];

const Organizers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Event Organizers
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {clubInfo.name}
            </h1>
            <p className="text-xl text-primary font-semibold mb-2">
              {clubInfo.institution}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {clubInfo.description}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="border-primary/20 bg-background/80 backdrop-blur">
              <CardContent className="p-8 text-center">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  {clubInfo.mission}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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

        {/* Designed & Developed */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Designed and developed by
            </h3>
            <div className="max-w-md mx-auto my-6">
              <img
                src="/img/jb.jpg"
                alt="Designed and developed by"
                className="w-full rounded-md shadow-md"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-foreground font-medium">Hey Let's Connect</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Organizers;

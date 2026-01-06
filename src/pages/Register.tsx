import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RegistrationForm } from "@/components/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 kolam-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
              Event Registration
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Sign up for one or more events and showcase your talent!
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 bg-background flex-1">
        <div className="container mx-auto px-4">
          <RegistrationForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import CustomCursor from "@/components/animations/CustomCursor";
import NoiseTexture from "@/components/animations/NoiseTexture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Advanced Enhancements */}
      <ScrollProgress />
      <CustomCursor />
      <NoiseTexture opacity={0.03} />

      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
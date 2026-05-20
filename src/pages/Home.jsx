import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';
import { Experience } from '../components/Experience/Experience';
import { Certifications } from '../components/Certifications/Certifications';
import { Contact } from '../components/Contact/Contact';
import { MainLayout } from '../layouts/MainLayout';

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </MainLayout>
  );
};

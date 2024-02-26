'use client';
import Footer from './_components/footer';
import Hero from './_components/hero';
import Projects from './_components/projects';
export default function Home() {
  
  return (
    <main className='w-full h-full flex flex-col items-center justify-center'>
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}

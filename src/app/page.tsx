"use client";
import { FrequentlyAskedQuestions } from "./sections/FrequentlyAskedQuestions";
import Gallery from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import LogoBar from "./sections/LogoBar";
import { Subscribe } from "./sections/Subscribe";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-[url(/background.png)] bg-repeat md:bg-fixed">
      <Hero />
      <LogoBar />
      <Gallery />
      <Testimonials/>
      <FrequentlyAskedQuestions/>
      <Subscribe/>
    </main>
  );
}

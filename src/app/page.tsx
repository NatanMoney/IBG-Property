import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mirror from "@/components/Mirror";
import Diagnosis from "@/components/Diagnosis";
import HowItWorks from "@/components/HowItWorks";
import Quiz from "@/components/Quiz";
import Calculator from "@/components/Calculator";
import ZeroLosses from "@/components/ZeroLosses";
import Cases from "@/components/Cases";
import StateTimeline from "@/components/StateTimeline";
import Entry from "@/components/Entry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Mirror />
        <Diagnosis />
        <HowItWorks />
        <Quiz />
        <Calculator />
        <ZeroLosses />
        <Cases />
        <StateTimeline />
        <Entry />
      </main>
      <Footer />
    </>
  );
}

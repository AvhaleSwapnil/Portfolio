import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

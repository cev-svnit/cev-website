import FormerCev from "./FormerCev";
import sFlipCard from "./FlipCard";
import MentorCev from "./MentorCev";
import { Header } from "@/components/ui/container-scroll-animation";
import Footer from "@/components/Footer";

export default function Alumni() {
    return (
        <>
        <Header />
        <FormerCev />
        <MentorCev />
        <Footer />
        </>
    );
}
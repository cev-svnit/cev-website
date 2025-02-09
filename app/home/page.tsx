import Navbar from "@/components/Navbar";
import FormerCev from "../AlumniSection/FormerCev";  
import MentorCev from "../AlumniSection/MentorCev";
//import Alumni from "@/app/AlumniSection/Alumni";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FormerCev />
      <MentorCev />
      <Footer />

    </>
  );
}

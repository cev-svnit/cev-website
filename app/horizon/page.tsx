import Footer from "@/components/Footer";
import Horizon from "@/components/Horizon";
import Navbar from "@/components/Navbar";

import EventsPage from "@/components/eventspage"

export default function Home() {
  return (
    <>
      <Navbar />

      <EventsPage />


      <Horizon />
      <Footer />
    </>
  )
}
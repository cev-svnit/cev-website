import React from "react";
import FlipCard from "../alumni/FlipCard";
import styles from './Flipcard.module.css';
import ScrollButton from "./ScrollButton";

const FormerCev: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <ScrollButton targetSectionId="CEV-Core-section" buttonLabel="FormerCev" />
      <section id="CEV-Core">
        <div className={styles.custombg}>
          <p className="text-6xl text-center font-extrabold font-vindey text-black mb-2 tracking-wider py-7">CEV Core 2024-25</p>
          <div className="max-w-7xl mx-auto px-4 py-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/om_ramanuj.png" 
                  linkedInUrl="https://www.linkedin.com/in/ramanuj-om/" 
                  gmailUrl="mailto:om.ramanuj@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Om Ramanuj</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">President</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/tanmay_bhaviskar.png" 
                  linkedInUrl="https://www.linkedin.com/in/tanmay-baviskar-84828b256/" 
                  gmailUrl="mailto:tanmay.bhaviskar@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <p className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Tanmay Bhaviskar</p>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Director</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/ved_pakhale.png" 
                  linkedInUrl="https://www.linkedin.com/"  //left
                  gmailUrl="mailto:ved.pakhale@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Ved Pakhale</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Vice President</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/tanmay_chaturvedi.png" 
                  linkedInUrl="https://www.linkedin.com/in/tanmay-chaturvedi-66873125a/" 
                  gmailUrl="mailto:darshit.desai@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Tanmay Chaturvedi</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Vice President</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/shlok_agrwal.png" 
                  linkedInUrl="https://www.linkedin.com/in/shlok-agrawal-403174250/" 
                  gmailUrl="mailto:darshit.desai@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Shlok Agrawal</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Event Head</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="images/Cevimages/nakul_chaturvedi.png" 
                  linkedInUrl="https://www.linkedin.com" 
                  gmailUrl="mailto:darshit.desai@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Nakul Chaturvedi</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Event Head</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="images/Cevimages/bhagirath_suthar.png" 
                  linkedInUrl="https://www.linkedin.com/in/bhagirath-suthar/" 
                  gmailUrl="mailto:darshit.desai@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Bhagirath Suthar</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Finance & Documentation Head</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="images/Cevimages/kashyap_baraiya.png" 
                  linkedInUrl="https://www.linkedin.com/in/kashyap-baraiya-870928282/" 
                  gmailUrl="mailto:darshit.desai@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Kashyap Baraiya</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Finance & Documentation Head</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/darshit_desai.png" 
                  linkedInUrl="https://www.linkedin.com/in/darshit-desai-70a345256/" 
                  gmailUrl="mailto:darshit.desai@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Darshit Desai</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Technical Head</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/saumyashree_parida.png" 
                  linkedInUrl="https://www.linkedin.com" //left
                  gmailUrl="mailto:saumyashree.parida@example.com"  
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Soumyashree Parida</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Editor Head</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/jeet__ariwala.png" 
                  linkedInUrl="https://www.linkedin.com/in/jeet-ariwala-152243256/" 
                  gmailUrl="mailto:jeet.ariwala@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Jeet Ariwala</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Editor Head</p>
                </div>
              </div>
              {/* Add more FlipCard components as needed */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default FormerCev;
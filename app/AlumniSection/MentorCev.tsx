import React from "react";
import FlipCard from "./FlipCard";
import styles from './Flipcard.module.css';
import ScrollButton from "./ScrollButton";

const MentorCev: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <ScrollButton targetSectionId="CEV-Mentor-section" buttonLabel="Cev Mentor" />
      <section id="CEV-Mentor-section">
        <div className={styles.custombg}>
          <p className="text-6xl text-center font-extrabold font-vindey text-black mb-2 tracking-wider py-7">CEV Mentor 2024-25</p>
          <div className="max-w-7xl mx-auto px-4 py-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/kashish_sharma.png" 
                  linkedInUrl="https://www.linkedin.com/in/kashish-sharma-545774215/" 
                  gmailUrl="mailto:kashish.sharma@example.com" 
                />
                <div className="name text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Kashish Sharma</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Finance</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/kushagra_mishra.png" 
                  linkedInUrl="https://www.linkedin.com" //left
                  gmailUrl="mailto:kushagra.mishra@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Kushagra Mishra</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Finance</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/kartik_srivastava.png" 
                  linkedInUrl="https://www.linkedin.com/in/kartik-srivastava-b46b561b7/" 
                  gmailUrl="mailto:kartik.srivastava@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Kartik Srivastava</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Finance</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/dhruv_chheda.png" 
                  linkedInUrl="https://www.linkedin.com/in/dhruv-chheda-36674b24b/" 
                  gmailUrl="mailto:dhruv.chheda@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Dhruv Cheda</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Finance</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/neem_sheth.png" 
                  linkedInUrl="https://www.linkedin.com/in/neem-sheth/" 
                  gmailUrl="mailto:neem.sheth@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Neem Sheth</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Technical</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/aayudh_panchal.png" 
                  linkedInUrl="https://www.linkedin.com/in/aayudh-panchal/" 
                  gmailUrl="mailto:aayudh.panchal@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Aayudh Panchal</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Technical</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/bhavik_dodda.png" 
                  linkedInUrl="https://www.linkedin.com/in/bhavik-dodda/" 
                  gmailUrl="mailto:bhavik.dodda@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Bhavik Dodda</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Technical</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/om_kulthe.png" 
                  linkedInUrl="https://www.linkedin.com/in/omkulthe/" 
                  gmailUrl="mailto:om.kulthe@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Om Kulthe</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Technical</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/om_panchal.png" 
                  linkedInUrl="https://www.linkedin.com/in/om-panchal-136410257/" 
                  gmailUrl="mailto:om.panchal@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Om Panchal</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Design</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <FlipCard 
                  imageUrl="/images/Cevimages/krish_parmar.png" 
                  linkedInUrl="https://www.linkedin.com/in/krish-parmar-a30211258/" 
                  gmailUrl="mailto:krish.parmar@example.com" 
                />
                <div className="name font-vindy text-center mt-4">
                  <h2 className="text-4xl text-center font-vindey text-black mb-2 tracking-wider">Krish Parmar</h2>
                  <p className="text-center font-vindey text-black mb-2 tracking-wider text-xl">Design</p>
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

export default MentorCev;
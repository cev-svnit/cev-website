import React from 'react';
import styles from './Flipcard.module.css'; // Import the CSS module

interface FlipCardProps {
  imageUrl: string;
  linkedInUrl: string;
  gmailUrl: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ imageUrl, linkedInUrl, gmailUrl }) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div className={styles.image}>
            <img src={imageUrl} alt="Profile" className={styles.image} />
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <div className="rounded-full rounded-lg p-6 flex flex-col items-center justify-center">
            <a href={linkedInUrl} className="px-6 py-2 duration-300 font-semibold text-sm">
              <div className="linkedIn">
                <img src="/images/linkedin.png" alt="LinkedIn" className={styles.icon} />
              </div>
            </a>
            <a href={gmailUrl} className="px-6 py-2 duration-300 font-semibold text-sm">
              <div className="gmail">
                <img src="/images/gmail.png" alt="gmail" className={styles.icon} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
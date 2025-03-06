// pages/failure.tsx
import { NextPage } from 'next';
import styles from './FailurePage.module.css'; // Import the CSS module

const FailurePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h1 className={styles.title}>Order Failed</h1>
        <p className={styles.description}>
          We're sorry, but your order could not be processed.
        </p>
        <div className={styles.buttonContainer}>
          <a href="/" className={styles.button}>
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default FailurePage;
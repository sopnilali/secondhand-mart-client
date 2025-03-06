// pages/success.tsx
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '@/components/modules/success/PaymentSuccess.module.css'; // Import the CSS module

const SuccessPage: NextPage = () => {
  const router = useRouter();
  const { transactionId, status } = router.query; // Access query parameters if needed

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
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h1 className={styles.title}>Payment Successfully!</h1>
        <p className={styles.description}>
        
          Thank you for your purchase. Your order has been placed and is being processed.
        </p>
        <p><span className={styles.title}>Order ID</span>: {transactionId}</p>
        <p><span className={styles.title}>Status</span>: {status}</p>
        <div className="mt-6">
          <a href="/" className={styles.button}>
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
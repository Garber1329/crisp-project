import { Component } from 'react';
import styles from './loginPage.module.css';
import clsx from 'clsx';
import Container from '../Container';
import { IoMdCheckmark } from 'react-icons/io';

class Benefits extends Component {
  render() {
    return (
      <section className={clsx(styles.benefits)}>
        <Container className={styles.benefitsContent}>
          <div className={clsx(styles.benefitCard)}>
            <IoMdCheckmark size={30} />
            <h2 className={styles.benefitCardTitle}>Duties and Taxes Guaranteed</h2>
          </div>
          <div className={clsx(styles.benefitCard)}>
            <IoMdCheckmark size={30} />
            <h2 className={styles.benefitCardTitle}>Free Express Shipping</h2>
          </div>
          <div className={clsx(styles.benefitCard)}>
            <IoMdCheckmark size={30} />
            <h2 className={styles.benefitCardTitle}>Customer Love</h2>
          </div>
          <div className={clsx(styles.benefitCard)}>
            <IoMdCheckmark size={30} />
            <h2 className={styles.benefitCardTitle}>Easy Returns</h2>
          </div>
          <div className={clsx(styles.benefitCard)}>
            <IoMdCheckmark size={30} />
            <h2 className={styles.benefitCardTitle}>Secure Payment</h2>
          </div>
        </Container>
      </section>
    );
  }
}

export default Benefits;

import React from 'react';
import Header from '../../Components/Header/Header';
import styles from './QuemSomos.module.css';

const QuemSomos: React.FC = () => (
  <>
    <Header />
    {/* deixar texto e botao no centro */}
    <section className="container">
      <div>
        <p className={`${styles.txt} titleColor`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </p>
      </div>
      <div className={styles.margin}>
        <div className={styles.img} />
      </div>
    </section>
  </>
);

export default QuemSomos;

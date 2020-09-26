import React from 'react';
import Header from '../../Components/Header/Header';
import styles from './Landing.module.css';

const Landing: React.FC = () => (
  <>
    <Header />
    {/* deixar texto e botao no centro */}
    <section className="container">
      <div>
        <p className={`${styles.txt} titleColor`}> Soluções inteligentes para modernizar sua empresa </p>
      </div>
      <div className={styles.margin}>
        <a href="/login" className="button buttonA">Solicite um orçamento</a>
        <div className={styles.img} />
      </div>
    </section>
  </>
);

export default Landing;

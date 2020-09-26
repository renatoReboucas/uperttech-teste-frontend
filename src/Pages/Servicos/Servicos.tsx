import React from 'react';
import Header from '../../Components/Header/Header';
import styles from './Servicos.module.css';

const Servicos: React.FC = () => (
  <>
    <Header />
    {/* deixar texto e botao no centro */}
    <section className="container">
      <div>
        <p className={`${styles.txt} titleColor`}>
          It is a long established fact that a reader will be distracted by
          the readable.
        </p>
      </div>
      <div className={styles.margin}>
        <div className={styles.img} />
      </div>
    </section>
  </>
);

export default Servicos;

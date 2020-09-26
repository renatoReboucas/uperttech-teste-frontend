import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import styles from './ProductItem.module.css';

export interface CardItens {
  id: number,
  nome: string,
  preco: any,
  descricao: string,
}

interface CardItensProps {
  cardItens: CardItens;
}

const ProductItem: React.FC<CardItensProps> = ({ cardItens }) => (
  <div>
    {/* <h1>item</h1> */}
    <div className={styles.card}>
      <FaReact size="5rem" color="3F8BFA" title="react" className={styles.icon} />
      <p className={styles.name}>{cardItens.nome}</p>
      <p className={styles.descicao}>{cardItens.descricao}</p>
      <p className={styles.preco}>
        R$:
        {cardItens.preco}
      </p>
    </div>
  </div>
);

export default ProductItem;

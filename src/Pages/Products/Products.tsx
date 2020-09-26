import React, { useState } from 'react';
import ProductItem from '../../Components/ProductItem/ProductItem';
import styles from './Products.module.css';

const Products: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      nome: 'Produto',
      descricao: 'Lorem Ipsum is simply',
      preco: 50.0,
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Lorem Ipsum is simply',
      preco: 50.0,
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Lorem Ipsum is simply',
      preco: 50.0,
    },
    {
      id: 4,
      nome: 'Produto 4',
      descricao: 'Lorem Ipsum is simply',
      preco: 50.0,
    },
    {
      id: 5,
      nome: 'Produto 5',
      descricao: 'Lorem Ipsum is simply',
      preco: 50.0,
    },
    {
      id: 6,
      nome: 'Produto 6',
      descricao: 'Lorem Ipsum is simply',
      preco: 50.0,
    },
  ]);
  return (
    <>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Produtos</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          {products.map((item) => (
            <ProductItem key={item.id} cardItens={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

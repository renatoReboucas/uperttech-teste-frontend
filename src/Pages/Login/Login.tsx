import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import LoginForm from '../../Components/LoginForm/LoginForm';

import styles from './Login.module.css';
import Register from './Register';

const Login: React.FC = () => {
  const [isLoginActive, setLsLoginActive] = useState<boolean>(true);
  const [text, setText] = useState<string>('Criar conta');
  const [link, setLink] = useState<string>('Criar conta');

  function handleForm() {
    if (isLoginActive === true) {
      setLsLoginActive(false);
      setLink('Login');
      setText('Já possui cadastro?');
    } else {
      setLsLoginActive(true);
      setLink('Criar conta');
      setText('Criar conta');
    }
  }

  return (
    <>
      <Header />
      <section className={styles.login}>
        <div className={styles.card}>
          <div>
            <div className={styles.forms}>
              {isLoginActive && <LoginForm />}
              {!isLoginActive && <Register />}
            </div>
          </div>
          <div className={styles.btn}>
            {/* <Link className={styles.link} to={"/cadastrar"}>
            Cadastro
          </Link> */}
            { isLoginActive
              ? (
                <a className={styles.link} onClick={handleForm}>
                  {text}
                </a>
              ) : (
                <p style={{ marginBottom: '10px' }}>
                  {text}
                  <a className={styles.link} onClick={handleForm}>
                    {link}
                  </a>
                </p>
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

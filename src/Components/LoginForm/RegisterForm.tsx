import React, { FormEvent, useContext, useState } from 'react';
import Button from '../Form/Button';
import Input from '../Form/Input';
import UseForm from '../../Hooks/useForm';
// import { UserContext } from "../../UserContext";

import styles from './LoginForm.module.css';

const RegisterForm: React.FC = () => {
  const email = UseForm('email');
  const password = UseForm('password');
  const name = UseForm();
  const [data, setData] = useState<any>(null);
  const [login, setLogin] = useState<any>(null);
  const [load, setLoad] = useState<any>(false);
  const [error, setError] = useState<any>(null);
  const [hasLogin, setHasLogin] = useState<any>(false);
  // const { userLogin } = useContext(UserContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.validate() && password.validate() && name.validate()) {
      window.localStorage.setItem('hasLogin', 'true');
      window.localStorage.setItem('username', email.value);
      window.location.href = '/produtos';
    } else {
      window.localStorage.removeItem('hasLogin');
      window.localStorage.removeItem('username');
    }
  }
  return (
    <section className="animeLeft">
      <h1 className={styles.title}>Cadastro</h1>
      <form onSubmit={handleSubmit} className={styles.fomr}>
        <Input label="Nome" type="text" name="username" {...name} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {load ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      {error && (
      <span className={styles.error}>
        {' '}
        {error}
        {' '}
      </span>
      )}
    </section>
  );
};

export default RegisterForm;

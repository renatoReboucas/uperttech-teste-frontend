import React, { FormEvent, useState } from 'react';
import Button from '../Form/Button';
import Input from '../Form/Input';
import UseForm from '../../Hooks/useForm';
// import { UserContext } from "../../UserContext";

import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  const username = UseForm('email');
  const password = UseForm('password');
  const [data, setData] = useState<any>(null);
  const [login, setLogin] = useState<any>(null);
  const [load, setLoad] = useState<any>(false);
  const [erro, setError] = useState<any>(null);
  const [hasLogin, setHasLogin] = useState<any>(false);
  const [user, setUser] = useState<any>('');
  // const { userLogin } = useContext(UserContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('username: ', username.value);
    setError(null);
    setLoad(true);
    setHasLogin(true);
    if (username.validate() && password.validate()) {
      console.log('entrou ', username.value);
      setUser(username.value);
      window.localStorage.setItem('hasLogin', 'true');
      window.localStorage.setItem('username', username.value);
      setLoad(false);
      console.log(hasLogin, user);
      window.location.href = '/produtos';
    } else {
      window.localStorage.removeItem('hasLogin');
      window.localStorage.removeItem('username');
      setLoad(false);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.fomr}>
        <Input label="Nome" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {load ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      {erro && (
      <span className={styles.error}>
        {' '}
        {erro}
        {' '}
      </span>
      )}
    </section>
  );
};

export default LoginForm;

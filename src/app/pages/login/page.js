import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.eventLinkLogo}>
        <Link href="/">EventLink</Link>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.leftSection}>
          <h1 className={styles.mainHeading}>Entre e descubra novos eventos!</h1>
          <p className={styles.subHeading}>Conecte-se e viva experiências únicas.</p>
          <p className={styles.subHeading}>Junte-se à comunidade de amantes de eventos!</p>
          <p className={styles.subHeading}>Sua próxima aventura está a um login de distância!</p>
          <p className={styles.subHeading}>Aproveite tudo o que temos a oferecer.</p>
          <p className={styles.subHeading}>Seja parte de momentos inesquecíveis.</p>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.returnNav}>
            <Link href="/" className={styles.returnLink}>
              Voltar para Home
            </Link>
          </div>
          <div className={styles.loginForm}>
            <h2 className={styles.welcomeBack}>Bem Vindo de Volta!</h2>
            <h3 className={styles.loginHeading}>Login</h3>
            <form>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="johnsondoe@hotmail.com" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="********" />
              </div>
              <div className={styles.rememberMe}>
                <div>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Manter Conectado</label>
                </div>
                <a href="#" className={styles.forgotPassword}>Esqueceu a senha?</a>
              </div>
              <button type="submit" className={styles.submitButton}>CONTINUE</button>
            </form>
            <div className={styles.socialLogin}>
              <p>Ou</p>
              <button className={styles.googleLogin}>
                <Image src="/google-icon.png" alt="Google" width={20} height={20} />
                Log in com Google
              </button>
              <button className={styles.facebookLogin}>
                <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
                Log in com Facebook
              </button>
              <button className={styles.appleLogin}>
                <Image src="/apple-icon.png" alt="Apple" width={20} height={20} />
                Log in com Apple
              </button>
            </div>
            <p className={styles.signUp}>Novo Usuário? <Link href="/pages/cadastro">Cadastre-se</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

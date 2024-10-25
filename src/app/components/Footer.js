import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>EventLink</span>
          </div>
          <p className={styles.footerText}>
            EventLink é uma plataforma global de venda de ingressos self-service para experiências ao vivo, que permite que qualquer pessoa crie, compartilhe, encontre e participe de eventos que alimentam suas paixões e enriquecem suas vidas.
          </p>
          <div className={styles.socialIcons}>
            <Link href="#"><Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} /></Link>
            <Link href="#"><Image src="/twitter-icon.png" alt="Twitter" width={24} height={24} /></Link>
            <Link href="#"><Image src="/linkedin-icon.png" alt="LinkedIn" width={24} height={24} /></Link>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h3>Sobre Nós</h3>
            <ul>
              <li><Link href="#">Imprensa</Link></li>
              <li><Link href="#">Contate-nos</Link></li>
              <li><Link href="#">Central de Ajuda</Link></li>
            </ul>
          </div>
          <div>
            <h3>Planejar Eventos</h3>
            <ul>
              <li><Link href="#">Criar e configurar</Link></li>
              <li><Link href="#">Venda ingressos</Link></li>
              <li><Link href="#">Confirmação de presença on-line</Link></li>
              <li><Link href="#">Eventos on-line</Link></li>
            </ul>
          </div>
          <div>
            <h3>EventLink</h3>
            <ul>
              <li><Link href="#">Como funciona</Link></li>
              <li><Link href="#">Privacidade</Link></li>
              <li><Link href="#">Termos</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

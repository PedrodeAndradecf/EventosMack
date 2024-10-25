import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './MeusIngressos.module.css';

const MeusIngressosPage = () => {
  const tickets = [
    { id: 1, eventName: 'Tame Impala', date: '5 Dez 2024', time: '21:00', location: 'Autódromo de Interlagos, São Paulo', image: '/TameImpala.png' },
    { id: 2, eventName: 'Don Toliver', date: '15 Jan 2025', time: '22:00', location: 'Audio Club, São Paulo', image: '/DonToliver.png' },
    { id: 3, eventName: 'Dua Lipa', date: '18 Jan 2025', time: '20:30', location: 'Allianz Parque, São Paulo', image: '/DuaLipa.png' },
    { id: 4, eventName: 'Bruno Mars', date: '15 Jul 2025', time: '20:00', location: 'Allianz Parque, São Paulo', image: '/BrunoMars.png' },
    { id: 5, eventName: 'Ana Castela', date: '20 Ago 2025', time: '18:30', location: 'Espaço das Américas, São Paulo', image: '/AnaCastela.png' },
    { id: 6, eventName: 'Anitta', date: '10 Set 2025', time: '19:00', location: 'Maracanã, Rio de Janeiro', image: '/anitta.png' },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          <div className={styles.meusIngressosContainer}>
            <h2 className={styles.title}>Meus Ingressos</h2>
            <div className={styles.ticketList}>
              {tickets.map((ticket) => (
                <div key={ticket.id} className={styles.ticketCard}>
                  <div className={styles.ticketImage} style={{backgroundImage: `url(${ticket.image})`}}></div>
                  <div className={styles.ticketContent}>
                    <h3 className={styles.eventName}>{ticket.eventName}</h3>
                    <p className={styles.ticketInfo}>
                      <span className={styles.infoIcon}>📅</span> {ticket.date}
                    </p>
                    <p className={styles.ticketInfo}>
                      <span className={styles.infoIcon}>🕒</span> {ticket.time}
                    </p>
                    <p className={styles.ticketInfo}>
                      <span className={styles.infoIcon}>📍</span> {ticket.location}
                    </p>
                    <button className={styles.viewButton}>Ver Detalhes</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MeusIngressosPage;

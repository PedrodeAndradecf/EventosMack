'use client';

import React, { useState } from 'react';
import Link from 'next/link'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UpcomingEvents from './components/UpcomingEvents'; 
import styles from '../app/styles/page.module.css'

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
    'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <img src="/Coldplay.png" alt="Coldplay" className={styles.eventImage} />
          </div>
          <div className={styles.description}>
            <h1>Show do ColdPlay</h1>
            <p>
              A banda mais famosa da Inglaterra está agora no Brasil! Não perca a 
              chance de vê-los ao vivo. Experimente a música incrível e a performance 
              eletrizante. Garanta já seus ingressos e junte-se à emoção!
            </p>
            <Link href="/ingresso-coldplay" className={styles.ticketButton}>
              Garanta seu ingresso
            </Link>
          </div>
        </div>
        
        <div className={styles.eventInfo}>
          <div className={styles.eventField}>
            <label htmlFor="eventName">Nome do Evento</label>
            <input type="text" id="eventName" placeholder="Digite aqui" className={styles.eventInput} />
          </div>
          <div className={styles.eventField}>
            <label htmlFor="eventState">Estado</label>
            <select id="eventState" className={styles.eventSelect}>
              <option value="">Selecione o Estado</option>
              {estados.map((estado) => (
                <option key={estado} value={estado}>{estado}</option>
              ))}
            </select>
          </div>
          <div className={styles.eventField}>
            <label htmlFor="eventDate">Data</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Qualquer Data"
              className={styles.eventDate}
              dateFormat="dd/MM/yyyy"
              wrapperClassName={styles.datepickerWrapper}
              calendarClassName={styles.datepicker}
              dayClassName={() => styles.datepickerDay}
              monthClassName={() => styles.datepickerMonth}
              timeClassName={() => styles.datepickerTime}
              weekDayClassName={() => styles.datepickerWeekDay}
              monthYearClassName={() => styles.datepickerMonthYear}
            />
          </div>
        </div>
        
        <div className={styles.eventsToFooterWrapper}>
          <UpcomingEvents />
          <div className={styles.loadMoreContainer}>
            <button className={styles.loadMoreButton}>Carregar Mais</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

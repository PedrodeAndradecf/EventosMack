'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getEventos } from '../../api/eventoApi';
import styles from './styles/UpcomingEvents.module.css';

const UpcomingEvents = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      const data = await getEventos();
      setEventos(data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter === selectedFilter ? null : filter);
  };

  const filterOptions = {
    dias: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    tipo: ['Show', 'Teatro', 'Esporte', 'Conferência', 'Festival'],
    categoria: ['Música', 'Arte', 'Tecnologia', 'Gastronomia', 'Educação']
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Eventos Próximos</h1>
        <div className={styles.filters}>
          {Object.keys(filterOptions).map((filter) => (
            <div key={filter} className={styles.filterWrapper}>
              <div 
                className={`${styles.filter} ${selectedFilter === filter ? styles.activeFilter : ''}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter === 'dias' ? 'Dias da Semana' : 
                 filter === 'tipo' ? 'Tipo do Evento' : 'Qualquer Categoria'}
                <span className={styles.filterArrow}>▼</span>
              </div>
              {selectedFilter === filter && (
                <div className={styles.filterOptions}>
                  {filterOptions[filter].map((option) => (
                    <div key={option} className={styles.filterOption}>{option}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.eventsGrid}>
        {eventos.map(evento => (
          <Link href={`/event/${evento.id}`} key={evento.id} className={styles.eventLink}>
            <div className={styles.eventCard}>
              <div className={styles.imageContainer}>
                <Image 
                  src={evento.imagem || '/default-event-image.png'} 
                  alt={evento.nome} 
                  layout="fill" 
                  objectFit="cover"
                  objectPosition={evento.objectPosition || 'center'}
                  priority
                />
                <div className={styles.dateOverlay}>
                  <span className={styles.month}>{new Date(evento.data).toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                  <span className={styles.day}>{new Date(evento.data).getDate()}</span>
                </div>
              </div>
              <div className={styles.eventDetails}>
                <h2 className={styles.eventName}>{evento.nome}</h2>
                <p className={styles.eventDescription}>{evento.descricao}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

'use client'
import { useState, useEffect } from 'react';
import { getEventos, criarEvento, atualizarEvento, deletarEvento } from '../../../api/eventoApi';
import styles from './admin.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AdminPage = () => {
  const [eventos, setEventos] = useState([]);
  const [eventoAtual, setEventoAtual] = useState({
    id: null,
    nome: '',
    data: '',
    localizacao: '',
    descricao: '',
    imagem: ''
  });
  const [modoEdicao, setModoEdicao] = useState(false);

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    const data = await getEventos();
    setEventos(data);
  };

  const handleInputChange = (e) => {
    setEventoAtual({ ...eventoAtual, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modoEdicao) {
      await atualizarEvento(eventoAtual.id, eventoAtual);
    } else {
      await criarEvento(eventoAtual);
    }
    resetForm();
    fetchEventos();
  };

  const handleDelete = async (id) => {
    await deletarEvento(id);
    fetchEventos();
  };

  const handleEdit = (evento) => {
    setEventoAtual(evento);
    setModoEdicao(true);
  };

  const resetForm = () => {
    setEventoAtual({ id: null, nome: '', data: '', localizacao: '', descricao: '', imagem: '' });
    setModoEdicao(false);
  };

  return (
    <>
      <Navbar />
      <div className={styles.adminContainer}>
        <h1 className={styles.title}>Administração de Eventos</h1>
        <div className={styles.content}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="nome"
              value={eventoAtual.nome}
              onChange={handleInputChange}
              placeholder="Nome do evento"
              required
            />
            <input
              type="date"
              name="data"
              value={eventoAtual.data}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="localizacao"
              value={eventoAtual.localizacao}
              onChange={handleInputChange}
              placeholder="Localização"
              required
            />
            <textarea
              name="descricao"
              value={eventoAtual.descricao}
              onChange={handleInputChange}
              placeholder="Descrição"
              required
            />
            <input
              type="text"
              name="imagem"
              value={eventoAtual.imagem}
              onChange={handleInputChange}
              placeholder="URL da imagem"
              required
            />
            <button type="submit" className={styles.submitButton}>
              {modoEdicao ? 'Atualizar Evento' : 'Criar Evento'}
            </button>
            {modoEdicao && (
              <button type="button" onClick={resetForm} className={styles.cancelButton}>
                Cancelar Edição
              </button>
            )}
          </form>
          <div className={styles.eventosList}>
            {eventos.map(evento => (
              <div key={evento.id} className={styles.eventoItem}>
                <h3>{evento.nome}</h3>
                <p>{evento.data}</p>
                <p>{evento.localizacao}</p>
                <div className={styles.buttonGroup}>
                  <button className={styles.editButton} onClick={() => handleEdit(evento)}>Editar</button>
                  <button className={styles.deleteButton} onClick={() => handleDelete(evento.id)}>Deletar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;

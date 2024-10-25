'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './cadastro.module.css';

const CadastroPage = () => {
  const [tipoPessoa, setTipoPessoa] = useState('fisica');

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
    'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.eventLinkLogo}>
        <Link href="/">EventLink</Link>
      </div>
      <div className={styles.returnNav}>
        <Link href="/" className={styles.returnLink}>
          Voltar para Home
        </Link>
      </div>
      <div className={styles.cadastroContainer}>
        <h1 className={styles.title}>Cadastro</h1>
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tabButton} ${tipoPessoa === 'fisica' ? styles.active : ''}`}
            onClick={() => setTipoPessoa('fisica')}
          >
            Pessoa Física
          </button>
          <button 
            className={`${styles.tabButton} ${tipoPessoa === 'juridica' ? styles.active : ''}`}
            onClick={() => setTipoPessoa('juridica')}
          >
            Pessoa Jurídica
          </button>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Dados de Acesso</h2>
            <div className={styles.inputGroup}>
              <input type="email" id="email" placeholder="E-mail" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" id="confirmEmail" placeholder="Confirme o e-mail" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" id="senha" placeholder="Senha" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" id="confirmSenha" placeholder="Confirme a senha" required />
            </div>
          </div>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>{tipoPessoa === 'fisica' ? 'Dados Pessoais' : 'Dados Corporativos'}</h2>
            {tipoPessoa === 'fisica' ? (
              <>
                <div className={styles.inputGroup}>
                  <input type="text" id="nome" placeholder="Nome" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="sobrenome" placeholder="Sobrenome" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="cpf" placeholder="CPF" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="tel" id="celular" placeholder="Celular" required />
                </div>
              </>
            ) : (
              <>
                <div className={styles.inputGroup}>
                  <input type="text" id="razaoSocial" placeholder="Razão Social" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="cnpj" placeholder="CNPJ" required />
                </div>
                <div className={styles.inputGroup}>
                  <div className={styles.inputWithCheckbox}>
                    <input type="text" id="inscricaoEstadual" placeholder="Inscrição Estadual" required />
                    <div className={styles.checkboxContainer}>
                      <input type="checkbox" id="isento" />
                      <label htmlFor="isento">Isento</label>
                    </div>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <input type="tel" id="telefoneComercial" placeholder="Telefone Comercial" required />
                </div>
              </>
            )}
          </div>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Endereço</h2>
            <div className={styles.inputGroup}>
              <input type="text" id="cep" placeholder="CEP" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" id="endereco" placeholder="Endereço" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" id="cidade" placeholder="Cidade" required />
            </div>
            <div className={styles.inputGroup}>
              <select id="estado" required>
                <option value="">Selecione o Estado</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>{estado}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <button className={styles.cadastrarButton}>Cadastrar</button>
      </div>
    </div>
  );
};

export default CadastroPage;

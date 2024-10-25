import './styles/globals.css';

export const metadata = {
  title: 'EventLink',
  description: 'Plataforma de venda de ingressos para eventos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Roboto', sans-serif" }}>
        <main>{children}</main>
      </body>
    </html>
  );
}

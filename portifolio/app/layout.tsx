import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Portfólio Will',
  description: 'Portfólio pessoal do Will',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

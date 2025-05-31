import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="p-6">
        <section id="sobre" className="mb-10">
          <h1 className="text-3x1 font-bold">Olá! Eu sou [Seu Nome]</h1>
          <p className="mt-2 text-gray-700">Desenvolvedor em formação. Amo criar coisas com código!</p>
        </section>

        <section id="projetos" className="mb-10 bg-gray-100 p-6 rounded">
          <h2 className="text-2x1 font-semibold mb-4">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded">Projeto 1</div>
            <div className="bg-white p-4 shadow rounded">Projeto 2</div>
          </div>
        </section>

        <section id="contato">
          <h2 className="text-2x1 font-semibold mb-2">Contato</h2>
          <p>Você pode me encontrar no email: seuemail@example.com</p>
        </section>
      </main>
    </>
  );
}
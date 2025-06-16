export default function Home() {
  return (
    <>
      <section id="inicial">
        <h1>Olá, eu sou Will</h1>
        <p>Desenvolvedor em formação.</p>
      </section>

      <section id="sobre">
        <h2>Sobre Mim</h2>
        <div className="card">
          <h3>Minha trajetória</h3>
          <p>Sou um desenvolvedor focado em areas backend. Tenho experiência com tecnologias modernas como JavaScript, HTML, CSS e frameworks, estou sempre em busca de aprender mais.</p>
        </div>
      </section>

      <section id="projetos">
        <h2>Projetos</h2>
        <div className="card">
          <h3>ONGManager</h3>
          <p>ONGManager é um projeto de TCC do curso tecnico de Desenvolvimento de Sistemas na ETEC Camargo Aranha.</p>
          <p>ONGManager é uma aplicação que ajuda ONGs a lidar com seus recursos, projetos e volintarios de uma forma mais eficiente e moderna.</p>
        </div>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <div className="card">
          <h3>Fale comigo</h3>
          <p>E-mail: w.willian.1805@gmail.com</p>
          <p>Telefone: +55 11 98860-9387</p>
        </div>
      </section>
    </>
  );
}

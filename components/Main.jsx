import DGRoll from '../imagem/DGRoll.png'

const Main = () => {
  return (
    <div className="main">

      <div className="container">
        <div className="img-content">
          <img className='logo' src={DGRoll} alt="logotipo" />
        </div>
        <main className="main-content">
          <h1>Bem-vindo ao DGRoll!</h1>
          <p>Explore mundos mágicos, lute contra criaturas lendárias, e torne-se o herói de sua própria jornada épica!</p>
          <p>DGRoll é um gerenciador de fichas!</p>
          <p>Você mestre terá em um só lugar as fichas de seus jogadores e NPCs disponíveis a qualquer momento.</p>
          <p>E vocês jogadores não precisarão se preocupar em guardá-las em seus computadores!</p>
        </main>
      </div>
    </div>
  );
};

export default Main;
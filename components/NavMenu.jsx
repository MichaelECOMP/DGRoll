import ImgLogin from '../imagem/Login.png'
import ImgHome from '../imagem/home.png'
import ImgCadastro from '../imagem/Cadastro.png'

const NavMenu = () => {
  return (
    <div className='menu'>
      <div id="navMenu" className="diamond">
        <div id="mainRotCorrect" className="rotCorrect"><i className="fa fa-cubes fa-4x" aria-hidden="true"></i></div>
        <div className="icon2">
          <img src={ImgLogin} alt="icone de login" />
        </div>
      </div>

      <div id="nav1" className="nav nav1 diamond">
        <div className="rotCorrect"><i className="fa fa-home fa-2x" aria-hidden="true"></i></div>
        <div className="icon">
          <img src={ImgHome} alt="icone de home" />
        </div>
      </div>
      {/* <div className="popUp">Home</div> */}
      <div id="nav2" className="nav nav2 diamond">
        <div className="rotCorrect"><i className="fa fa-file-text-o fa-2x" aria-hidden="true"></i></div>
        <div className="icon">
          <img src={ImgCadastro} alt="icone de cadastra" />
        </div>
      </div>
    </div>
  )
}

export default NavMenu;
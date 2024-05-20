import './estilo.css';
import Logo from '../../componentes/Logo/index'
import OpcoesHeader from '../../componentes/OpcoesHeader/index';
import IconesHeader from '../../componentes/IconesHeader';

function Header (){
    return(
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header
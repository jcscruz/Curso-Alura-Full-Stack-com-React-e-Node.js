import Logo from '../../componentes/Logo/index'
import OpcoesHeader from '../../componentes/OpcoesHeader/index';
import IconesHeader from '../../componentes/IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header (){
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header
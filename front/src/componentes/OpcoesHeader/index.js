import styled from 'styled-components';
import { Link } from 'react-router-dom';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcao = styled.ul`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 75%;
    padding: 0 5px;
    cursor: pointer;
`

const Opcoes = styled.li`
    display: flex;
`

function OpcoesHeader(){
    return(
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader
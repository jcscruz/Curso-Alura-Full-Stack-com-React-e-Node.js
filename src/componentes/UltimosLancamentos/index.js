import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;    
`

const Img = styled.img`
    max-width: 10%;
    height: auto;
    padding: 10px;
`

function UltimosLancamentos(){
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px" alinhamento="center">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <Img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse"
                subtitulo="Angular 11"
                descricao="Construindo um site SPA"
                img='https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg'
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
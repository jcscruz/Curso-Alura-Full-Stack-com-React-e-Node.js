import { useEffect, useState } from 'react'
import Input from '../../componentes/Input/'
import styled from 'styled-components'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'


const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.section`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.section`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa(){
    const [ livrosPesquisados, setLivrosPesquisados ] =  useState([])  
    const [ livros, setLivros ] = useState([])  

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros(){
        const livrosDaApi = await getLivros()
        setLivros(livrosDaApi)
    }

    async function insertFavorito(id){
        await postFavorito(id)
        alert(`Favorito com ${id} inserido com sucesso!`)
    }


    
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estange.</SubTitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                    console.log(livrosPesquisados)
                }}
            />
            {livrosPesquisados.map(
                livro => (
                    <Resultado onClick={() => insertFavorito(livro.id)}>                        
                        <p>{livro.nome}</p>
                        <img src={livro.src}></img>                        
                    </Resultado>
                )
            )}
        </PesquisaContainer>
    )
}

export default Pesquisa
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%,#326589 165%);
`

const Resultado = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  cursor: pointer;   
  color: white;
 
  img{
    max-width: 10%;
    height: auto;
    padding: 10px;
  }

`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos(){
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi)
  }

  async function deletarFavorito(id){
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Favorido de id: ${id} deletado com sucesso!`)
  }

  return (
    <AppContainer>
      {favoritos.map(
          livro => (
              <Resultado onClick={() => deletarFavorito(livro.id)}>                        
                  <p>{livro.nome}</p>
                  <img src={livro.src}></img>                        
              </Resultado>
          )
      )}
    </AppContainer>
  );
}

export default Favoritos;

import styles from './inicio.module.css'

import { useEffect, useState } from 'react';

import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Fernandoo29/cinetag-api/videos')
      .then(resp => resp.json())
      .then(dados => setVideos(dados))
  }, [])
  
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {
          videos.map(video => {
            return <Card {...video} key={video.id} />
          })
        }
      </section>
    </>
  );
}

export default Inicio;

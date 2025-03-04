import styles from './Player.module.css'

import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState(null);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Fernandoo29/cinetag-api/videos?id=${parametros.id}`)
            .then(resp => resp.json())
            .then(dados => setVideo(...dados))
    }, [])

    if (!video && video !== null) return <NaoEncontrada />

    return (
        <>
            {
                video !== null ?
                    <>
                        <Banner imagem="player" />
                        <Titulo>
                            <h1>Player</h1>
                        </Titulo>
                        <section className={styles.container}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={video.link}
                                title={video.titulo}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        </section>
                    </>
                :
                    "loading"
            }
        </>
    );
}

export default Player;
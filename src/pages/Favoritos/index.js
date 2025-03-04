import styles from './Favoritos.module.css'

import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos({ }) {
    const { favoritos } = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    favoritos.map(fav => {
                        return <Card {...fav} key={fav.id} />
                    })
                }
            </section>
        </>
    );
}

export default Favoritos;
import './projeto.css'

function Listaprojetos(){
    return(
        <div className="Projetos-repro">
            <h2 className="titulo-repro"> Projeto Reprograma </h2>
            <ul className="lista-reprograma">
                <li className="itens-projetos">
                    <p className="Projeto-name">M-de-Maravilhosa</p>
                    <a href="https://m-maravilhosa-constanzapascolato.netlify.app/">Ver mais</a>
                </li>
                <li className="itens-projetos">
                    <p className="Projeto-name">Meu-Diário</p>
                    <a href="https://meu-diario-reprograma-babi.netlify.app/">Ver mais</a>
                </li>
            </ul>
        </div>


    )
}

export default Listaprojetos
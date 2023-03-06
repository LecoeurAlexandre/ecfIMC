import { useSelector } from "react-redux"
import OnlyOneIMC from "../components/OnlyOneIMC"

const DisplayIMC = () => {
    const bodyDatas = useSelector(state =>state.form.bodyDatas)
    
    return (
        <>
            <h3>Votre historique d'IMC</h3>
            <hr />
            {bodyDatas.length === 0 ? 
            <p>Vous n'avez pas encore renseigné de données.</p> :
            <>{bodyDatas.map(i =><OnlyOneIMC key={i.id} imcId={i.id}/>)}</>}
        </>
    )
}

export default DisplayIMC
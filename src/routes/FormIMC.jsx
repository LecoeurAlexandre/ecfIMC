import { useRef } from "react"

const FormIMC = () => {

    const heightRef = useRef();
    const weightRef = useRef();

    const submitFormHandler = async (e) => {
        e.preventdefault();
        const height = heightRef.current.value;
        const weight = weightRef.current.value;
    }
    
    return (
        <>
            <h3 className="mb-3">Calcul de votre IMC</h3>
            <p>Nous avons seulement besoin de connaître votre taille et votre poids.</p>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="height">Veuillez renseigner votre taille (en cm) :</label>
                    <input type="number" className="form-control" id="height" placeholder="174"/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="weight">Veuillez renseigner votre poids (en kg) :</label>
                    <input type="number" className="form-control" id="weight" placeholder="60"/>
                </div>
                <div className="d-flex mb-3">
                    <button className="btn btn-primary ms-auto">Envoyer mes données</button>
                </div>
            </form>
            <p>(Vos informations personnelles ne seront pas commercialisées aux laboratoires pharmaceutiques).</p>
        </>
    )
}

export default FormIMC
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import {addBodyDatas} from "./FormSlice";
import { useNavigate } from "react-router-dom";

const FormIMC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const heightRef = useRef();
    const weightRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();

        const height = +heightRef.current.value;
        const weight = +weightRef.current.value;

        heightRef.current.value ="";
        weightRef.current.value ="";

        const bodyDataValues = {
            height,
            weight
        };
        console.log(bodyDataValues)

        dispatch(addBodyDatas(bodyDataValues));

        navigate(`/displayimc`)

    }

    const data = useSelector(state => state.form.bodyDatas)
    console.log(data)
    
    return (
        <>
            <h3 className="mb-3">Calcul de votre IMC</h3>
            <p>Nous avons seulement besoin de connaître votre taille et votre poids.</p>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="height">Veuillez renseigner votre taille (en cm) :</label>
                    <input type="number" min={0} max={300} className="form-control" id="height" ref={heightRef} placeholder="174"/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="weight">Veuillez renseigner votre poids (en kg) :</label>
                    <input type="number" min={0} max={300} className="form-control" id="weight" ref={weightRef} placeholder="60"/>
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
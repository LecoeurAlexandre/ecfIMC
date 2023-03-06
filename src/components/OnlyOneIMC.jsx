import { useSelector } from "react-redux"

const OnlyOneIMC = (props) => {
    const bodyData = useSelector(state => state.form.bodyDatas).find(i => i.id === props.imcId)
    console.table(bodyData)

    const calcImc = (height, weight) => {
        const imc = (weight/(Math.pow((height/100), 2))).toFixed(1)

        return imc
    }

    return (
        <div className="border border-info p-3 m-3 rounded">
            <div className="d-flex align-items-center">
                <h3>{bodyData.date}</h3>
                <span class="badge badge-secondary">Secondary</span>
            </div>
            <hr />
            <ul>
                <li><b>Taille: </b>{bodyData.height}</li>
                <li><b>Poids: </b>{bodyData.weight}</li>
                <li><b>IMC: {calcImc(bodyData.height, bodyData.weight)}</b></li>
            </ul>
        </div>
    )
}

export default OnlyOneIMC
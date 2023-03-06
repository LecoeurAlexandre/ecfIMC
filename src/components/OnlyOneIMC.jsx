import { useSelector } from "react-redux"

const OnlyOneIMC = (props) => {
    const bodyData = useSelector(state => state.form.bodyDatas).find(i => i.id === props.imcId)
    console.table(bodyData)

    const imc = (bodyData.weight/(Math.pow((bodyData.height/100), 2))).toFixed(1)
    
    let color = "";
    let msg = "";
        switch (true) {
            case imc <= 16.5:
                color = "primary";
                msg = "dénutrition";
                break;
            case imc <= 18.5:
                color = "light";
                msg = "maigreur";
                break;
            case imc <= 25:
                color = "success";
                msg = "poids normal";
                break;
            case imc <= 30:
                color = "warning";
                msg = "surpoids";
                break;
            case imc <= 35:
                color = "secondary";
                msg = "obésité modérée";
                break;
            case imc > 40:
                color = "dark";
                msg="obésité sévère"
                break;
            default : color = "primary";

        }

    return (
        <div className="border border-info p-3 m-3 rounded">
            <div className="d-flex align-items-center">
                <h3>{bodyData.date}</h3>
                <span className="badge badge-{{color}} ms-auto">{msg}</span>
            </div>
            <hr />
            <ul>
                <li><b>Taille: </b>{bodyData.height}</li>
                <li><b>Poids: </b>{bodyData.weight}</li>
                <li><b>IMC: {imc}</b></li>
            </ul>
        </div>
    )
}

export default OnlyOneIMC
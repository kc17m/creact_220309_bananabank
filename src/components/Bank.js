import { hasSelectionSupport } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

const Bank = () => {


    const [total, setTotal] = useState(100)
    const [newCalc, setNewCalc] = useState("")



    let add = () => {
        setTotal(prevValue => {
            console.log("Test add " + newCalc)
            return (prevValue + newCalc);
        })
        setNewCalc("")
    }

    let deduct = () => {
        setTotal(prevValue => {
            console.log("Test deduct " + prevValue)
            return (prevValue - newCalc)
        })
        setNewCalc("")
    }

    return (
        <div className="konto"><h1>Dein Girokonto</h1>
            <div className="saldo">{total} EUR</div>
            <div><input className="geldbetrag" value={newCalc} onInput={e => setNewCalc(+(e.target.value))} type="text" placeholder="Geldbetrag eingeben" /></div>
            <button onClick={add} className="einzahlen">Einzahlen</button>
            <button onClick={deduct} className="auszahlen">Auszahlen</button>

        </div>
    )
}



export default Bank
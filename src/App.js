import React,{useState} from "react"
import "./App.css"

const App = ()=>{
    /* eslint no-eval: 0 */

    const[expression,setExpression]= useState("");
    const[answer,setAnswer] = useState(0);

    const display = (symbol)=>{
        setExpression(prev =>prev + symbol)

        if(expression[expression.length-1]=== "="){
            if(/[0-9.]/.test(symbol)){
                setExpression(symbol)
            }else{
                setExpression(answer+symbol)
            }
        }
    }

    const calculate =()=>{

        setAnswer(eval(expression))
        setExpression((prev)=>prev + "=")
    }

    const allClear =()=>{
        setExpression("")
        setAnswer(0)
    }

    const clear = ()=>{
        setExpression(prev =>prev.split("").slice(0,prev.length-1).join(""))
        setAnswer(0)
    }

    return(
        <div className="container">
            <div className="grid">
                <div onClick={display} className="dis">
                    <input type="text" value ={expression} placeholder="0" disabled id="display"/>
                    <div className="total"> {answer} </div>
                </div>

                <div onClick={allClear} className="paddButton AC bg-danger">AC</div>
                <div onClick={clear} className="paddButton C bg-danger" id="clear">C</div>
                <div onClick={ ()=> display("/")} className="paddButton div" id="divide">/</div>
                <div onClick={ ()=> display("*")} className="paddButton times" id="multiply">x</div>
                <div onClick={()=>display("7")} className="paddButton seven dark-gray" id="seven">7</div>
                <div onClick={ ()=> display("8")} className="paddButton eight dark-gray" id="eight">8</div>
                <div onClick={ ()=> display("9")} className="paddButton nine dark-gray" id="nine">9</div>
                <div onClick={ ()=> display("-")} className="paddButton minus" id="subtract">-</div>
                <div onClick={ ()=> display("4")} className="paddButton four dark-gray" id="four">4</div>
                <div onClick={ ()=> display("5")} className="paddButton five dark-gray" id="five">5</div>
                <div onClick={ ()=> display("6")} className="paddButton six dark-gray" id="six">6</div>
                <div onClick={ ()=> display("+")} className="paddButton plus" id="add">+</div>
                <div onClick={ ()=> display("1")} className="paddButton one dark-gray" id="one">1</div>
                <div onClick={ ()=> display("2")} className="paddButton two dark-gray" id="two">2</div>
                <div onClick={ ()=> display("3")} className="paddButton three dark-gray" id="three">3</div>
                <div onClick={calculate} className="paddButton equal bg-primary"id="equals">=</div>
                <div onClick={ ()=> display("0")} className="paddButton zero dark-gray" id="zero">0</div>
                <div onClick={ ()=> display(".")} className="paddButton dot dark-gray" id="decimal">.</div>

            </div>
        </div>


        )
}


export default App;
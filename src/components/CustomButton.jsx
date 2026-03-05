import {useSession} from "../hooks/context/SessionContext.jsx";

function CustomButton({type,fun,text}){
    return (
        <button style={{backgroundColor:type==='positive'?'green':'red'}}  onClick={()=> fun()} >
            {text}
{}        </button>
    )
}

export default CustomButton;
import React,{useState} from "react";
import Sidebar from "./sidebar";
import Home from "./home";
import Edit from "./edit";
import Profile from "./profile";
import "../styles.css"
function App(){
    const[state,setState]=useState("Home");
    const[values,setValues]=useState({});
    function addValue(newValue){
        setValues(newValue);
    }
    function showItem(name){
        setState(name);
    }
    return <div>
        <h2 className="mainhead">ASTRA</h2>
        <div className="main">
            <Sidebar show={showItem}/>
            {state==="Home" && <Home name={values.name} />}
            {state==="Edit" && <Edit show={showItem} pass={addValue} />}
            {state==="Profile" && <Profile 
                show={showItem}
                name={values.name}
                city={values.city}
                email={values.email}
                tel={values.tel}
                github={values.github}
                linkedin={values.linkedin}
                experience={values.experience}
                available={values.available}
            />}
        </div>
    </div>
}
export default App;
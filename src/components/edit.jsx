import React,{useState} from "react";
function Edit(props){
    const[values,setValue]=useState({});
    function handleChange(event){
        const{name,value}=event.target;
        setValue(prevValue => {
            return{
                ...prevValue,
                [name]:value
            };
        });
    }
    function handleClick(event){
        const name=event.target.name;
        props.pass(values);
        props.show(name);
        console.log(values.experience);
        event.preventDefault();
    }
    return <div className="edit-sec1">
        <div className="edit-sec2">
            <div>
                <h2>Enter the following details :</h2>
                <br />
            </div>
            <form>
                <div>
                    <h3>Name:</h3>
                    <input type="text" placeholder="Vivek Bhatt" onChange={handleChange} name="name" autoComplete="off" ></input>
                </div>
                <div>
                    <h3>City:</h3>
                    <input type="text" placeholder="Haldwani" onChange={handleChange} name="city" autoComplete="off" ></input>
                </div>
                <div>
                    <h3>Email:</h3>
                    <input type="email" placeholder="vivekbhatt@gmail.com" onChange={handleChange} name="email" autoComplete="off" ></input>
                </div>
                <div>
                    <h3>Phone:</h3>
                    <input type="tel" placeholder="+919538491293" onChange={handleChange} name="tel" autoComplete="off" ></input>
                </div>
                <div>
                    <h3>Github:</h3>
                    <input type="link" placeholder="bhattvivek" onChange={handleChange} name="github" autoComplete="off" ></input>
                </div>
                <div>
                    <h3>Linkedin:</h3>
                    <input type="link" placeholder="vivekbhatt" onChange={handleChange} name="linkedin" autoComplete="off" ></input>
                </div>
                <div>
                    <h3>Overall experience:</h3>
                    <input type="text" placeholder="2 years" onChange={handleChange} name="experience" autoComplete="off" ></input>
                </div>
                <div>
                    <h3>Availability:</h3>
                    <input type="text" placeholder="Full Time/Part Time" onChange={handleChange} name="available" autoComplete="off" ></input>
                </div>
                <br /><br />
                <button className="btn1" type="submit" name="Profile" onClick={handleClick}>Submit</button>
            </form>
        </div>
    </div>
}
export default Edit;
import React from "react";
function Sidebar(props){
    function handleSubmit(event){
        const name=event.target.name;
        props.show(name);
    }
    return <div className="sidebar">
        <ul>
            <li><a>Available for Job</a></li>
            <li><a name="Home" onClick={handleSubmit}>Home</a></li>
            <li><a name="Profile" onClick={handleSubmit}>Profile</a></li>
            <li><a>Apply for Jobs</a></li>
            <li><a>Mail Box</a></li>
        </ul>
    </div>
}
export default Sidebar;
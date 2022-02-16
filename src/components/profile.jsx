import React from "react";
function Profile(props){
    function handleClick(event){
        const name=event.target.name;
        props.show(name);
    }
    return(<div className="profile-sec1">
            <div className="profile-sec2">
                {props.name===undefined &&<div>
                    <h3>Upload your resume</h3>
                    <button className="btn" name="Edit" onClick={handleClick}>Upload</button>
                </div>}
                <div>
                    <p className="profile-name">{props.name}</p>
                    <p className="profile-city">{props.city}</p>
                    {props.email!==undefined && <div className="profile-email"><i class="fa-solid fa-envelope"></i><p className="pro-p email">{props.email}</p></div>}
                    {props.tel!==undefined && <div className="profile-tel"><i class="fa-solid fa-phone"></i><p className="pro-p tel">{props.tel}</p></div>}
                    {props.github!==undefined && <div className="profile-github"><i class="fa-brands fa-github-square"></i><p className="pro-p github">{props.github}</p></div>}
                    {props.linkedin!==undefined && <div className="profile-linkedin"><i class="fa-brands fa-linkedin"></i><p className="pro-p linkedin">{props.linkedin}</p></div>}
                    {props.experience!==undefined && <div><hr></hr><p className="profile-experience" >Overall Experience</p><p className="prop-p experience">{props.experience}</p></div>}
                    {props.available!==undefined && <div><hr></hr><p className="profile-available" >Availability</p><p className="prop-p available">{props.available}</p></div>}
                </div>
            </div>
        </div>
    );
}
export default Profile;
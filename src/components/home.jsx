import React from "react";
function Home(props){
    return <div className="home">
        <div className="home2">
            <h1 className="home heading">Welcome {props.name}</h1>
            <h3>How to get jobs with top U.S. companies</h3>
            <div className="lists">
                <p className="list 1">1<br />Take Tests</p>
                <p className="list 2">2<br />Pass Live Coding Challenge</p>
                <p className="list 3">3<br />Finalize your resume</p>
                <p className="list 4">4<br />Receive job offers</p>
            </div>
            <div className="home3">
                <img className="myimg" src="https://blog.grabcad.com/wp-content/uploads/2021/04/Man-On-Laptop-300x219.png" alt="person"></img>
                <div className="home4">
                <h3>Why join</h3>
                    <ol>
                        <li>Work full time at top Silicon Valley or other U.S. companies.</li>
                        <br></br>
                        <li>Earn a better salary compared to local companies in your city.</li>
                        <br></br>
                        <li>Grow as a developer by working with the smartest engineers from all over the world.</li>
                        <br></br>
                        <li>Get paid monthly directly to your bank account. Forget about issues with PayPal or Payoneer.</li>
                        <br></br>
                    </ol>
                </div>
            </div>
        </div>
    </div>
}
export default Home;
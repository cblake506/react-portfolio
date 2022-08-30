import React from 'react';


function About () {
    return (
        <>
            <div class="container-fluid bg-1 text-center" id="about">
                <h3 class="margin">About</h3>
                <img src={require("../assets/icon-picture.png")} class="img-responsive img-circle margin" alt="profile icon" width="250" height="250"></img>
                <h3>I'm an aspiring full stack developer</h3>
            </div>

            <div class="container-fluid bg-2 text-center" id="who">
                <h3 class="margin">Who Am I?</h3>
                <p>I'm currently enroled in the full stack developer coding bootcamp at UT Austin</p>
                <img src={require("../assets/longhorns_logo.jpg")} class="img-responsive margin"  alt="longhorn" width="200"></img>
            </div>
        </>
    );
}
export default About;
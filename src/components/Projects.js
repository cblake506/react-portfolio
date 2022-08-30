import React from 'react';

function Projects () {
    return (
        <div class="container-fluid bg-3 text-center" id="what">    
            <h3 class="margin">My Work</h3>
            <br/>
            <div class="row">
                <div class="col-sm-6">
                    <a href="https://github.com/cblake506/javascript-password-generator" target="_blank" rel="noopener noreferrer">
                    <img src={require("../assets/password-generator.jpeg")} class="img-responsive margin" width="100%" alt="project"/>
                    </a>
                </div>
                <div class="col-sm-6"> 
                    <a href="https://github.com/cblake506/SipOrSupper" target="_blank" rel="noopener noreferrer">
                    <img src={require("../assets/sip-or-supper.jpeg")} class="img-responsive margin" width="100%" alt="project"/>
                    </a>
                </div>
                <div class="col-sm-6"> 
                    <a href="https://github.com/cblake506/terminal-one" target="_blank" rel="noopener noreferrer">
                    <img src={require("../assets/terminal-one.jpeg")} class="img-responsive margin" width="100%" alt="project"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Projects;
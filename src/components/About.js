import React from "react";

function About({about , image ="https://via.placeholder.com/215"}){

    return(
        <aside>
            <img src={image} placeholder=" default value" alt="blog logo" />
            <p> {about} </p>  
        </aside>
    );
}


export default About;
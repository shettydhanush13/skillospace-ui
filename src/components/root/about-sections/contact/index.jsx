import React from "react";
import "./styles.css";

const Contact = () => {
    return (
        <section className="bg-color-secondary font-color-primary section-component">
            <h1 className="introRole">Let's Talk?</h1>
            <h3 className="introDesc3 font-thin">Have a project you need help with, need inspiration, or just wanna talk? I’m always open.</h3>
            <div className="flex flex-row flex-align-center">
                <button className="primaryButton font-bold" onClick={() => window.open("https://www.linkedin.com/in/dhanush-s-shetty-731004145/", "_blank")}>Start a conversation</button>
            </div>
        </section>
    )
}

export default Contact
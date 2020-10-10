const Intro = () => {

    return(
        <div>
            <p className="intro">Hello</p> 
            <p className="intro">Iam</p>
            <p className="intro">Yashbir</p>
            <div className="intro_footer">
                <span className="intro_coder">&lt;Coder /&gt;.</span>
                <span className="intro_funny">Funny.</span>
                <span className="intro_sarcastic">Sarcastic</span>
            </div>
            <style jsx>{`
            
                .intro{
                   font-size: 65px;
                   color: #FFFFFF;
                   margin-bottom: -30px;
                }

                .intro_footer{
                    margin-top: 70px;
                }

                .intro_coder{
                    font-size: 50px;
                    color: #FFFFFF;
                    font-family: "Fira Code"
                }

                .intro_funny{
                    font-size: 50px;
                    color: #1A58CC;
                    font-family: "Comic Sans MS"
                }

                .intro_sarcastic{
                    font-size: 50px;
                    color: #FFFFFF;
                    font-family: "Fira Code"
                }

            `}
            </style>
        </div>
    )

}

export default Intro

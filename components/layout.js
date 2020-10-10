import Content from "./content"
import Navbar from "./navbar"

const Layout = (...props) => {
    return(
        <div className="Layout">
            <Navbar />
            <Content pageType={props.pageType}/> <style jsx global>{`

                @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
                 @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
            html,
            body,
            #__next{
                height: 100%;
                width: 100%;
                background-color: #000000;
            }
            body{
                font-family: "Montserrat";
            }
            .Layout{
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
            `}                
            </style>
        </div>
    )
}

export default Layout

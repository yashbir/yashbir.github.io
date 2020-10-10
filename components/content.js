import Intro from "./intro";

const renderContent = (props) => {
    switch(props.pageType){
        case "intro":
            return <Intro />;
        default:
            return <Intro />;
    }
}

const Content = ({...props}) => {

    return(
        <div className="content_layout">
            {renderContent(props)}
            <style jsx>{`

                .content_layout{
                    float: right;
                    padding-left: 8%;
                    padding-top: 4%;
                    background: #101010;
                    width: 77%;
                    height:100%;
                    margin-left: 28%;
                    border-color: #707070;
                }

                .content_coder{
                    margin-top: 70px;
                    font-size: 50px;
                    color: #FFFFFF;
                }
                
            `}
            </style>
        </div>
    )

}

export default Content

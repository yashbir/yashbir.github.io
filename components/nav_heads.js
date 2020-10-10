import Link from "next/link"

const Navheads = ({children, ...props}) => {
    return(
        <div className="nav_heads_layout">
        <Link href={props.href}><a className="nav_heads">{children}</a>
        </Link>
        <style jsx>{`
           .nav_heads_layout{
                margin-bottom: 60px;
           }
            a.nav_heads{
                font-size: 45px;
                color: #FFFFFF;
                text-decoration: None;
            }
            
            `}
            </style>    
        </div>
    )
}

export default Navheads

import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div id="navBar">
            <ul className="flex">
                <li className="w-1/3 pt-10 pb-10">
                    <Link to={"/"}>HOME</Link>
                </li>
                <li className="w-1/3 pt-10 pb-10">
                    <Link to={"/ricette"}>CREA RICETTA</Link>
                </li>
                <li className="w-1/3 pt-10 pb-10">
                    <Link to={"/contatti"}>CONTATTI</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    return(<div className="home-page">
        <div className="home-btn" onClick={() => navigate("login")}>Login</div>
    </div>)
}

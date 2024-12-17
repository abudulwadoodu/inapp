import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    const gotToAboutPage = () => {
        navigate('/about')
    }
    
    return (
        <div>
            <h1>Home Component</h1>
            <button onClick={gotToAboutPage}>Go to About page</button>
        </div>
    );
}
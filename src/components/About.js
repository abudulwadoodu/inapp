import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function About() {
    const {userId} = useParams();
    const {searchQuery} = useSearchParams();

    useEffect(() => {
        const level = searchQuery.get("level");
        console.log(level);
    }, [])
    
    return (
        <div>
            <h1>About Component for user {userId}</h1>
            
        </div>
    );
}
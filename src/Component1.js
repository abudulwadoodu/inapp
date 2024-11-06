import "./Component1.css";

export default function Component1() {
    
    let title = "Hello";

    function getTitle() {
        return <div>{title}</div>
    }

    return <h1 className="component1">{getTitle()}</h1>;
}
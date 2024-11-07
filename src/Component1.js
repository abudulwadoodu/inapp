import "./Component1.css";

export default function Component1() {
    
    let title = "Hello";
    let sampleData = [
        {
            "id": 1,
            "name": "Name 1"
        },
        {
            "id": 2,
            "name": "Name 2"
        },
        {
            "id": 3,
            "name": "Name 3"
        },
        {
            "id": 4,
            "name": "Name 4"
        },
        {
            "id": 5,
            "name": "Name 5"
        }
    ];

    function getTitle() {
        return <div>{title}</div>
    }

    function getData() {
        return sampleData.map((data) => {
            return <div key={data.id}>
                <span>{data.id}</span>,&nbsp;
                <span>{data.name}</span>
            </div>
        });
    }

    return (
        <>
            <h1 className="component1">{getTitle()}</h1>
            <div>{getData()}</div>
        </>
    );
}
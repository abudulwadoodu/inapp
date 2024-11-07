import "./Component1.css";

export default function Component1() {
    
    let title = "Todo List";
    let TodoList = [
        {
            "id": 1,
            "name": "Task 1"
        },
        {
            "id": 2,
            "name": "Task 2"
        },
        {
            "id": 3,
            "name": "Task 3"
        },
        {
            "id": 4,
            "name": "Task 4"
        },
        {
            "id": 5,
            "name": "Task 5"
        }
    ];

    function getTitle() {
        return <div>{title}</div>
    }

    function getData() {
        return TodoList.map((data) => {
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
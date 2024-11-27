import { useEffect, useState } from "react";

export default function FormComponent() {
    const [name, setName] = useState("My Name");
    const [age, setAge] = useState(40);
    const [date, setDate] = useState(new Date().toString())

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(name, age);
    }

    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toString());
        }, 1000);
    })

    const onNameChange = (e) => {
        const {value} = e.target;
        setName(value)
    }

    const onAgeChange = (e) => {
        const {value} = e.target;
        setAge(value)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={name} onChange={onNameChange} />
                <input type="text" value={age} onChange={onAgeChange} />
                <button type="submit">Submit</button>
            </form>
            {date}
        </div>
    );
}
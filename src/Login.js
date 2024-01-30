// Login.js
import React, { useEffect, useState } from "react";

export default function Login() {
    const [name, setName] = useState('ilhem');
    const [age, setAge] = useState(20);

    useEffect(() => {
        console.log("name changed ", name);
    }, [name]);

    const change = () => {
        setName("bilel");
    };

    const changeAge = () => {
        setAge(35);
    };

    return (
        <div>
            <form>
             <small>hello you there</small>
                    Name: {name} <br />
                    Age: {age} <br />

                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <button type="button" onClick={change}>Change Name</button>
                <button type="button" onClick={changeAge}>Change Age</button>
            </form>
        </div>
    );
}

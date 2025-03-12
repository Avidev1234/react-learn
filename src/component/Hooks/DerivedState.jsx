import { useState } from "react";

const users = [
    { name: "Aman", age: 45 },
    { name: "Bob", age: 99 },
    { name: "John", age: 17 },
    { name: "Charlie", age: 12 },
    { name: "Aman", age: 20 },
    { name: "Angles", age: 35 }
];

export const DerivedState = () => {

    const [user,setUser]=useState(users);


    return (
        <div>
            <h3>User List</h3>
            <ul>

                {users.map((user,id) => {
                    return (
                        <li key={id}>
                            {user.name} -  {user.age}
                        </li>
                    )

                })

                }
            </ul>

        </div>
    )
}
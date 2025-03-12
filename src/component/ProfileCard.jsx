import React from "react";

export default function ProfileCard(data) {
    const { name, age, greeting, children }=data;
  return (
    <div className="main">
    <div className="card">
      <h1 className="name">{name}</h1>
      <p className="age">Age: {age}</p>
      <div className="greeting">
        {greeting}
      </div>
      <div>
        {children}
      </div>
    </div>
    </div>
  );
}

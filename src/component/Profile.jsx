import React from "react";
import ProfileCard from "./ProfileCard";
import "../../public/style/style.css"
export default function Profile() {
  return (
    <div>
      <h1>Profile card Challange</h1>
      <ProfileCard
        name="Alice"
        age={30}
        // passing jsx as a props
        greeting={
          <div>
            <strong>Hi Alice, Welcome to challange!</strong>
          </div>
        }
      >
        <p>Hobbies:Reading,Hikking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="BOB"
        age={20}
        // passing jsx as a props
        greeting={
          <div>
            <strong>Hi BOB, Welcome to challange!</strong>
          </div>
        }
      >
        <p>Hobbies:Gaming,Running</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

import React from "react";

export default function Charakter({ characters }) {
  // console.log(CharakterParams.name);
  return (
    <div className="card">
      <h3>{characters.name}</h3>
      <img src={characters.img} alt={characters.name}></img>
      <p>
        <b>Nick Name: {characters.nickname}</b>
      </p>
      <p>
        <b>Birthday: {characters.birthday}</b>
      </p>
    </div>
  );
}

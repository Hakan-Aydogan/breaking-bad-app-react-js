import React from "react";

export default function Episode({ episode }) {
  return (
    <div className="card">
      <h3>{episode.title}</h3>
      <h4>{"Season " + episode.season + " / Episode " + episode.episode}</h4>
      <p>
        <b>Air Date: {episode.air_date}</b>
      </p>
      <p>
        <b>Series: {episode.series}</b>
      </p>
      <ul>
        <p>
          <b>Characters</b>
          {episode.characters.map((char) => (
            <li key={char}>{char}</li>
          ))}
        </p>
      </ul>
    </div>
  );
}

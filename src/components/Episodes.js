import React, { useState } from "react";
import { useQuery } from "react-query";
import Episode from "./Episode";

const getEpisodes = async (key, serie) => {
  const response = await fetch(
    `https://breakingbadapi.com/api/episodes?series=${key.queryKey[1]}`
  );
  return response.json();
};

export default function Episodes() {
  const [serie, setSerie] = useState("Breaking+Bad");
  const { data, status } = useQuery(["episodes", serie], getEpisodes);
  console.log(data);

  return (
    <div>
      <h2>Episodes</h2>
      {status === "loading" && (
        <div>
          <h3>Loading</h3>
        </div>
      )}
      {status === "error" && (
        <div>
          <h3>Error</h3>
        </div>
      )}
      {status === "success" && (
        <>
          <button onClick={() => setSerie("Breaking+Bad")}>Breaking Bad</button>
          <button onClick={() => setSerie("Better+Call+Saul")}>
            Better Call Saul
          </button>
          <div className="grid">
            {data.map((episode) => (
              <Episode episode={episode} key={episode.episode_id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

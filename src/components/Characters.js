import React, { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import Charakter from "./Charakter";

const getCharacters = async (pageParam) => {
  console.log(pageParam);
  const response = await fetch(
    `https://breakingbadapi.com/api/characters?limit=9&offset=${pageParam}`
  );
  const datas = await response.json();

  return datas;
};
export default function Characters() {
  const [page, setPage] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const { data, status } = useQuery(
    ["characters", page],
    ({ pageParam = page }) => getCharacters(pageParam)
  );
  //console.log(data ? "data var" : "data yok");

  return (
    <div>
      <h2>Characters</h2>
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
          <button
            onClick={() => {
              setPage(page - 9);
            }}
          >
            Back
          </button>
          <button
            disabled={data.length === 0 ? true : false && setPage(page - 9)}
            onClick={() => {
              setPage(page + 9);
            }}
          >
            Next
          </button>
          <div className="grid">
            {data.map((characters) => (
              <Charakter characters={characters} key={characters.char_id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

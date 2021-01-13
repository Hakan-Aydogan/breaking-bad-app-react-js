import React from "react";

export default function Navbar({ changePage }) {
  return (
    <nav>
      <button onClick={() => changePage("characters")}>Characters</button>
      <button onClick={() => changePage("episodes")}>Episodes</button>
    </nav>
  );
}

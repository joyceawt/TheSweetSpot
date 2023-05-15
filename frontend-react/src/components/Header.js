import React from "react";

function Header({ title }) {
  return (
    <header className="p-5">
      <h1 className="display-2">
        <strong>{title}</strong>
      </h1>
    </header>
  );
}

export default Header;

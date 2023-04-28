import React, { useState, ChangeEvent, FormEvent } from "react";

interface Props {
  onSubmit: (query: string) => void;
}

function SearchBar({ onSubmit }: Props) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleInputChange} />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
import "./styles.css";

export const Input = ({ searchValue, handleChange }) => {
  return (
    <label htmlFor="search" className="search-label">
      <input
        className="search-input"
        id="search"
        value={searchValue}
        type="search"
        onChange={handleChange}
        placeholder="Pesquisar"
      />
    </label>
  );
};

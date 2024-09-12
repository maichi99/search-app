import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchInput.scss";

interface SearchInputProps {
  onSearch: (query: string) => void; // Prop to handle search input changes
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Call the onSearch function with the input value
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      className="search-input-container"
    >
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Quick search"
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange} // Handle input changes
      />
    </Paper>
  );
};

export default SearchInput;

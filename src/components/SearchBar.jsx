import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Check if string is empty or contains whitespaces
    const isEmptyOrSpaces = (str) => {
      return /^\s*$/.test(str);
    };

    if (!isEmptyOrSpaces(searchTerm)) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleOnSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      {/* Search Bar  */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        title="Search"
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

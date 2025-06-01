import React, { useState } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        mb: 3,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for internships..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

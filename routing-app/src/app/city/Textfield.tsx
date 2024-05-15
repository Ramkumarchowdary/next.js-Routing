// components/SearchBar.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Sheet } from "@mui/joy";

const SearchBar = () => {
  const [cityName, setCityName] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (cityName.trim() !== "") {
      router.push(`/city/${encodeURIComponent(cityName.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter Place name"
      />
      <Button sx={{ mt: 2 }} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;

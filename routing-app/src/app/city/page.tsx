"use client";
import { Container, Paper, Typography } from "@mui/material";
import SearchBar from "./Textfield";

const Page = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          borderRadius: 2,
        }}
      >
        <Typography color="primary" variant="h4" component="div">
          Enter the Place
        </Typography>
        <SearchBar />
      </Paper>
    </Container>
  );
};

export default Page;

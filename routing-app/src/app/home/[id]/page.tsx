"use client";
import { Sheet, Typography } from "@mui/joy";
// import Btn from "../../../button";
import Btn from "../button";

const HomeDynamic = ({ params }) => {
  const handleClick = () => {
    alert(params.id);
  };

  return (
    <>
    <Sheet   sx={{
        maxWidth: 300,
        mx: "auto",
        my: "auto",
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "sm",
        boxShadow: "md",
        alignSelf: "center",
      }} > 
      <Typography   color="warning"
  level="body-sm"
  noWrap={false}
  variant="soft">
        This a Button component which on click will run a function that is
        passed as a prop. 
      </Typography>
      <Btn onClick={handleClick}>Show Popup</Btn>
      </Sheet>
    </>
  );
};

export default HomeDynamic;

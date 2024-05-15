import { Button } from "@mui/joy";

const Btn = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Btn;

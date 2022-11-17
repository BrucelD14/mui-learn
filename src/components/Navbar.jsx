import { AppBar, InputBase, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Cloud } from "@mui/icons-material";
import { Box } from "@mui/system";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Brucel D.
        </Typography>
        <Cloud sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
        <InputBase placeholder="search..." />
        </Search>
        <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

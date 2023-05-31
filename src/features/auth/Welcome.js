import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";


const drawerWidth = 240;


const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const Welcome = () => {
  

  const { isManager, isAdmin } = useAuth();

  const date = new Date();

  const today = new Intl.DateTimeFormat("en-PS", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  return (
        <>
        {today}
        </>
      
      
  );
};

export default Welcome;

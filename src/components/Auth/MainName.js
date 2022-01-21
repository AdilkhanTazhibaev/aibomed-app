import Typography from "@mui/material/Typography";
import React from "react";

export const MainName = (props) => {
    return <Typography {...props}>{props.children}</Typography>
}
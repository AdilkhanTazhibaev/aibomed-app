import {forwardRef} from "react";
import {TextField} from "@mui/material";


export const Input = forwardRef((props, ref) => {
    return <TextField {...props} inputRef={ref}/>
})
import React from 'react';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ruLocale from "date-fns/locale/ru";
import Stack from "@mui/material/Stack";
import {LocalizationProvider} from "@mui/lab";

function DateFieldHoc({children}) {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                <Stack spacing={3} >
                    {children}
                </Stack>
            </LocalizationProvider>
        </>
    );
}

export default DateFieldHoc;
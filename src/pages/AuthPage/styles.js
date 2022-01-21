import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(theme=>({
    layout:{
      background: "#f1f1f1"
    },
    authForm:{
        width: "400px",
        textAlign: "center",
    },
    boxForm:{
        padding: "42px 30px 20px 30px"
    },
    typographySpan:{
        fontSize: "15px"
    },
    formGroup:{
        marginTop: "35px",
        gap: 20
    },
    btn:{
        marginTop: "20px !important",
        width: "70%",
        margin: '0 auto !important',
        "&:disabled":{
            background: '#e0e0e0'
        }

    }
}))
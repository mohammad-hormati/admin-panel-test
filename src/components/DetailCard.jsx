import { Paper, Typography } from "@mui/material";
import Title from "./Title";


export function DetailCard({title, amount, number}) {

    return(
        <Paper sx={{mb: {xs : 2 , md : !number? 0 : 2} , p: 2, height: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Title>{title}</Title>
            <Typography align="center" sx={{mt: 1, fontWeight: "bold", fontSize: "2rem"}}>{amount} {number && "T"}</Typography>
        </Paper>
    )
}
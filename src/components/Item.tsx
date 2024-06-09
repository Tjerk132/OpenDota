import { Paper, styled } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    borderRadius: 2,
    // height: "100%",
    padding: theme.spacing(1),
    margin: 2,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));
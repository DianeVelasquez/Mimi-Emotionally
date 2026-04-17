'use client';
import { Box, Typography } from "@mui/material";
import { Link } from "react-router";

const Footer = () => {
    return (
        <Box sx={{ pt: 6,textAlign: "center" }}>
            <Typography>
                © {new Date().getFullYear()} Dayana Velasquez & Avril Rojas. Todos los derechos reservados. Diseñado y desarrollado con la ayuda de Flexy React Dashboard. {" "}
            </Typography>
        </Box>
    );
};

export default Footer;

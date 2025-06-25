import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function NavBar() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#90EE90", // verde claro
        boxShadow: 3,
      }}
    >
      
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold", //Deixa o texto em negrito, aparência de título, em branco, em negrito e tamanho maior que o padrão de h6.
            color: "#fff",
            fontSize: "1.5rem",
          }}
        >
          Relação de Produtos
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            component={RouterLink}
            to="/"
            startIcon={<ListAltIcon />}
            variant={location.pathname === "/" ? "contained" : "outlined"}
            sx={{
              backgroundColor: location.pathname === "/" ? "#006400" : "#006400",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: location.pathname === "/" ? "rgb(6, 129, 16)" : "#154d00", // azul ou verde escuro hover, #154d00 Verde muito escuro (verde-musgo),rgb(6, 129, 16) Azul escuro vibrante
              },
            }}
          >
            Produtos
          </Button>

          <Button
            component={RouterLink}
            to="/novo"
            startIcon={<AddCircleOutlineIcon />}
            variant={location.pathname === "/novo" ? "contained" : "outlined"}
            sx={{
              backgroundColor: location.pathname === "/novo" ? "#006400" : "#006400",
              color: "#fff", // cor branca
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: location.pathname === "/" ? "rgb(6, 129, 16)" : "#154d00",
              },
            }}
          >
            Novo Produto
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
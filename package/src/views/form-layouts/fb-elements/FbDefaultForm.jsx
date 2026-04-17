import React from "react";

import {
 
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
} from "@mui/material";
import BaseCard from "../../../components/BaseCard/BaseCard";

const estados = [
  {
    value: "one",
    label: "No disponible",
  },
  {
    value: "two",
    label: "En lista de espera",
    disabled: "True",
  },
  {
    value: "three",
    label: "Asignado",
    disabled: "True",
  },
  {
    value: "four",
    label: "En sesión",
    disabled: "True",
  },
];

const FbDefaultForm = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState("");

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState("");

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <BaseCard title="My Profile">
        <form>
          <TextField
            id="default-value"
            label="Nombre"
            variant="outlined"
            defaultValue="Dayana Velasquez"
            fullWidth
            sx={{
              mb: 2,
            }}
          />
          <TextField
            id="email-text"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Acerca de mí"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
            }}
          />
          <TextField
            id="readonly-text"
            label="La vida es corta"
            defaultValue="Primera prueba"
            inputprops={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
            }}
          />
          <Grid
            container
            spacing={0}
            sx={{
              mb: 2,
            }}
          >
            <Grid item size={{lg: 4, md: 6, sm: 12}}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange2}
                >
                  <FormControlLabel
                    value="radio1"
                    control={<Radio />}
                    label="María Psicóloga"
                  />
                  <FormControlLabel
                    value="radio2"
                    control={<Radio />}
                    label="Andrés Psicosocial"
                  />
                  <FormControlLabel
                    value="radio3"
                    control={<Radio />}
                    label="Fernanda EAN CONTIGO"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <TextField
            fullWidth
            id="standard-select-number"
            variant="outlined"
            select
            label="Estado"
            value={number}
            onChange={handleChange3}
            sx={{
              mb: 2,
            }}
          >
            {estados.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div>
            <Button color="secondary" variant="contained">
              Actualizar
            </Button>
          </div>
        </form>
      </BaseCard>
    </div>
  );
};

export default FbDefaultForm;

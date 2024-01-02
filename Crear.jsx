//Crear
import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

function Crear() {
  const [usuarios, setUsuarios] = useState([
    {
      ID: 1,
      nombre: 'Erick',
      apellido: 'Chan Puc',
      correo: 'eCP0101@gmail.com',
      fechaAudiencia: '2024-02-14',
      horaCita: '15:00',
      numPersonas: '2',
      asunto: 'Orientación sobre proyectos nuevos',
      telefono: '993 234567',
      ciudad: 'Jonuta',
      estado: 'Tabasco',
    },
    {
      ID: 3,
      nombre: 'Sofía',
      apellido: 'García',
      correo: 'sofia@example.com',
      fechaAudiencia: '2023-12-16',
      horaCita: '10:30',
      numPersonas: '2',
      asunto: 'Consulta médica',
      telefono: '993 345678',
      ciudad: 'Cárdenas',
      estado: 'Tabasco',
    },
    {
      ID: 4,
      nombre: 'Mateo',
      apellido: 'Martínez',
      correo: 'mateo@example.com',
      fechaAudiencia: '2023-12-17',
      horaCita: '12:00',
      numPersonas: '3',
      asunto: 'Presentación de proyecto',
      telefono: '993 456789',
      ciudad: 'Comalcalco',
      estado: 'Tabasco',
    },
  ]);

  const [editando, setEditando] = useState(false);

  const [usuario, setUsuario] = useState({
    ID: '',
    nombre: '',
    apellido: '',
    correo: '',
    fechaAudiencia: '',
    horaCita: '',
    numPersonas: '',
    asunto: '',
    telefono: '',
    ciudad: '',
    estado: '',
  });

  const handleChange = (prop) => (event) => {
    setUsuario({ ...usuario, [prop]: event.target.value });
  };

  const handleAgregarUsuario = () => {
    if (editando) {
      console.log('Usuario editado:', usuario);
    } else {
      console.log('Usuario agregado:', usuario);
    }

    setUsuario({
      ID: '',
      nombre: '',
      apellido: '',
      correo: '',
      fechaAudiencia: '',
      horaCita: '',
      numPersonas: '',
      asunto: '',
      telefono: '',
      ciudad: '',
      estado: '',
    });

    setEditando(false);
  };

  const handleEditarUsuario = (usuarioAEditar) => {
    setUsuario(usuarioAEditar);
    setEditando(true);
  };

  return ( 
    <Grid item xs={6}>
    <TextField
label="ID"
value={usuario.ID}
onChange={handleChange('ID')}
variant="standard"
size="small"
fullWidth
margin="normal"
InputLabelProps={{ shrink: true }}
required
inputProps={{
pattern: "[0-9]+",
title: "El ID debe contener solo números, y deben ser dos digitos.",
}}
onFocus={(e) => console.log('Input enfocado')}
onBlur={(e) => console.log('Input fuera de foco')}
      sx={{
        '& input': { color: 'red' },
        '& .MuiInput-underline:before': { borderBottom: '1px solid red' },
        '& .MuiInput-underline:after': { borderBottom: '2px solid red' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: '2px solid red' },
      }}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField
            label="Nombre(s)"
            value={usuario.nombre}
            onChange={handleChange('nombre')}
            variant="standard"
            size="small"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
      inputProps={{
        pattern: "^[A-Za-zÀ-ÿ\u00f1\u00d1\\s]+$",
        title: "Ingresa nombres válidos",
            }}
            onFocus={(e) => console.log('Input enfocado')}
            onBlur={(e) => console.log('Input fuera de foco')}
      sx={{
        '& input': { color: 'red' },
        '& .MuiInput-underline:before': { borderBottom: '1px solid red' },
        '& .MuiInput-underline:after': { borderBottom: '2px solid red' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: '2px solid red' },
      }}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField
      label="Apellido(s)"
      value={usuario.apellido}
      onChange={handleChange('apellido')}
      variant="standard"
      size="small"
      fullWidth
      margin="normal"
      InputLabelProps={{ shrink: true }}
      required
      inputProps={{
        pattern: "^[A-Za-zÀ-ÿ\u00f1\u00d1\\s]+$",
        title: "Ingresa un apellido válido",
      }}
      onFocus={(e) => console.log('Input enfocado')}
      onBlur={(e) => console.log('Input fuera de foco')}
      sx={{
        '& input': { color: 'red' },
        '& .MuiInput-underline:before': { borderBottom: '1px solid red' },
        '& .MuiInput-underline:after': { borderBottom: '2px solid red' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: '2px solid red' },
      }}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField
      label="Correo Electrónico"
      value={usuario.correo}
      onChange={handleChange('correo')}
      variant="standard"
      size="small"
      fullWidth
      margin="normal"
      InputLabelProps={{ shrink: true }}
      required
      inputProps={{
        type: 'email',
        pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
        title: 'Ingresa un correo electrónico válido',
      }}
      onFocus={(e) => console.log('Input enfocado')}
      onBlur={(e) => console.log('Input fuera de foco')}
      sx={{
        '& input': { color: 'red' },
        '& .MuiInput-underline:before': { borderBottom: '1px solid red' },
        '& .MuiInput-underline:after': { borderBottom: '2px solid red' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: '2px solid red' },
      }}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField
          id="date"
          label="Día de Audiencia"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={usuario.fechaAudiencia}
          onChange={handleChange('fechaAudiencia')}
          required
          inputProps={{
            pattern: '^\\d{4}-\\d{2}-\\d{2}$',
            title: 'Ingrese una fecha válida en formato YYYY-MM-DD',
          }}
          onFocus={(e) => console.log('Input enfocado')}
          onBlur={(e) => console.log('Input fuera de foco')}
      sx={{
        '& input': { color: 'red', borderBottom: '1px solid red' },
        '& label.Mui-focused': {
          color: 'red',
        },
        '& .MuiInput-underline:before': {
          borderBottom: '1px solid red',
        },
        '& .MuiInput-underline:after': {
          borderBottom: '2px solid red',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: '2px solid red',
        },
      }}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField
          id="time"
          label="Hora de Cita"
          type="time"
          value={usuario.horaCita}
          onChange={handleChange('horaCita')}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            pattern: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$',
            title: 'Ingrese una hora válida en formato HH:MM',
          }}
          fullWidth
          margin="normal"
          required
          onFocus={(e) => console.log('Input enfocado')}
          onBlur={(e) => console.log('Input fuera de foco')}
      sx={{
        '& input': { color: 'red', borderBottom: '1px solid red' },
        '& label.Mui-focused': {
          color: 'red',
        },
        '& .MuiInput-underline:before': {
          borderBottom: '1px solid red',
        },
        '& .MuiInput-underline:after': {
          borderBottom: '2px solid red',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid red',
        },
      }}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField
        label="Número de personas"
        variant="standard"
        size="small"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={usuario.numPersonas}
        onChange={handleChange('numPersonas')}
        type="number"
        requiered
        inputProps={{
          min: 1,
          max: 10,
          pattern: '^[1-9]|10$',
          title: 'Ingrese un número válido de personas a auditar (de 1 a 10)',
        }}
        onFocus={(e) => console.log('Input enfocado')}
        onBlur={(e) => console.log('Input fuera de foco')}
      sx={{
        '& input': { color: 'red' },
        '& .MuiInput-underline:before': { borderBottom: '1px solid red' },
        '& .MuiInput-underline:after': { borderBottom: '2px solid red' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: '2px solid red' },
      }}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField
        label="Asunto"
        variant="standard"
        size="small"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={usuario.asunto}
        onChange={handleChange('asunto')}
        required
        inputProps={{
          pattern: '^[A-Za-zÀ-ÿ\u00f1\u00d1\\s]+$',
          title: 'No olvide llenar este campo con un asunto valido',
        }}
      onFocus={(e) => console.log('Input enfocado')}
      onBlur={(e) => console.log('Input fuera de foco')}
      sx={{
        '& input': { color: 'red' },
        '& .MuiInput-underline:before': { borderBottom: '1px solid red' },
        '& .MuiInput-underline:after': { borderBottom: '2px solid red' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: '2px solid red' },
      }}
    />
    <Grid item xs={12} >
      <TextField
          label="Teléfono"
          variant="standard"
          size="small"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={usuario.telefono}
          onChange={handleChange('telefono')}
          required
          type="tel"
          inputProps={{
          pattern: '^993 [0-9]{7}$',
          title: 'Ingrese un número de teléfono válido de Tabasco y México',
          }}
          onFocus={(e) => console.log('Input enfocado')}
          onBlur={(e) => console.log('Input fuera de foco')}
        sx={{
          '& input': { color: 'red' },
          '& .MuiInput-underline:before': { borderBottom: '1px solid red' },
          '& .MuiInput-underline:after': { borderBottom: '2px solid red' },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: '2px solid red' },
        }}
      />
    </Grid>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  );
}

export default Crear;
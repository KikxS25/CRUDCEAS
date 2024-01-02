//Home.jsx
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, AppBar, Toolbar, IconButton, Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome, faIdCard, faUser, faEnvelope, faMapMarkerAlt, faCalendarAlt, faClock, faUsers, faFileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8081/usuarios')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: '#800000' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Menú {/* Texto Menú */}
        </Typography>
        <IconButton color="inherit" aria-label="home">
          <FontAwesomeIcon icon={faHome} /> Inicio {/* Icono de página principal */}
        </IconButton>
      </Toolbar>
    </AppBar>
      <Box sx={{ backgroundColor: '#802434', minHeight: '100vh', py: '4rem' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom style={{ color: 'white' }}>
            Registro del turno de los usuarios
          </Typography>
          <Typography variant="body1" align="center" style={{ color: 'white' }}>
          Antes de continuar y completar los campos, por favor, verifique la precisión de la cita ingresada y evite realizar modificaciones en ella. Al hacer clic en el siguiente botón, se desplegará una página que le llevará al proceso de registro de las citas.
          </Typography>
          <Grid container justifyContent="center" style={{ marginTop: '2rem' }}>
            <Button component={Link} to='/Crear' variant="contained" color="error" size="large">
              Agregar Usuario +
            </Button>
          </Grid>
          <TableContainer component={Paper} style={{ marginTop: '2rem' }}>
  <Table>
    <TableHead>
    <TableRow>
      <TableCell><FontAwesomeIcon icon={faIdCard} /> ID</TableCell>
      <TableCell><FontAwesomeIcon icon={faUser} /> Nombre(s)</TableCell>
      <TableCell><FontAwesomeIcon icon={faUser} /> Apellido(s)</TableCell>
      <TableCell><FontAwesomeIcon icon={faEnvelope} /> Correo Electrónico</TableCell>
      <TableCell><FontAwesomeIcon icon={faMapMarkerAlt} /> Procedencia</TableCell>
      <TableCell><FontAwesomeIcon icon={faCalendarAlt} /> Día de audiencia</TableCell>
      <TableCell><FontAwesomeIcon icon={faClock} /> Hora de Cita</TableCell>
      <TableCell><FontAwesomeIcon icon={faUsers} /> Número de Personas</TableCell>
      <TableCell><FontAwesomeIcon icon={faFileAlt} /> Asunto</TableCell>
      <TableCell><FontAwesomeIcon icon={faPhone} /> Número Telefónico</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
      {data.map((usuario, index) => (
        <TableRow key={index}>
          <TableCell>{usuario.ID}</TableCell>
          <TableCell>{usuario.apellido}</TableCell>
          <TableCell>{usuario.nombre}</TableCell>
          <TableCell>{usuario.correo}</TableCell>
          <TableCell>{usuario.procedencia}</TableCell>
          <TableCell>{usuario.diaAudiencia}</TableCell>
          <TableCell>{usuario.horaCita}</TableCell>
          <TableCell>{usuario.numPersonas}</TableCell>
          <TableCell>{usuario.asunto}</TableCell>
          <TableCell>{usuario.telefono}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
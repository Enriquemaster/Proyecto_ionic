import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card className="m-8" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Este es un cardas
        </Typography>
        <Typography variant="h5" component="div">
          Este es el titulo
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Este un subtitulo</Typography>
        <Typography variant="body2">
          Aqui va el contenido
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Leer mas..</Button>
      </CardActions>
    </Card>
  );
}

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';

type Row = {
    nome: string;
    jogadas: number;
    tempo: string
}

const localStorageRows: Row[] = [
{
    nome: "Bread Pitt",
    jogadas: 10,
    tempo: '2:00'
},
{
    nome: "Lola Pakita",
    jogadas: 12,
    tempo: '2:15'
},
{
    nome: "Zack",
    jogadas: 15,
    tempo: '2:45'
},
];

// window.localStorage.setItem('ranking', JSON.stringify(localStorageRows))



export default function TabelaSimples() {

    function compararPorJogadas(a: Row, b: Row) {
        return a.jogadas - b.jogadas
    }
    
    function compararPorTempo(a: Row, b: Row) {
        return Number(a.tempo) - Number(b.tempo)
    }

    const [checked, setChecked] = React.useState(true);

    let rows:Row[] = JSON.parse(window.localStorage.getItem('ranking') || '[]')
    rows.sort(checked ? compararPorJogadas : compararPorTempo )
    
  return (
    <>

    {/* <FormGroup>
        <FormControlLabel control={<Switch
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          />} label="Ordenar classificação" />
    </FormGroup> */}

    <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography>Ordenar classificação</Typography>
        <Box display='flex' alignItems='center'>
            <Typography>tempo</Typography>
        <Switch
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          />
          <Typography>jogadas</Typography>
        </Box>
    </Box>
    
    <TableContainer component={Paper} >
      <Table  size="small">
        <TableHead>
          <TableRow>
            <TableCell>Classificação</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Jogadas</TableCell>
            <TableCell align="right">Tempo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            
           
           return (
            <TableRow
              key={index+1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.nome}</TableCell>
              <TableCell align="right">{row.jogadas}</TableCell>
              <TableCell align="right">{Number(row.tempo) > 59 ? parseInt(`${(Number(row.tempo)/60)}`)+":"+`${Number(row.tempo)%60}` : row.tempo}</TableCell>
            </TableRow>
          )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

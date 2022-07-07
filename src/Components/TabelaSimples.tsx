import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function comparar(a: Row, b: Row) {
    return a.jogadas - b.jogadas
}

export default function TabelaSimples() {
    let rows:Row[] = JSON.parse(window.localStorage.getItem('ranking') || '[]')
    rows.sort(comparar)
    
  return (
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
              <TableCell align="right">{row.tempo}</TableCell>
            </TableRow>
          )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

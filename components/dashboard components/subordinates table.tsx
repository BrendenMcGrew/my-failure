import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useRouter} from "next/router";

function createData(
    id: string,
    firstName: string,
    lastName: string,
    rank: string,
) {
    return {id, firstName, lastName, rank };
}

const rows = [
    createData('1','Norman','Snuffy', 'A1C'),
    createData('2','Chad','Suffy', 'SRA'),
    createData('3','Norman','Snuffy II', 'A1C'),
    createData('4','Super','Snuffy', 'SSGT'),
    createData('5','Virgin','Snuffy', 'AB'),
];

export default function SubordinatesTable() {
    const router = useRouter()
    return (
        <TableContainer component={Paper} className="col-span-2">
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name&nbsp;</TableCell>
                        <TableCell align="right">Rank&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover
                            onClick={ () => router.push('/people/' + row.id)}
                        >
                            <TableCell component="th" scope="row">
                                {row.firstName}
                            </TableCell>
                            <TableCell>
                                {row.lastName}
                            </TableCell>
                            <TableCell align="right">
                                {row.rank}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

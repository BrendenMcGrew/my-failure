import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import { useRouter } from 'next/router'

function createData(
    name: string,
    id: number,
) {
    return { name, id };
}

const rows = [
    createData('AETC form 341', 159),
    createData('LOC', 237),
    createData('LOA', 262),
    createData('LOR', 305),
    createData('Article 15', 356),
    createData('AETC form 682', 682)
];

export default function DocumentsTable({templates}: any) {
    const router = useRouter()
    
    const rows: any[] = [];
    templates.length && templates.forEach( (template: any) =>
	rows.push( createData( template.docName, template.docID ) )
    )
    
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Download&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="download">
                                    <DownloadIcon onClick={ () => router.push('/api/download/template/' + row.id)} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

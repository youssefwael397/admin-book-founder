import React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { columns } from './Columns';
import TableForm from './../TableForm/TableForm';


export default function TableBooks({ lang, setLang, setDeletedBook, setEditedBook }) {
    const [page, setPage] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    let counter = 0

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };


    return <Paper
        className="container my-3"
        sx={{ width: "100%", overflow: "hidden" }}
    >
        {/* table form to detect arabic or english books */}
        <TableForm lang={lang} setLang={setLang} setIsLoading={setIsLoading} setRows={setRows} />

        {isLoading ? <LinearProgress /> : null}

        <TableContainer sx={{ maxHeight: 550 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id.toString()}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                        <TableCell
                            align="center"
                            key={`delete${counter++}`}
                            style={{ minWidth: 100 }}
                        >
                            Options
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={row.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell key={row._id}>
                                        <Stack spacing={2} direction="row">
                                            <IconButton aria-label="edit" color="primary" >
                                                <EditIcon data-bs-toggle="modal" data-bs-target="#editFormModal" onClick={() => setEditedBook({ _id: row._id, name: row.name, author: row.author, price: row.price, numberOfPages: row.numberOfPages, overview: row.overview })} />
                                            </IconButton>
                                            <IconButton aria-label="delete" color="error" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDeletedBook({ id: row._id, name: row.name })}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>;
}

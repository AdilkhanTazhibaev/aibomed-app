import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../../../Loading/Loading";
import {Button} from "@mui/material";
import {openModal, setPageLimit, setPageOffset} from "../../../../redux/actions/layuout-action";

const columns = [
    { id: 'name', label: 'Наименование', minWidth: 170 },
    { id: 'code', label: 'Дата создание', minWidth: 100 },
    {
        id: 'population',
        label: 'Дата завершение',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Исполнитель',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'patient',
        label: 'Пациент',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'reception',
        label: 'Прием',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'actions',
        label: 'Действия',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];



export default function DoneTable() {
    const {doneTask, isLoading} = useSelector(state =>state.tasks)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const dispatch = useDispatch()

    const handleChangePage = (event, newPage) => {

        setPage(newPage);
        dispatch(setPageOffset(newPage))

    };

    const handleChangeRowsPerPage = (event) => {
        console.log(event.target.value)
        setRowsPerPage(+event.target.value);
        setPage(0);
        dispatch(setPageLimit(rowsPerPage))
    };

    return (
        <> {!isLoading ? <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align="center"
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doneTask?.results?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(task =>(
                            <TableRow hover role="checkbox" tabIndex={-1} key={task.uuid}>
                                {<TableCell align="center">
                                    {task.name}
                                </TableCell>}
                                <TableCell align="center">

                                    {new Date(task.created_at).toLocaleDateString()}
                                </TableCell>
                                <TableCell align="center">
                                    {new Date(task.plan_end_at).toLocaleDateString()}
                                </TableCell>
                                <TableCell align="right">
                                    {task.assignee.first_name}
                                    {' '}
                                    {task.assignee.last_name}
                                </TableCell >
                                <TableCell align="center" >
                                    ---
                                </TableCell>
                                <TableCell align="center">
                                    ---
                                </TableCell>
                                <TableCell align="center">
                                    <Button onClick={()=>{
                                        dispatch(openModal(task.uuid))
                                    }}>Подробнее</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={doneTask?.results.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>:<Loading/>}

        </>
    );
}


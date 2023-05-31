import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useGetUsersQuery } from "./usersApiSlice"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function UsersTable() {




    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery(undefined, {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })


    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {


        if (users) {
            const {  entities } = users

        function createData(object) {
            const { id,active,roles,username,image  } = object;
            return {id,active,roles,username,image}
        }

        let obj = []

        for(let key in entities){
                obj.push(createData(entities[key]))
        }
        
                content = (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='right'>Image:</TableCell>
                                    <TableCell align='right'>Name:</TableCell>
                                    <TableCell align="right">Is Employee</TableCell>
                                    <TableCell align="right">Is Manager</TableCell>
                                    <TableCell align="right">Is Admin</TableCell>
                            
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {obj.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                        

                                            align='right'>
                                            <img
                                            className='img-icon'
                                            src={row.image}
                                            alt={row.username} />
                                        </TableCell>
                                        <TableCell align='right'>
                                            {row.username}
                                        </TableCell>
                                        <TableCell align="right">{row.roles[0]}</TableCell>
                                        <TableCell align="right">{row.roles[1]}</TableCell>
                                        <TableCell align="right">{row.roles[2]}</TableCell>
                                    
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                );


        }



    }

    return content

}
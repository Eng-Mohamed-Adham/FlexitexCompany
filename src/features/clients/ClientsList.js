import Client from './Client'
import { useGetClientsQuery } from "./clientApiSlice";

import * as React from 'react';
import { selectAllClients } from './clientApiSlice';
import { useSelector } from 'react-redux';


const ClientsList = () => {


   
    const {
        data: clients,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetClientsQuery(undefined, {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
    // console.log(clients)
   
 

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = clients

        const tableContent = ids?.length&& ids.map(clientId => <Client key={clientId} clientId={clientId} />)
    
        

        content = (
            <table className="table table--clients">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th client__username">username</th>
                        <th scope="col" className="table__th client__roles">Orders</th>
                        <th scope="col" className="table__th client__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
                </table>

        )
    }

    return content
}
export default ClientsList
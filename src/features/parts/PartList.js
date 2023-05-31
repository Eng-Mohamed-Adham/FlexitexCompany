import { useGetPartsQuery } from "./partsApiSlice"
import Part from "./Part"
import useAuth from "../../hooks/useAuth"

const PartsList = () => {
    const {username, isManager,isAdmin} = useAuth()

    const {
        data: parts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPartsQuery(undefined, {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids,entities } = parts
        let fillteredIds;
        if(isManager || isAdmin){
            fillteredIds = [...ids]
        }else{
            fillteredIds = ids.filter(partId => entities[partId].username === username)
        }

        const tableContent = ids?.length&& ids.map(partId => <Part key={partId} partId={partId} />)
            

        content = (
            <table className="table table--notes">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th note__status">name</th>
                        <th scope="col" className="table__th note__created">Created</th>
                        {/* <th scope="col" className="table__th note__updated">Updated</th> */}
                        <th scope="col" className="table__th note__title">Desc</th>
                        <th scope="col" className="table__th note__username">ProductionDate</th>
                        {/* <th scope="col" className="table__th note__edit">LifeSpan</th> */}
                        <th scope="col" className="table__th note__edit">Count</th>
                        <th scope="col" className="table__th note__edit">Edit</th>

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
export default PartsList
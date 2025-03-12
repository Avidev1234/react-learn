/* eslint-disable react/prop-types */
export const Mytable = ({props}) => {

    const {id,name,data}=props
    return (
        <div>
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Name</th>
                    <th>Data</th>
                </tr>
                <tr> 
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{data}</td>
                </tr>
            </table>
        </div>
    )
}
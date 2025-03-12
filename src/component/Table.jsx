/* eslint-disable no-undef */
import Netflix from "../Api/table.json"
import { Mytable } from "./Mytable"

export const Table = () => {
    return (
        <>

            <div>
                {Netflix.map((watch) => {
                    return <Mytable key={watch.id} data={watch} />;
                })}
            </div>
        </>
    )

} 
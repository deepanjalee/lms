import styled from "styled-components";

import { capitalizeFirst } from "../shared/utils"
import { NoData } from "./NoData";


const StyledTable = styled.table`
margin-top: 2em;
border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
border: none;

th,td{
    border: none;
    padding: 1em 3em;
}

td{
    padding: 1em 3em;
}

tbody tr{
    :nth-child(even) {
        background-color: ${props => props.theme.primary.links};
    }

    &:hover {
        background-color: ${props => props.theme.primary.move};       
    }
}

thead{
    background-color: ${props => props.theme.primary.move};
}

tr  {
    cursor: pointer;
}
caption{
    background-color: ${props => props.theme.primary.links};
    font-size: 1.5em;
    font-weight: bolder;
    padding: 1em;
    color: ${props => props.theme.primary.ash};
}
`;


const TableMarkUp = ({ titles, data, handleClick, caption }) => (
    <StyledTable>
        <caption>{caption}</caption>
        <colgroup>
            {titles.map((title, index) => (
                <col key={index} />
            ))}
        </colgroup>
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <th key={index}>{capitalizeFirst(title)}</th>
                ))}
            </tr>
        </thead>
        <tbody>

            {data.map((item, index) => (
                <tr key={index} onClick={() => handleClick(item.id)}>
                    {titles.map((title, index) => (
                        <td key={index}>
                            {
                                typeof item[title] === "boolean" ?
                                    item[title] ? "Yes" : "No" :
                                    item[title]}
                        </td>
                    ))}

                </tr>
            ))}


        </tbody>
    </StyledTable>
);



const Table = ({ data, handleRowClick, instruction }) =>

    data.length > 0 ? <TableMarkUp titles={Object.keys(data[0])} data={data} handleClick={handleRowClick} caption={instruction} /> : <NoData>
        No Data Available
    </NoData>

export default Table;

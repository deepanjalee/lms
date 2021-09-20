import styled from "styled-components";


const StyledTable = styled.table`
border: none;
border-collapse: separate;
th,td{
    border: none;
}

td{
    padding: 5px 10px;
}

tbody tr{
    :nth-child(odd) {
        background-color: ${props => props.theme.primary.links};
    }

    &:hover {
        background-color: ${props => props.theme.primary.move};       
    }
}

thead{
    background-color: ${props => props.theme.primary.move};
}
`;


const TableMarkUp = ({ titles, data }) => (
    <StyledTable>
        <colgroup>
            {titles.map((title, index) => (
                <col key={index} />
            ))}
        </colgroup>
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <th key={index}>{title}</th>
                ))}
            </tr>
        </thead>
        <tbody>
           
                {data.map((item,index)=>(
                  <tr key={index}>
                      {titles.map((title,index)=>(
                          <td key={index}>
                              {item[title]}
                          </td>
                      ))}

                  </tr>
                ))}

          
        </tbody>
    </StyledTable>
);

const Table = ({ data }) => <TableMarkUp titles={Object.keys(data[0])} data={data}  />

export default Table;

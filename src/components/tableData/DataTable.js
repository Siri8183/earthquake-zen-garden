import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTable, useSortBy } from 'react-table';
import moment from 'moment';
import './dataTable.css';

const DataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'properties.place',
        Cell: ({ row }) => (
          <NavLink className='navlink' activeClassName='active' to={`/detail/${row.original.id}`}>
            {row.original.properties.place}
          </NavLink>
        ),
      },
      {
        Header: 'Magnitude',
        accessor: 'properties.mag',
      },
      {
        Header: 'Time',
        accessor: 'properties.time',
        Cell: ({ row }) => moment(row.original.properties.time).format('LLL'),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  return (
    <>
      <table className='datatable' {...getTableProps()}>
        <thead>
          <tr>
            {headers.map((column) => {
              return (
                <th {...column.getHeaderProps()}>
                  <span {...column.getSortByToggleProps()} onClick={() => (column.isSortedDesc ? column.toggleSortBy(false, false) : column.toggleSortBy(true, false))}>
                    {column.render('Header')}
                  </span>
                </th>
                // <th {...column.getHeaderProps()}>
                //   <tr>
                //     <td {...column.getSortByToggleProps()} onClick={() => (column.isSortedDesc ? column.toggleSortBy(false, false) : column.toggleSortBy(true, false))}>
                //       {column.render('Header')}
                //     </td>
                //   </tr>
                // </th>
              );
            })}
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;

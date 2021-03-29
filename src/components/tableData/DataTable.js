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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  return (
    <div className='container'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <td className='heading' {...column.getHeaderProps()}>
                  <span {...column.getSortByToggleProps()} onClick={() => (column.isSortedDesc ? column.toggleSortBy(false, false) : column.toggleSortBy(true, false))}>
                    {column.render('Header')}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className='td' {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

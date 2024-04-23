import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, DateRange } from "react-date-range";
import { format } from "date-fns";
import { COLUMNS, data } from "../components/record";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useFilters,
} from "react-table";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../styles/history.css";
import calenderSvg from "../assets/svgs/calender.svg";
import { GlobalFilter } from "../components/TableSearch";
export const History = () => {
  const columns = useMemo(() => COLUMNS, []);
  const record = useMemo(() => data, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    prepareRow,
    pageOptions,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  const { globalFilter, pageIndex, filters } = state;
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(), // Use null if you don't want to have endDate
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const statusIconMap = {
    "In-Transit": <i className="fa-solid fa-truck-moving status-icon"></i>,
    Assigned: <i className="fa-solid fa-check-double status-icon"></i>,
    Delivered: <i className="fa-solid fa-people-carry-box status-icon"></i>,
  };
  return (
    <motion.div className="settings">
      <div className="t-top">
        <div className="calendar-filter">
          <div className="cal-filter-left">
            <p onClick={() => setOpenDate(!openDate)}>
              <img src={calenderSvg} alt="cale" />
              <span>{`${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
                date[0].endDate,
                "MM/dd/yyy"
              )}`}</span>
            </p>
          </div>
          {/* <div className="cal-filter-right">
                        <div className="styles_dropdownWrapper__cpjDc undefined"><div className="styles_active__MWkIg styles_dropdown__1hw5U " role="button" aria-label="dropdown" tabindex="0">monthly <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg" className=" styles_blackCaret__AOGMs"><path d="M2.99219 2.99932L0.929688 0.936823L1.51885 0.347656L4.17052 2.99932L1.51885 5.65099L0.929688 5.06182L2.99219 2.99932Z" fill="#ffffff"></path></svg></div><div className="styles_dropdownList__nqlMp undefined"><div role="button" className="styles_dropdownListItem__2w8Cg undefined">Monthly</div><div role="button" className="styles_dropdownListItem__2w8Cg undefined">Yearly</div></div></div>
                    </div> */}
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="calnderRange"
            />
          )}
        </div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      {record.length > 0 ? (
        <>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.id !== 'status' ? column.getSortByToggleProps() : {})}
                    >
                      {column.render("Header")}
                      {column.id !== "status" && (
                        <span className="sort-icon">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <i className="fa-solid fa-sort-down"></i>
                            ) : (
                              <i className="fa-solid fa-sort-up"></i>
                            )
                          ) : (
                            <i className="fa-solid fa-sort"></i>
                          )}
                        </span>
                      )}

                      {column.id === "status" && (
                        <div className="dropdown">
                          <select
                            value={filters[0] ? filters[0].value || "" : ""}
                            onChange={(e) => {
                              const value = e.target.value || undefined;
                              column.setFilter(value);
                            }}
                          >
                            <option value="">All</option>
                            <option value="delivered">Delivered</option>
                            <option value="in-transit">In-transit</option>
                            <option value="assigned">Assigned</option>
                            <option value="waiting">Waiting</option>
                          </select>
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>
                          {cell.column.id === "status" ? (
                            <div>
                              {statusIconMap[cell.value]}
                              <span className="status-text">{cell.value}</span>
                            </div>
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="table-down">
            <span>
              <strong>
                {(pageIndex * 10) + 1} - {Math.min(10 * (pageIndex + 1), rows.length)} of {rows.length}
              </strong>
                {"  "} records
            </span>
            <div className="up-down">
                <p>{pageIndex + 1}</p>
                <div>
                    <p className="pointer">{canNextPage && <i onClick={() => nextPage()} className="fa-solid fa-sort-up"></i>}</p>
                    <p className="pointer">{canPreviousPage && <i onClick={() => previousPage()} className="fa-solid fa-sort-down"></i>}</p>
                </div>
            </div>
          </div>
        </>
      ) : (
        <p>No transaction yet</p>
      )}
    </motion.div>
  );
};

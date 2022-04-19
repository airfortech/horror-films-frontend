import React, { useContext, useState } from "react";
import style from "./Pagination.module.css";
import { Pagination } from "react-headless-pagination";
import { QueryContext } from "../../../context/QueryContext/QueryContext";

const PaginationContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { updateParams, films, updateFilms, setLoading } =
    useContext(QueryContext);
  console.log("");
  console.log("odpalamy paginacje");
  console.log(films);

  const handlePageChange = newPage => {
    console.log("current page: " + (newPage + 1));
    setCurrentPage(newPage);
    const newParams = updateParams("page", newPage + 1).toString();
    console.log(newParams);
    updateFilms(newParams);
  };

  return (
    <Pagination
      currentPage={films.page - 1}
      setCurrentPage={handlePageChange}
      totalPages={films.pages}
      edgePageCount={1}
      middlePagesSiblingCount={1}
      className={style.pagination}
      truncableText="..."
      truncableClassName={style.paginationTruncable}
    >
      <Pagination.PrevButton
        className={
          style.paginationButton +
          (currentPage === 0 ? " " + style.disabled : "")
        }
      >
        <i className="bx bx-chevron-left" />
      </Pagination.PrevButton>

      <div className="flex items-center justify-center flex-grow">
        <Pagination.PageButton
          activeClassName={style.active}
          inactiveClassName={style.inactive}
          className={style.paginationPage}
        />
      </div>

      <Pagination.NextButton
        className={
          style.paginationButton +
          (currentPage === films.pages - 1 ? " " + style.disabled : "")
        }
      >
        <i className="bx bx-chevron-right" />
      </Pagination.NextButton>
    </Pagination>
  );
};

export { PaginationContainer as Pagination };

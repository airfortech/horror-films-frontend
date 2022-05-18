import React, { useState } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { Pagination } from "react-headless-pagination";
import style from "./Pagination.module.css";

const PaginationContainer = ({ page, pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    const newSearchParams = searchParams;
    newSearchParams.set("page", newPage + 1);
    navigate(pathname + "?" + newSearchParams.toString());
  };

  return (
    <Pagination
      currentPage={page - 1}
      setCurrentPage={handlePageChange}
      totalPages={pages}
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
          (currentPage === pages - 1 ? " " + style.disabled : "")
        }
      >
        <i className="bx bx-chevron-right" />
      </Pagination.NextButton>
    </Pagination>
  );
};

export { PaginationContainer as Pagination };

import React, { useState, useEffect } from "react";

const Pagination = ({ setStartIndex, pageSize, count }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState();

  useEffect(() => {
    setNoOfPages(Array.from(Array(count / pageSize).keys()));
  }, [count, pageSize]);

  console.log(Array.from(Array(count / pageSize).keys()));
  return noOfPages && noOfPages.length ? (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {
              if (currentPage > 1) {
                console.log("currentPage", currentPage - 1);
                setCurrentPage(currentPage - 1);
                setStartIndex(pageSize * (currentPage - 2));
              }
            }}
          >
            {" "}
            Prev
          </a>
        </li>
        {noOfPages.map((page, i) => {
          const className =currentPage == i + 1?'page-item active':'page-item';
          return (
            <li className={className}>
              <a
                className="page-link"
                key={i}
                onClick={() => {
                  setCurrentPage(currentPage => i + 1);
                  setStartIndex(pageSize * i);
                }}
              >
                {" "}
                {i + 1}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {
              if (currentPage < 5) {
                console.log("currentPage", currentPage + 1);
                setCurrentPage(currentPage + 1);
                setStartIndex(pageSize * currentPage);
              }
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  ) : null;
};

export default Pagination;

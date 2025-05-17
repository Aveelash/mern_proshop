import React from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    if (!isAdmin) {
      // If keyword exists, include it in the route, else just page number
      if (keyword.trim()) {
        navigate(`/search/${keyword}/page/${pageNumber}`);
      } else {
        navigate(`/page/${pageNumber}`);
      }
    } else {
      // Admin pagination usually doesn't use keyword, but just in case:
      if (keyword.trim()) {
        navigate(`/admin/productlist/${keyword}/page/${pageNumber}`);
      } else {
        navigate(`/admin/productlist/${pageNumber}`);
      }
    }
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === Number(page)}
            onClick={() => handlePageChange(x + 1)}
            style={{ cursor: "pointer" }}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;

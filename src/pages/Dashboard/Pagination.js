import "../../styles/Dashboard/Pagination.css";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Beginning
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
      return pages;
    }

    // End
    if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
      return pages;
    }

    // Middle
    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages
    );

    return pages;
  };

  return (
    <div className="e2e_pagination_container">
      <button
        className="e2e_pagination_btn"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
      >
        Previous
      </button>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span
            key={index}
            className="e2e_pagination_dots"
          >
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`e2e_pagination_number ${
              currentPage === page
                ? "e2e_pagination_active"
                : ""
            }`}
            onClick={() =>
              onPageChange(page)
            }
          >
            {page}
          </button>
        )
      )}

      <button
        className="e2e_pagination_btn"
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
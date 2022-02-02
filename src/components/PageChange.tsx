import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  updateCurrentPage: (page: number) => void;
}

export const PageChange: React.FC<Props> = ({
  currentPage,
  totalPages,
  updateCurrentPage,
}) => {
  return (
    <div style={{ marginBottom: "5%" }}>
      <div style={{ gap: "0.5rem" }}>
        <button
          disabled={currentPage === 1}
          style={{
            backgroundColor: "#474747",
            color: "white",
            border: "none",
            outline: "none",
            padding: "0.5rem",
            marginRight: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => updateCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span style={{ color: "white" }}>
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          style={{
            backgroundColor: "#474747",
            color: "white",
            border: "none",
            outline: "none",
            padding: "0.5rem",
            marginLeft: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => updateCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

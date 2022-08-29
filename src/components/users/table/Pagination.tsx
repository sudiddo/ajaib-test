import React from "react";

export interface PaginationProps {
  page: number;
  onPageChange: (page: number) => void;
}

function Pagination({ page, onPageChange }: PaginationProps) {
  return (
    <div className="bg-gray-500 text-white h-12 flex items-center px-3 justify-between">
      <p>Showing 1 to 10 of {page * 10} results</p>
      <div>
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="border rounded px-3 py-1 mr-3 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(page + 1)}
          className="border rounded px-3 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/movieSlice';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

const Pagination: React.FC<PaginationProps> = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state: any) => state.movies);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
        Previous
      </button>
      <span>{currentPage}</span>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

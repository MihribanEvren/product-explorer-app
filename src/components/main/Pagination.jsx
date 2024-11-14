import { Pagination as MuiPagination } from '@mui/material';
import { useFiltersStore } from '../../state/productStore/filtersStore';
import { useProducts } from '../../hooks/productHooks/useProducts';

function Pagination() {
  const { itemsPerPage, currentPage, setCurrentPage } = useFiltersStore();
  const { currentTotal } = useProducts();

  const totalPages = Math.ceil(currentTotal / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      color="secondary"
      variant="outlined"
      onChange={handlePageChange}
    />
  );
}

export default Pagination;

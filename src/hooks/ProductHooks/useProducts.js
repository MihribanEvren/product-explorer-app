import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../api/productApi/fetchProducts';
import { useFiltersStore } from '../../state/filtersStore';

export const useProducts = () => {
  const { itemsPerPage, currentPage } = useFiltersStore();

  const query = useQuery({
    queryKey: ['products', itemsPerPage, currentPage],
    queryFn: () => fetchProducts({ itemsPerPage, currentPage }),
  });

  return {
    ...query,
    currentProducts: query.data?.products || [],
    currentTotal: query.data?.total || 0,
  };
};

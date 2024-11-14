import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../api/productApi/fetchProducts';
import { useFiltersStore } from '../../state/filtersStore';

export const useProducts = (searchQuery) => {
  const { itemsPerPage, currentPage } = useFiltersStore();

  const query = useQuery({
    queryKey: ['products', itemsPerPage, currentPage, searchQuery],
    queryFn: () => fetchProducts({ itemsPerPage, currentPage, searchQuery }),
    enabled: !!searchQuery || (!searchQuery && currentPage !== undefined),
  });

  return {
    ...query,
    currentProducts: query.data?.products || [],
    currentTotal: query.data?.total || 0,
  };
};

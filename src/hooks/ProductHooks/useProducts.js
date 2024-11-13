import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../api/productApi/fetchProducts';
import { useFiltersStore } from '../../state/filtersStore';
import { useProductsStore } from '../../state/productsStore';

export const useProducts = () => {
  const { itemsPerPage, currentPage } = useFiltersStore();
  const { setProducts, setTotalProducts } = useProductsStore();
  const MINUTE = 60 * 1000;

  const query = useQuery({
    queryKey: ['products', itemsPerPage, currentPage],
    queryFn: () => fetchProducts({ itemsPerPage, currentPage }),
    onSuccess: (data) => {
      if (data?.products) {
        setProducts(data.products);
        setTotalProducts(data.total);
      }
    },
    defaultOptions: {
      refetchOnWindowFocus: false,
      refetchInterval: 10 * MINUTE,
      staleTime: 5 * MINUTE,
      cacheTime: 10 * MINUTE,
      gcTime: 10 * MINUTE,
    },
  });

  return {
    ...query,
    currentProducts: query.data?.products || [],
    currentTotal: query.data?.total || 0,
  };
};

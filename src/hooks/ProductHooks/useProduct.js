import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../../api/productApi/fetchProduct';

export const useProduct = (id) => {
  const query = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
  });

  return {
    ...query,
    currentProduct: query.data || {},
  };
};

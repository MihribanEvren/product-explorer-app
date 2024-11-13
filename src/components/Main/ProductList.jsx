import { useProducts } from '../../hooks/ProductHooks/useProducts';
import { Grid2 } from '@mui/material';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import Pagination from './Pagination';
import ItemCount from './ItemCount';

const ProductList = () => {
  const { isLoading, isError, error, currentProducts } = useProducts();

  if (isLoading) {
    return (
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12, lg: 16, xl: 20 }}
      >
        {Array.from(new Array(5)).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </Grid2>
    );
  }

  if (isError) {
    return (
      <div className="p-4 text-red-500">
        Error loading products: {error.message}
      </div>
    );
  }

  if (!currentProducts || currentProducts.length === 0) {
    return <div className="p-4 text-center">No products found</div>;
  }

  return (
    <>
      <ItemCount />
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12, lg: 16, xl: 20 }}
      >
        {currentProducts.map((product) => (
          <Grid2 key={product.id} size={{ xs: 2, sm: 4, md: 4 }}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
      <div className="flex justify-center mt-4">
        <Pagination />
      </div>
    </>
  );
};

export default ProductList;

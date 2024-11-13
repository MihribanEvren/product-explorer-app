import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/ProductHooks/useProduct';
import ProductSkeleton from '../Main/ProductSkeleton';
import { Grid2 } from '@mui/material';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError, error } = useProduct(id);

  if (isLoading)
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

  if (isError)
    return (
      <div className="p-4 text-red-500">
        Error loading product: {error.message}
      </div>
    );

  if (!product) {
    return <div className="p-4 text-center">No product found</div>;
  }

  return (
    <div>
      {product ? (
        <>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductDetail;

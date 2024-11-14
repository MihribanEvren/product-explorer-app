import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/productHooks/useProduct';
import ProductSkeleton from '../main/ProductSkeleton';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Rating,
  Typography,
} from '@mui/material';

function ProductDetail() {
  const { id } = useParams();
  const { currentProduct, isLoading, isError, error } = useProduct(id);

  if (isLoading) {
    return (
      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8 }}>
        {Array.from(new Array(2)).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </Grid2>
    );
  }

  if (isError)
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="p-4 text-red-500">
          Error loading product: {error.message}
        </div>
      </div>
    );

  if (!currentProduct) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="p-4 text-center">No product found</div>
      </div>
    );
  }

  return (
    <Box className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <Card className="flex flex-col items-center w-full max-w-4xl shadow-lg md:flex-row">
        <Box className="p-4 md:w-1/2">
          <CardMedia
            component="img"
            className="object-contain w-full h-full max-h-96"
            image={currentProduct.thumbnail}
            alt={currentProduct.title}
          />
        </Box>

        <Box className="md:w-1/2">
          <CardContent className="flex flex-col gap-4 p-6">
            <Typography variant="h5" component="h2" className="font-bold">
              {currentProduct.title}
            </Typography>

            <Typography variant="subtitle1" className="text-gray-600">
              {currentProduct.description}
            </Typography>

            <Box className="flex items-center gap-2">
              <Typography variant="body2" className="font-semibold">
                {currentProduct.rating.toFixed(1)}
              </Typography>
              <Rating value={currentProduct.rating} readOnly />
            </Box>

            {currentProduct.price && (
              <Typography variant="h6" className="font-bold text-purple-600">
                ${currentProduct.price.toFixed(2)}
              </Typography>
            )}
            <CardActions>
              <Button size="small" variant="outlined" color="secondary">
                Add to Cart
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default ProductDetail;

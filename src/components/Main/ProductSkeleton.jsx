import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  Grid2,
} from '@mui/material';

const ProductSkeleton = () => {
  return (
    <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
      <Card>
        <CardMedia>
          <Skeleton variant="rectangular" width="100%" height={280} />
        </CardMedia>
        <CardContent>
          <Typography variant="h6">
            <Skeleton width="60%" />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton width="80%" />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton width="40%" />
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default ProductSkeleton;

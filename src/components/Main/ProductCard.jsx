import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card className="h-[520px] flex flex-col justify-between pb-2">
      <CardActionArea>
        <Link to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            className="object-contain max-h-64"
            image={product.thumbnail}
            alt={product.title}
          />
          <CardContent className="flex flex-col items-center flex-grow gap-3">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="h-12"
            >
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              className="overflow-hidden text-gray-500 text-ellipsis line-clamp-2"
            >
              {product.description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <Box className="flex items-center justify-center gap-1">
        <Typography component="legend" variant="body2">
          {product.rating.toFixed(1)}
        </Typography>
        <Rating name="simple-controlled" value={product.rating} />
      </Box>
      <Typography
        variant="h6"
        className="flex items-center justify-center font-bold text-purple-600"
      >
        ${product.price.toFixed(2)}
      </Typography>
      <CardActions className="flex items-center justify-center">
        <Button size="small" variant="outlined" color="secondary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

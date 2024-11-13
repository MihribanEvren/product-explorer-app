import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card className="h-[500px] flex flex-col justify-between">
      <CardMedia
        component="img"
        className="max-h-[250px] object-contain"
        image={product.thumbnail}
        title={product.title}
      />
      <CardContent className="flex flex-col items-center gap-3">
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          className="overflow-hidden text-gray-500 text-ellipsis line-clamp-3"
        >
          {product.description}
        </Typography>
        <div className="flex items-center justify-center gap-1">
          <Typography component="legend" variant="body2">
            {product.rating}
          </Typography>
          <Rating name="simple-controlled" value={product.rating} />
        </div>
      </CardContent>
      <CardActions className="flex items-center justify-center">
        <Button size="small" variant="outlined" color="secondary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

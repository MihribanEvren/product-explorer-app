function ProductCard({ product }) {
  return (
    <div key={product.id} className="p-4 border rounded-lg shadow-sm">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="object-cover w-full h-48 mb-4 rounded"
      />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="font-semibold text-green-600">${product.price}</p>
      <p className="mt-2 text-sm text-gray-500">{product.description}</p>
      <div className="mt-2 text-sm text-gray-600">
        Brand: {product.brand} | Category: {product.category}
      </div>
      <div className="mt-2 text-sm">
        Rating: {product.rating} ⭐ | Stock: {product.stock}
      </div>
    </div>
  );
}

export default ProductCard;

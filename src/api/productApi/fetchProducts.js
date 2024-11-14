export const fetchProducts = async ({
  itemsPerPage,
  currentPage,
  searchQuery,
}) => {
  try {
    const skip = (currentPage - 1) * itemsPerPage;
    const url = searchQuery
      ? `https://dummyjson.com/products/search?q=${searchQuery}&limit=${itemsPerPage}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const fetchProducts = async ({ itemsPerPage, currentPage }) => {
  try {
    const skip = (currentPage - 1) * itemsPerPage;
    const response = await fetch(
      `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`
    );

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

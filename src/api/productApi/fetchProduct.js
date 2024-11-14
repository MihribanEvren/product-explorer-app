export const fetchProductById = async (id) => {
  try {
    const url = `https://dummyjson.com/products/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

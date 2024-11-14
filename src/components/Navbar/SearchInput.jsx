import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Box,
  CircularProgress,
  IconButton,
  InputBase,
  Paper,
} from '@mui/material';
import { useProducts } from '../../hooks/ProductHooks/useProducts';
import { Link } from 'react-router-dom';

function SearchInput({ placeholder }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { currentProducts, isLoading } = useProducts(searchQuery);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <Box className="relative w-full max-w-lg">
      <Box className="relative flex items-center">
        <InputBase
          value={searchQuery}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder || 'Search'}
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          endAdornment={
            <>
              {isLoading && (
                <CircularProgress
                  size={20}
                  sx={{
                    color: 'primary.main',
                    position: 'absolute',
                    right: '40px',
                  }}
                />
              )}
              {searchQuery ? (
                <IconButton
                  onClick={clearSearch}
                  sx={{
                    position: 'absolute',
                    right: '2px',
                    '&:hover': { background: 'transparent' },
                  }}
                >
                  <ClearIcon className="text-gray-500" />
                </IconButton>
              ) : (
                <SearchIcon
                  className="text-gray-500"
                  sx={{
                    position: 'absolute',
                    right: '12px',
                  }}
                />
              )}
            </>
          }
        />
      </Box>

      {searchQuery && isFocused && !isLoading && (
        <Paper
          elevation={2}
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            mt: 1,
            maxHeight: '300px',
            overflow: 'auto',
            zIndex: 1000,
          }}
        >
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Box
                  key={product.id}
                  sx={{
                    p: 1.5,
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'grey.100' },
                    borderBottom: '1px solid',
                    borderColor: 'grey.200',
                    '&:last-child': {
                      borderBottom: 'none',
                    },
                  }}
                >
                  {product.title}
                </Box>
              </Link>
            ))
          ) : (
            <Box sx={{ p: 2, textAlign: 'center', color: 'grey.600' }}>
              No results found
            </Box>
          )}
        </Paper>
      )}
    </Box>
  );
}

export default SearchInput;

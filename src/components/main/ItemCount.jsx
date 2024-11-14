import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useFiltersStore } from '../../state/productStore/filtersStore';

function ItemCount() {
  const { itemsPerPage, setItemsPerPage } = useFiltersStore();

  const handleChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  return (
    <Box className="flex justify-center my-4">
      <FormControl variant="outlined" size="small" className="w-24">
        <InputLabel>Items per page</InputLabel>
        <Select
          value={itemsPerPage}
          onChange={handleChange}
          label="Items per page"
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={60}>60</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ItemCount;

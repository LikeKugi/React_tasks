import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterConstants } from '@/store/constants/FilterConstants';
import { resetToDefault } from '@/store/actions/reset.action';
import { RootState } from '@/store/store';

export const filtersSlice = createSlice({
  name: '@@filters',
  initialState: FilterConstants.ALL,
  reducers: {
    setFilter: (_, action: PayloadAction<FilterConstants>) => {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, () => {
        return FilterConstants.ALL;
      })
  },
})

export const FiltersReducer = filtersSlice.reducer;
export const {setFilter} = filtersSlice.actions;
export const selectActiveFilter = (state: RootState) => state.filters;

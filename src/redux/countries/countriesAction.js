import { createAsyncThunk } from '@reduxjs/toolkit';

export const showAllCountries = createAsyncThunk(
  'countries/showAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const searchByCode = createAsyncThunk(
  'countries/searchByCode',
  async (code, thunkAPI) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${code}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const searchByRegion = createAsyncThunk(
  'countries/searchByRegion',
  async (region, thunkAPI) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

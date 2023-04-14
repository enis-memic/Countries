import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const showAllCountries = createAsyncThunk(
  'countries/showAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const searchByCode = createAsyncThunk(
  'countrie/searchByCode',
  async (code, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${code}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const searchByRegion = createAsyncThunk(
  'countries,searchByRegion',
  async (region, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

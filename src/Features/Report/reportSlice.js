import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key = 'fe35aab220ffb69b8fb5eef45d5615d1';
const url = 'https://api.openweathermap.org/data/2.5/weather';


export const fetchWeather = createAsyncThunk('weather/fetchData', async (city) => {
  const cities =city ? [city] :  ['Rome', 'london', 'islamabad', 'Washington, D.C', 'Ottawa', 'Tokyo', 'Edinburgh', 'Beijing', 'Stockholm'];
  const requests = cities.map((city) => {
    const params = {
      q: city,
      appid: key,
      units: 'metric',
    };
    return axios.get(url, { params });
  });
  try {
    const responses = await Promise.all(requests);
    const weatherData = responses.map((response) => response.data);
    return weatherData;
  } catch {
    throw new Error('City not found. Please enter the correct city name.');
  }
});



const reportSlice = createSlice({
  name: "weather",
  initialState: {
    report: [],
    loading: false, 
    cloud:{},
  },
  reducers: {
    weather: (state, action) => {
      state.report.push(...action.payload);
    },
    addData: (state,action) => {
      state.cloud=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.report=[...action.payload];
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
        
      });
  },
});

export const { weather,addData } = reportSlice.actions;
export default reportSlice.reducer;

import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit';

//show all data
export const showAllCountries = createAsyncThunk('countries/fetchCountries', async (_,thunkAPI) => {

    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response.data)

        // return değeri payload olarak göndeerilir, dispatchle başka dosyadan alınır
        return response.data;
    }
    catch(err){
        const message = (err.response && err.response.data) || err.message;

        //return ile rejetctWithValue error mesajı  payload olarak gönderir. 
        return thunkAPI.rejectWithValue(message);
      
    }
   
  });


  //show country by cioc code

export const searchByCode = createAsyncThunk("countries/searchByCode",async(code,thunkAPI) => {
    try{
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);

        return response.data;
  
    }
    catch(err){
        const message = (err.response && err.response.data) || err.message;

        //rejetctWithValue error mesajı gönderini payload olarak gönderir.Dispatchle alabilmek için.
        return thunkAPI.rejectWithValue(message);
      
    }
})

// search by region

export const searchByRegion = createAsyncThunk("countries/searchByRegion", async(region,thunkAPI) => {
    try{
        const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
         console.log(response.data)
        return response.data;

    }
    catch(err) {
        const message = (err.response && err.response.data) || err.message;

        //rejetctWithValue error mesajı gönderini payload olarak gönderir.Dispatchle alabilmek için.
        
        return thunkAPI.rejectWithValue(message);
        
    }
})
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '4260414fa5f14cbeb03f02cbf842afb9';

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async ({ category, page }) => {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'in',
                category,
                page,
                apiKey: API_KEY,
            },
        });
        return response.data.articles;
    }
);

export const searchArticles = createAsyncThunk(
    'articles/searchArticles',
    async ({ query, page }) => {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                page,
                apiKey: API_KEY,
            },
        });
        return response.data.articles;
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        page: 1,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(searchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(searchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setPage } = articlesSlice.actions;

export default articlesSlice.reducer;

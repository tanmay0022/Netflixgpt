import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name:'movie',
    initialState : {
        nowPlayingMovies : null,
        topRatedMovies : null,
        trendingMovies : null,
        recommendedMovies : null,
        upcomingMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addTrendingMovies : (state,action) => {
            state.trendingMovies = action.payload;
        },
        addRecommendedMovies : (state,action) => {
            state.recommendedMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTopRatedMovies,addTrendingMovies,addRecommendedMovies,addUpcomingMovies} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
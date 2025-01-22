import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name:'movie',
    initialState : {
        nowPlayingMovies : null,
        topRatedMovies : null,
        trendingMovies : null,
        recommendedMovies : null,
        upcomingMovies : null,
        trailerVideo : null
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
        },
        addTrailer : (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTopRatedMovies,addTrendingMovies,addRecommendedMovies,addUpcomingMovies,addTrailer} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
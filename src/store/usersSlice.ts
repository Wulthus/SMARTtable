import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/UserType";
import { RootState } from "./store";
import { FilterType } from "../types/FilterType";

interface InitialStateType {
    data: UserType[],
    query: string,
    filter: FilterType,
}

const initialState: InitialStateType = {
    data: [],
    query: '',
    filter: 'none',
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setData: (state, action: PayloadAction<UserType[]>)=>{
            state.data = action.payload;
        },
        setQuery: (state, action: PayloadAction<string>)=>{
            state.query = action.payload;
        },
        setFilter: (state, action: PayloadAction<FilterType>)=>{
            state.filter = action.payload;
        },
    },
})

export const { setData, setQuery, setFilter } = usersSlice.actions;

export const selectData = (state: RootState) => state.users.data;
export const selectQuery = (state: RootState) => state.users.query;
export const selectFiltered = (state: RootState) => {
    if (state.users.filter === 'none'){
        return state.users.data
    } else {
        const filter = state.users.filter as FilterType;
        return state.users.data.filter(entry => entry[filter].includes(state.users.query))
    }

}

export default usersSlice.reducer;


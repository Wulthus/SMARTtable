import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter, setQuery } from "../../store/usersSlice";
import { isValidFilter } from "../../utils/isValidFIlter";
import { FilterType } from "../../types/FilterTypes";

import SearchBarButton from "./search-bar-button/SearchBarButton";
import SearchBarInput from "./search-bar-input/SearchBarInput";

export default function SearchBar(){


    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChangeQuery = function(e: React.ChangeEvent<HTMLInputElement>): void{
        if (filter === "none") dispatch(setFilter("name"));
        dispatch(setQuery(e.target.value));
    }

    const handleChangeFilter = function(e: React.MouseEvent<HTMLButtonElement>): void{

        const value = e.currentTarget.value;
        
        if (isValidFilter(value)) {
            dispatch(setFilter(value as FilterType));
        } else {
            throw new Error(`handleChangeFilter function did not recognise the following value as correct filter type: ${value}`)
        }
    }

    return (
        <div className="search-bar">
            <div className="search-bar__input-box">
                <SearchBarInput maxLength={255} placeholder="Search..." handleChange={(e)=>handleChangeQuery(e)}/>
            </div>
            <div className="search-bar__buttons-box">
                <SearchBarButton value="name" handleClick={(e)=>handleChangeFilter(e)}>Name</SearchBarButton>
                <SearchBarButton value="username" handleClick={(e)=>handleChangeFilter(e)}>Username</SearchBarButton>
                <SearchBarButton value="email" handleClick={(e)=>handleChangeFilter(e)}>E-mail</SearchBarButton>
                <SearchBarButton value="phone" handleClick={(e)=>handleChangeFilter(e)}>Phone</SearchBarButton>
                <SearchBarButton value="none" handleClick={(e)=>handleChangeFilter(e)}>Clear Filters</SearchBarButton>
            </div>
        </div>
    )
}


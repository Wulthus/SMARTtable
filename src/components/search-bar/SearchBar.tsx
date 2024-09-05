import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setFilter, setQuery } from "../../store/usersSlice";
import { isValidFilter } from "../../utils/isValidFIlter";
import { FilterType } from "../../types/FilterTypes";

export default function SearchBar(){

    const query = useSelector(selectQuery);
    const dispatch = useDispatch();

    const handleChangeQuery = function(e: React.ChangeEvent<HTMLInputElement>): void{
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
        <div>
            <input value={query} maxLength={250} onChange={(e)=>handleChangeQuery(e)}/>
            <button value="name" onClick={(e)=>handleChangeFilter(e)}>Name</button>
            <button value="username" onClick={(e)=>handleChangeFilter(e)} >Username</button>
            <button value="email" onClick={(e)=>handleChangeFilter(e)}>E-mail</button>
            <button value="phone" onClick={(e)=>handleChangeFilter(e)}>Phone</button>
            <button value="none" onClick={(e)=>handleChangeFilter(e)}>Clear filters</button>
        </div>
    )
}


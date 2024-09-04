import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setFilter, setQuery } from "../../store/usersSlice";

export default function SearchBar(){

    const query = useSelector(selectQuery);
    const dispatch = useDispatch();

    const handleChangeQuery = function(e: React.ChangeEvent<HTMLInputElement>): void{
        dispatch(setQuery(e.target.value));
    }

    const handleChangeFilter = function(e: React.MouseEvent<HTMLButtonElement>): void{

        //-----------------------------------------------------------------------------------THIS IS UGLY AS HELL, FIX IT

        const value = e.currentTarget.value;
        switch (value) {
            case "name":
                dispatch(setFilter(value));
                break;
            case "username":
                dispatch(setFilter(value));
                break;
            case "email":
                dispatch(setFilter(value));
                break;
            case "phone":
                dispatch(setFilter(value));
                break;
            case "none":
                dispatch(setFilter(value));
                break;
            default:
                throw new Error(`SearchBar switch statement did not recognise the following value: ${value}`)
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
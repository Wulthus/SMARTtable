import { useSelector } from "react-redux";
import { selectQuery } from "../../../store/usersSlice";
import { IoSearch } from "react-icons/io5";

interface SearchBarInputProps {
    maxLength: number,
    placeholder?: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
}

export default function SearchBarInput({ maxLength, placeholder, handleChange }: SearchBarInputProps){

    const query = useSelector(selectQuery);

    return (
        <div className="search-bar__field">
            <input value={query} maxLength={maxLength} placeholder={placeholder} onChange={handleChange} className="search-bar__input"/>
            <IoSearch />
        </div>
    )
}
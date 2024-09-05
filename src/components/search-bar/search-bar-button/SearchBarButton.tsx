import { useSelector } from "react-redux";
import { FilterType } from "../../../types/FilterTypes";
import { selectFilter } from "../../../store/usersSlice";



interface SearchBarButtonProps {
    children: string,
    value: FilterType,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function SearchBarButton({ children, value, handleClick }: SearchBarButtonProps){

    const filter = useSelector(selectFilter);

    return (
        <button 
            value={value} 
            onClick={handleClick} 
            className={`search-bar__button ${filter === value && 'search-bar__button--current'}`}
        >
            {children}
        </button>
    )
}
import styles from './SearchBar.module.scss';
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import {useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce";

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    return <div className={styles.main}>
        <input
            type="text"
            placeholder="Search.."
            className={styles.input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon className={styles.icon}/>
    </div>;
};
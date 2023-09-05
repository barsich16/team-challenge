import styles from './SearchBar.module.scss';
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import {useRef, useState} from "react";
import {SearchInput} from "./SearchInput/SearchInput";
import {SearchResultsList} from "./SearchResultsList/SearchResultsList";
import {useOutsideClick} from "../../../hooks/useOutsideClick";

export const SearchBar = () => {
    const [results, setResults] = useState([]);
    const [isResultsActive, setIsResultsActive] = useState(false);
    const ref = useRef(null);
    const isResultsOpen = isResultsActive && results && results.length > 0;

    useOutsideClick(() => setIsResultsActive(false), ref)

    return <div className={styles.main} ref={ref}>
        <SearchInput setResults={setResults} openResults={() => setIsResultsActive(true)}/>
        <SearchIcon className={styles.icon}/>
        {isResultsOpen && <SearchResultsList results={results}/>}
    </div>;
};
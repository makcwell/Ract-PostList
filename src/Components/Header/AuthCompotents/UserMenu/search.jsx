import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
const SearchInput = () => {

    return (<>
        <SearchIcon />
        <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }} />
    </>
    );

}


export default SearchInput;
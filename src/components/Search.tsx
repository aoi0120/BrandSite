import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    return (
        <div className="m-0 flex justify-center">
            <div className="m-0 p-3 pr-4 border bg-slate-500 rounded-3xl border-none">
                <SearchIcon />
                <input className="bg-slate-500 outline-none text-left" type="search" placeholder='検索' />
            </div>
        </div>
    )
}

import {  useEffect, useState } from 'react';
import DB from '../../shared/DB.json';
import PostList from './PostList';


const filterTitles = (searchText, listOfTitles) => {
            if(!searchText) {
                return listOfTitles;
            }
            return listOfTitles.filter(({ title }) => 
                title.toLowerCase().includes(searchText.toLowerCase())
        )}

    const data = DB;

function SearchPost() {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [postList, setTitleList] = useState(data);
    
    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredTitles = filterTitles(searchTerm, data);
            setTitleList(filteredTitles);
        }, 500);

        return () => clearTimeout(Debounce);
    }, [searchTerm]);


    return (
        <div>
            <div className="form">
                <form className="search_form">
                    <input 
                        autoFocus
                        autoComplete='off'
                        type="text"
                        placeholder="Find post"
                        className="search_input"
                        onChange = {(event) => setSearchTerm(event.target.value)} 
                    />

                    <PostList postList = {postList} />
                </form>
            </div>
        </div>
    )
}

export default SearchPost;





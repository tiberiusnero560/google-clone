import React from 'react'
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import response from './response';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    // LIVE API CALL
    // const { data } = useGoogleSearch(term);             // Here we are using the data object we returned in the useGoogleSearch custom hook with the term we entered and stored in data layer  

    // OFFLINE CALL using json response from first call
    const data = Response;

    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <h1>{term}</h1>
            </div>

            <div className='searchPage__results'>

            </div>
        </div>
    )
}

export default SearchPage
    



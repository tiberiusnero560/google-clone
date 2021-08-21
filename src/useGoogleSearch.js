
import {useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "e1d05a8fe2e08f2ab";


// Custom hook
// We pass in term, and when the term changes, it fires off the useEffect
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
 
    useEffect(() => {
        // We want to use an asynchronise fetch inside the useEffect
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())       // Get the Json from the response
            .then(result => {
                setData(result)
            })
        }
        fetchData();
    }, [term]) // term is the data layer variable

    return { data }   // Here we return the data, and then we use it or display it on the SearchPage
    // This returns an object, This useGoogleSearch is a custom hook. useEffect is a hook, and we just made our own.
};

// As a note. We are using fetch here, but once I am more familiar with it, using Axios can be a powerful upgrade


export default useGoogleSearch;

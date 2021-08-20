
import {useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "e1d05a8fe2e08f2ab";

// Custom hook
// We pass in term, and when the term changes, it fires off the useEffect
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
 
    useEffect(() => {

    }, [term])

};

export default useGoogleSearch;

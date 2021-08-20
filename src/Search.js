import React, {useState} from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
// This provides you with the browsers history
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';


function Search({hideButtons = false}) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log("you hit the button", input)

        dispatch
        ({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('./search')
    }
    return (
        <form className="search">
            <div className='search__input'>
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? 
                (
                    <div className="search__buttons">
                        <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">Im feeling Lucky</Button>
                    </div>
                )
                : 
                (        // This is a ternarary operator if hideButtons prop is present, do one, if not do the other
                    <div className="search__buttons">
                        <Button className="search__buttonsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                        <Button className="search__buttonsHidden" variant="outlined">I'm feeling Lucky</Button>
                    </div>
                
            
                )
            }
        
        </form>
    );

}

export default Search;

import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
import SearchResults from "./components/SearchResults";
import axios from "axios";

export default function Search(){
    const[isAtTop,setIsAtTop]= useState(false);
    const[results, setResults]= useState([]);
    const[data,setData] = useState([]);
    useEffect(() =>{
        //forma con promises
        /*const getUsers = async() => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data =>setData(data))
        }
        getUsers().catch(null);*/
        
        //forma sin promises 
        /*const getUsers = async() =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setData(data);
        };
        getUsers().catch(null);*/

        //forma con axios

        const getUsers = async () => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(response.data);
            }catch(err) {
                console.log(err)
            }   
        }
        getUsers();
    },[]);

    
    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    }
    const handleSearchClick = (searchText) => {
        if(data?.length){
            const searchTextMinus= searchText.toLowerCase();
            
            const filteredData= data.filter((value) =>
            (value.name.toLowerCase().includes(searchTextMinus)||
            value.email.toLowerCase().includes(searchTextMinus)||
            value.username.toLowerCase().includes(searchTextMinus)||
            value.phone.toLowerCase().includes(searchTextMinus)
            ));
            setResults(filteredData);
            
        }
        setIsAtTop(true);
    }
    
    return(
        <div className={`search ${isAtTop?"search--top":"search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isSearching={isAtTop}/>
            <SearchResults results={results} isSearching={isAtTop}/>
        </div>
    );
}
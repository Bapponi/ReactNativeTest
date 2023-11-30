import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'a6d1966dc8mshaba970b89641176p1826b6jsn9ed7a139d75f',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            setData(response.data.data);
            setIsLoading(false);
        } catch(error){
            setError(error);
            alert('There is an error');
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetch();
    }

    return { data, isLoading, error, refetch}
}

export default useFetch;
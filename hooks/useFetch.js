import {useEffect, useState} from "react";
import axios from 'axios';
import {RAPID_API_KEY} from "@env";

const rapidApiKey = RAPID_API_KEY;
export default function useFetch (endpoint, query)  {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };
    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);
        }catch (err){
            setError(err);
            alert("Something went wrong");
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
}
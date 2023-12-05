
import { useEffect } from 'react';
import loadingGif from '../../assets/gif/loading.gif';
import { Spinner } from '../../component/Spinner/Spinner';
import {useParams, useNavigate} from 'react-router-dom';

export const LoadingPage = () => {
    const {type, questionType, lessonNumber} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate(`/lesson/${type}/${questionType}/${lessonNumber}`);
        }, 3000);
    
        // Clear the timeout to prevent potential memory leaks
        return () => clearTimeout(timeout);
    }, [])

    return (
        <div>
            <Spinner/>
            <img src={loadingGif}/>
        </div>
    )
}
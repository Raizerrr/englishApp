import { useEffect, useState } from "react"

export const useLoadingAndTiming = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
    
        // Clear the timeout to prevent potential memory leaks
        return () => clearTimeout(timeout);
    }, [])

    return loading;
}
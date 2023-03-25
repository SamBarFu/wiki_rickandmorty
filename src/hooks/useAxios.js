import { useState, useEffect, useCallback } from "react";

export default function useAxios(fetcher) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});
    const [hasMore, setHasMore] = useState(false);

    const fetchData = useCallback(async ({
        fetcher, filter, url, append = false
    }) => {
        setError(false);
        const response = await fetcher({ ...filter, url });

        if (response.error) {
            setError(true);
            setData(response);
        } else {
            if (append) {
                setData(currentData => ({
                    ...currentData,
                    info: {
                        ...currentData.info,
                        next: response.info.next
                    },
                    results: [
                        ...currentData.results,
                        ...response.results
                    ]
                }));
                setHasMore(response.info.next ? true : false);
            } else {
                setData(response);
                setHasMore(response.info.next ? true : false);
            }
        }

    }, []);

    const mutate = async (fetcher, url = null, options) => {
        const { filter, append = false } = options;

        await fetchData({
            fetcher,
            filter,
            url,
            append
        });
    }

    useEffect(() => {
        setLoading(true);
        fetchData({ fetcher });
        setLoading(false);
    }, []);

    return {
        data,
        loading,
        error,
        hasMore,
        mutate
    }

}
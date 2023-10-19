'use client';

import {useEffect} from "react";

type Props = {
    error: Error
    reset: () => void
}

export default function ErrorPage({error, reset}: Props) {
    useEffect(() => {
        console.error(error.message)
    }, [])

    return (
        <div>
            <h1>404</h1>
            <button onClick={() => reset()}>Refresh</button>
        </div>
    );
}
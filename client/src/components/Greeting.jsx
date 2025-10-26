import { useEffect, useState } from 'react';

export function Greeting() {
    const [greeting, setGreeting] = useState(null);
    
    

    useEffect(() => {
        fetch('/api/greeting')
            .then((res) => res.json())
            .then((data) => setGreeting(data.greeting));
    }, [setGreeting]);

    if (!greeting) return <h1 className="text-center mb-5">Loading...</h1>;
    return <h1 className="text-center mb-5">{greeting}</h1>;
}

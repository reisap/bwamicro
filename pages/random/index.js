import Head from 'next/head';
import Link from 'next/link';

function Random({data}) {
    return (
        <>
            <Head>
                <title>Micro | Random</title>    
            </Head>   

            <main className="container mx-auto mt-12">
                <h1 className="text-3xl">Fetching random words</h1>
                <ul>
                    {data.map((todo) => {
                      return (
                        <li key={todo.id} className="p-4 border border-indigo-700">
                            {todo?.title ?? "-" }{" "}
                            <Link href="/random/[id]" as={`/random/${todo.id}`}>
                                <a>Launch</a>
                            </Link> 
                        </li>
                        );
                    })}
                </ul>  
            </main>
        </>
    );
}


Random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json)
        return { data }
    } catch (error) {
        
    }
}

export default Random
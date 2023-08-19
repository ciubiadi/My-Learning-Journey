// import { useEffect, useState } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
    //   const response = await fetch('http://localhost:8080/events');

    //   if (!response.ok) {
    //     setError('Fetching events failed.');
    //   } else {
    //     const resData = await response.json();
    //     setFetchedEvents(resData.events);
    //   }
//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);

    // #2
    // const events = useLoaderData();

    // #2
    // const data = useLoaderData();

    const {events} = useLoaderData();

    // if(data.isError){
    //     return <p>{data.message}</p>
    // }

    // const events = data.events;

    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                { (loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    )

//   return (
//     <>
    {/* Approach #1 */}
      {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      {/* {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}

      {/* Appraoch #2 */}
    //   <EventsList events={events} />

      {/* Approach #3 */}
      {/* <EventsList /> */}
//     </>
//   );
}

export default EventsPage;

async function loadEvents () {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw json(
            {message: 'Could not fetch events.'}, 
            {
                status: 500,
            }
        );
    } else {
        // return response;
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return defer({
        events: loadEvents()
    })
}

// export async function loader() {
//     const response = await fetch('http://localhost:8080/events');

//     if (!response.ok) {
//       console.log('Error!')
    //   return {
    //     isError: true,
    //     message: 'Could not fetch events. '
    //   }
        
        // throw response #1 approach
        // throw new Response(JSON.stringify({
        //     message: 'Could not fetch events.'
        // }), {
        //     status: 500,
        // }); 

        // thorw response #2 approach
    //     throw json(
    //         {message: 'Could not fetch events.'}, 
    //         {
    //             status: 500,
    //         }
    //     );
    // } else {
    //   const resData = await response.json();
        //   console.log('resData');
        //   console.log(resData);
        //   return resData.events;
        
        // Return a Response with the
        // const res= new Response('any data', {status: 201});
        // return res; 

//         return response;
//     }
// }
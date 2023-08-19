import { useParams, useRouteLoaderData, useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
    const {eventId} = useParams();
    // const params = useParams();
    // const allparams = useParams();

    // const showParams = (e) => {
    //     e.preventDefault();
    //     console.log(allparams);
    // }

    // const data = useLoaderData()
    /* useRouteLoaderData works almost as useLoaderData but it takes a route ID as an argument. */
    const data = useRouteLoaderData('event-detail')

    return (
        <>
            <EventItem event={data.event} />
            {/* <h1>EditEventPage</h1>
            <p>Event ID: {eventId}</p> */}

            {/* <p>Event ID: {params.eventId}</p> */}
            {/* <button onClick={showParams}>Show all params</button> */}
        </>
    );
}

export default EventDetailPage;


/* React Router which calles this loader function for me, actually passes an object to this loader function when 
executing it for me, and that object contains 2 improtant pieces of data :
1. A request property which contains a request object
2. A params property which contains an object with all my route parameters.

The request object could be used to access the URL to extract query parameters or anything like that
The params object I can access all the route parameter values as I could do with the help of useParams.
*/
export async function loader({request, params}) {
    const id = params.eventId;
    const res = await fetch('http://localhost:8080/events/' + id);
    if(!res.ok){
        throw json({message: 'Could not fetch details for selected event.'}, {
            status: 500
        })
    } else {
        return res;
    }
}
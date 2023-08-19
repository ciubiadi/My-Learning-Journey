import { useParams, useRouteLoaderData, useLoaderData, json, redirect, defer, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
    // const {eventId} = useParams();
    // const params = useParams();
    // const allparams = useParams();

    // const showParams = (e) => {
    //     e.preventDefault();
    //     console.log(allparams);
    // }

    // const data = useLoaderData()
    // const data = useRouteLoaderData('event-detail')
    const {event, events} = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
            {/* <EventItem event={data.event} /> */}
            {/* <EventsList events={events}/> */}
            {/* <h1>EditEventPage</h1>
            <p>Event ID: {eventId}</p> */}

            {/* <p>Event ID: {params.eventId}</p> */}
            {/* <button onClick={showParams}>Show all params</button> */}
        </>
    );
}

export default EventDetailPage;

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);
  
    if (!response.ok) {
      throw json(
        { message: 'Could not fetch details for selected event.' },
        {
          status: 500,
        }
      );
    } else {
      const resData = await response.json();
      return resData.event;
    }
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
  
    if (!response.ok) {
      // return { isError: true, message: 'Could not fetch events.' };
      // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      //   status: 500,
      // });
      throw json(
        { message: 'Could not fetch events.' },
        {
          status: 500,
        }
      );
    } else {
      const resData = await response.json();
      return resData.events;
    }
  }


/* React Router which calles this loader function for me, actually passes an object to this loader function when 
executing it for me, and that object contains 2 improtant pieces of data :
1. A request property which contains a request object
2. A params property which contains an object with all my route parameters.

The request object could be used to access the URL to extract query parameters or anything like that
The params object I can access all the route parameter values as I could do with the help of useParams.
*/
export async function loader({ request, params }) {
    const id = params.eventId;

    return defer({
      event: await loadEvent(id),
      events: loadEvents(),
    });
    // const res = await fetch('http://localhost:8080/events/' + id);
    // if(!res.ok){
    //     throw json({message: 'Could not fetch details for selected event.'}, {
    //         status: 500
    //     })
    // } else {
    //     return res;
    // }
}

// delete an event
export async function action({ params, request }) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
      method: request.method,
    });
  
    if (!response.ok) {
      throw json(
        { message: 'Could not delete event.' },
        {
          status: 500,
        }
      );
    }
    return redirect('/events');
  }
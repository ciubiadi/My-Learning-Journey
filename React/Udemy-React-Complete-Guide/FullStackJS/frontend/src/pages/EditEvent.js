import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEventPage() {
    // const data = useLoaderData();
    /* useRouteLoaderData works almost as useLoaderData but it takes a route ID as an argument. */
    const data = useRouteLoaderData('event-detail');

    return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;

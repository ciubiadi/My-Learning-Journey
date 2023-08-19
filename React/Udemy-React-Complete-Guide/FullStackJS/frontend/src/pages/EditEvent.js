import EventForm from '../components/EventForm';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const EditEventPage = () => {
    // const data = useLoaderData();
    /* useRouteLoaderData works almost as useLoaderData but it takes a route ID as an argument. */
    const data = useRouteLoaderData('event-detail');

    return (
        <>
            <EventForm method="patch" event={data.event}/>;
        </>
    );
}

export default EditEventPage;
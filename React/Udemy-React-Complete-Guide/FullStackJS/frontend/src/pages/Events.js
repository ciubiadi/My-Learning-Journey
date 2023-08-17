import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        name: 'Event 1',
    },
    {
        id: 'e2',
        name: 'Event 2'
    }
];

const EventsPage = () => {
    return (
        <>
            <ul>
                {DUMMY_EVENTS.map(event => 
                    <li key={event.id}>
                        {/* <Link to={`/events/${event.id}`}>{event.name}</Link> */}
                        <Link to={event.id}>{event.name}</Link>
                    </li>
                )}
            </ul>
        </>
    );
}

export default EventsPage;
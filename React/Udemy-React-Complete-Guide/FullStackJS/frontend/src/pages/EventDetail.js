import { useParams } from "react-router-dom";

const EventDetailPage = () => {
    const {eventId} = useParams();
    // const params = useParams();
    // const allparams = useParams();

    // const showParams = (e) => {
    //     e.preventDefault();
    //     console.log(allparams);
    // }

    return (
        <>
            <h1>EditEventPage</h1>
            <p>Event ID: {eventId}</p>
            {/* <p>Event ID: {params.eventId}</p> */}
            {/* <button onClick={showParams}>Show all params</button> */}
        </>
    );
}

export default EventDetailPage;
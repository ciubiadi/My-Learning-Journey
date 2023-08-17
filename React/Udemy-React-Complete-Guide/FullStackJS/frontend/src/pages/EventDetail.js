import { useParams } from "react-router-dom";

const EventDetailPage = () => {
    const {eventId} = useParams();
    const allparams = useParams();

    // const showParams = (e) => {
    //     e.preventDefault();
    //     console.log(allparams);
    // }

    return (
        <>
            <h1>EditEventPage</h1>
            <p>{eventId}</p>
            {/* <button onClick={showParams}>Show all params</button> */}
        </>
    );
}

export default EventDetailPage;
import { json, redirect } from 'react-router-dom' 
import EventForm from "../components/EventForm";

const NewEventPage = () => {
    // aooriach #1
    // const submitHandler = (event) => {
    //     event.preventDefault();
        /* extract data from the form with the help of two-way-binding or refs and manually sen HTTP request here,
         manage some loading and error state and in the end navigate from this page once the user finished. 
         ( navigate away with useNavigate hook ) */
    // }
    return (
        <EventForm method="post"/>
    );
}

export default NewEventPage;

// approach #2 
/* just like using loaders, React Router allow me to use actions. Like the loader, it receives an object
that includes the request and params properties. */

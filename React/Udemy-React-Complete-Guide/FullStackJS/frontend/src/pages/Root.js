import { Outlet, useLocation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
// import EventsNavigation from '../components/EventsNavigation';

const Root = () => {
    const location = useLocation();

    return (
        <>
            <MainNavigation />
            {/* {location.pathname.includes('/events') && <EventsNavigation /> } */}
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;
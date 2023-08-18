import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
// import EventsNavigation from '../components/EventsNavigation';

const Root = () => {
    // #1
    // const location = useLocation();
    // #2
    // const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
         {/* #1 */}
            {/* {location.pathname.includes('/events') && <EventsNavigation /> } */}
            <main>
               {/* #2 */}
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default Root;
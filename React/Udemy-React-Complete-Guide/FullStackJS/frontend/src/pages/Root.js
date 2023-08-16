import { Outlet } from 'react-router';
import MainNavigation from '../components/MainNavigation';

const Root = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;
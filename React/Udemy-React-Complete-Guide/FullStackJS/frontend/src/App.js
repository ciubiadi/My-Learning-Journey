import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { loader as eventDetailLoader} from './pages/EventDetail';
import ErrorPage from './pages/Error';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // { path: '', element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { 
        path: 'events', 
        element: <EventsRoot />, 
        children: [
          { 
            index: true, 
            element: <EventsPage />, 
            loader: eventsLoader
          },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId', element: <EventDetailPage />, loader: eventDetailLoader },
          { path: ':eventId/edit', element: <EditEventPage /> },  
        ]
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;

/*
  loader proerty of the route wants a function as a value. That function will be executed by the React Router
  whenever the user will be about to visit that route (just before that route and the JSX gets rendered), the function 
  will be triggered 
*/

/* 
  I can use useLoaderData() in the element that's assigned to a route AND in all components that might 
  be used inside that element
*/
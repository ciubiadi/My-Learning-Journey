import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // { path: '', element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { 
        path: 'events', 
        element: <EventsRoot />, 
        children: [
          { index: true, element: <EventsPage />, loader: async () => {
              const response = await fetch('http://localhost:8080/events');

              if (!response.ok) {
                console.log('Error!')
              } else {
                const resData = await response.json();
                console.log('resData');
                console.log(resData);
                return resData.events;
              }
            } 
          },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId', element: <EventDetailPage /> },
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
import { Form, useNavigate, useNavigation, useActionData, json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm(props) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  // it does basically the same thing as useLoaderData - it gives me access to the data returned by my action
  const actionData = useActionData();

  const isSubmitting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..');
  }

  return (
    /* This Form tag will make sure that the borwser default of sending a request to the backend will be omitted
     but it will take that request that would have been sent and give it to my action. So the request will contain all
     the data that was submitted as part of the form. The request will not be sent automatically to the backend
     but instead to my action. */
    <Form method={props.method} className={classes.form}>
      {actionData && actionData.errors && <ul>
        {Object.values(actionData.errors).map(error => <li key={error}>{error}</li>)}
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input 
          id="title" 
          type="text" 
          name="title" 
          required 
          defaultValue={props.event ? props.event.title : ''} 
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input 
          id="image" 
          type="url" 
          name="image" 
          required 
          defaultValue={props.event ? props.event.image : ''}
          />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input 
          id="date" 
          type="date" 
          name="date" 
          required 
          defaultValue={props.event ? props.event.date : ''}
          />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea 
          id="description" 
          name="description" 
          rows="5" 
          required 
          defaultValue={props.event ? props.event.description : ''}
          />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request, params}) {
  const method = request.method;
  const data = await request.formData();
  const eventData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description')
  };

  // for creating a new event
  let url = 'http://localhost:8080/events';

  if(method === 'PATCH'){
    const eventId = params.eventId;
    url = 'http://localhost:8080/events/' + eventId;
  }

  const response = await fetch(url, {
      method: method,
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(eventData)
  });

  // 422 is the validation status code I am setting in backend
  if(response.status === 422){
      return response;
  }

  if(!response.ok){
      throw json({ message: 'Could not save event.' }, { status: 500 })
  }

  return redirect('/events');
}
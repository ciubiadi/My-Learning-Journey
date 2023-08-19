import { useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm(props) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <form className={classes.form}>
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
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;

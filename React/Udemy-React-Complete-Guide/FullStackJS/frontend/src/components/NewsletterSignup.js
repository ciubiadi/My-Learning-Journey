import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;

    /* fetcher.Form will actually still trigger an action but it will not initialize a route transition */
    /* Fetcher should be used whenever I want to trigger an action or also a loader with help of the load
    function, without actually navigating to the page to which the loader/action belongs  */
    /* so basically with fetcher I don't transition/move to a different route */
    /* In other words, I am supposed to use fetcher if I want to interact with some action/loader without 
    transitioning, so if I want to send my request without triggering any route changes. */
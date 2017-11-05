import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = () => {
  return (
    <div  className="ErrorMessage">
      <p>Oups! Something went wrong!</p>
      <p>You probably have a network problem or you might need to enable CORS and reload the browser</p>
    </div>
  )
}

export default ErrorMessage;

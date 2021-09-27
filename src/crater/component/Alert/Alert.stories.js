import React from 'react';
import Alert from './Alert';

export default {
  component: [Alert],
  title: 'Components/Alert Components',
};

export const AlertWithErrorKindProps = () => (
  <div style={{ width: '330px' }}>
    <Alert kind="error" message="ERROR: Invalid username or password" />
  </div>
);

export const AlertWithSuccessKindProps = () => (
  <div style={{ width: '330px' }}>
    <Alert kind="success" message="SUCCESS: A perfect time to check your email inbox, we’ve sent you a verification email." />
  </div>
);

export const AlertWithInfosKindProps = () => (
  <div style={{ width: '330px' }}>
    <Alert kind="info" message="INFO: Important but not too important." />
  </div>
);

export const AlertWithWarningKindProps = () => (
  <div style={{ width: '330px' }}>
    <Alert kind="warning" message="WARNING: You might need to change your name." />
  </div>
);

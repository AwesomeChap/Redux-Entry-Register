import React from 'react';

export const Err1 = props => (
  <div className="ui pointing red label">
    {props.name} required!
  </div>
);

export const Err2 = props => (
  <div className="ui pointing red label">
    {props.name} invalid!
  </div>
);
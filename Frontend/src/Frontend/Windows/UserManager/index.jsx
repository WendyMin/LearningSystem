import React from 'react';
import makeWindow from 'direct-core/makeWindow';
import { view as UserManager } from 'Connected/UserManager';
export default makeWindow( ( props ) => (
  <UserManager
    {...props}
    onCancel={() => {props.onCancel();props.closeWindow()}}
    onSuccess={() => {props.onSuccess();props.closeWindow()}}
  />
));

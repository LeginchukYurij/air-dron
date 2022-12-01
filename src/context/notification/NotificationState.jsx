import { useReducer } from 'react';
import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../types';
import { NotificationContext } from './notificationContext';
import { notificationReducer } from './notificationReducer';

export const NotificationState = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, {visible: false});

  const show = text => {
    dispatch({
      type: SHOW_NOTIFICATION,
      payload: {
        text
      }
    })
  };

  const hide = () => {
    dispatch({
      type: HIDE_NOTIFICATION
    })
  }

  return (
    <NotificationContext.Provider value={{show, hide, notification: state}}>
      {children}
    </NotificationContext.Provider>
  )
};

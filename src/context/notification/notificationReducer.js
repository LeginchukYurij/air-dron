import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../types';

const handlers = {
  [SHOW_NOTIFICATION]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_NOTIFICATION]: (state) => ({ visible: false }),
  DEFAULT: (state) => state,
};

export const notificationReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;

  return handle(state, action);
};

import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './schedule/scheduleSlice';

export default configureStore({
  reducer: { schedule: scheduleReducer },
});

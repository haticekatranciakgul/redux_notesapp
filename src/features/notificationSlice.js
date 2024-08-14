import { createSlice } from '@reduxjs/toolkit';

// localStorage'dan bildirimleri alıyoruz
const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || {
  count: 0,
  notificationsList: []
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: storedNotifications,
  reducers: {
    incrementNotification: (state) => {
      state.count += 1;
      localStorage.setItem('notifications', JSON.stringify(state)); // Değişiklikleri localStorage'a kaydediyoruz
    },
    addNotification: (state, action) => {
      state.notificationsList.push(action.payload);
      state.count = state.notificationsList.length;
      localStorage.setItem('notifications', JSON.stringify(state)); // Değişiklikleri localStorage'a kaydediyoruz
    },
    clearNotifications: (state) => {
      state.count = 0;
      state.notificationsList = [];
      localStorage.setItem('notifications', JSON.stringify(state)); // Temizlendikten sonra localStorage'a kaydediyoruz
    }
  }
});

export const { incrementNotification, addNotification, clearNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;

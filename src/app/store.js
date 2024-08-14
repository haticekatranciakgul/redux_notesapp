import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "../features/noteSlice";
import notificationsReducer from "../features/notificationSlice";


export const store = configureStore({
    reducer: {
        notes: notesReducer,
        notifications : notificationsReducer
    }
})
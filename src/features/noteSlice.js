import { createSlice} from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {storeInLocalStorage, fetchFromLocalStorage} from "../utils/helpers";

const initialState = {
    notes: fetchFromLocalStorage('notes'),
    error: null,
    count: 0
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNewNote(state, action){
            const {noteTitle, noteContent} = action.payload;
            let noteId = uuid();
            let newPost = {noteId, noteTitle, noteContent};
            newPost.noteDate = new Date().toISOString();
            state.notes.push(newPost);
            storeInLocalStorage('notes', state.notes);
        },

       

     
        increaseCount(state, action){
            state.count = state.count + 1;
        }
    }
});

export const { addNewNote } = noteSlice.actions;
export const getAllNotes = (state) => state.notes.notes;
export default noteSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface state {
    open: boolean,
    message: string,
    severity: "success" | "error" | "warning" | "info";
}

const initialState: state = {
    open: false,
    message: "",
    severity: "success"
}

const slice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        hideNotification: (state) => {
            state.open = false;
        },

        showNotification:(state, action: PayloadAction<{ message: string; severity: state["severity"] }>)=>{
            state.open = true,
            state.message = action.payload.message,
            state.severity = action.payload.severity
        }
    }
})

export const {hideNotification,showNotification} = slice.actions
export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { AppTheme } from "../../types/app_theme.types";


const initialState: AppTheme = {
    theme: "light"
}
const name = "appTheme";
const appThemeSlice = createSlice({
    name,
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";

        }
    }
});

export const { toggleTheme } = appThemeSlice.actions;

export const getTheme = (state: RootState) => state.theme;

export default appThemeSlice.reducer;
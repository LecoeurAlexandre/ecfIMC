import userSlice from "./components/userSlice";
import FormSlice from "./routes/form/FormSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        form: FormSlice,
        user: userSlice
    }
})

export default store
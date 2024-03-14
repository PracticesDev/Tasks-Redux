import { readTaks } from "./travelSlice";

export const readingTask = () => {

    return async (dispatch) => {
        const dataRead = localStorage.getItem("travel");
        const convertRead = JSON.parse(dataRead)

        console.log("Mi array de LS", convertRead);

        if (convertRead) {
            dispatch(readTaks(convertRead));
        }


    };
};





import { readTaks, updateModalTask } from "./travelSlice";

export const readingTask = () => {

    return async (dispatch) => {
        const dataRead = localStorage.getItem("travel");
        const convertRead = JSON.parse(dataRead)

        //console.log("Mi array del LS", convertRead);

        if (convertRead) {
            dispatch(readTaks(convertRead));
        }
        return


    };
};






import axios from "axios";
import {
    APPLICATION_CREATE_FAILS,
    APPLICATION_CREATE_REQUEST,
    APPLICATION_CREATE_SUCCESS,
} from "../constants/applicationConstants";

export const createApplication =
    (userId,
        internshipId,
        isComplete,
        location,
        education,
        resumeDriveLink,
        ans1,
        ans2,
        projects,
        skills,
        applicationStatus) =>
        async (dispatch) => {
            try {
                dispatch({ type: APPLICATION_CREATE_REQUEST });

                // to handle headers
                const config = { headers: { "Content-Type": "application/json" } };
                const { data } = await axios.post(
                    "/application/createApplication",
                    {
                        userId,
                        internshipId,
                        isComplete,
                        location,
                        education,
                        resumeDriveLink,
                        ans1,
                        ans2,
                        projects,
                        skills,
                        applicationStatus
                    },
                    config
                );
                dispatch({
                    type: APPLICATION_CREATE_SUCCESS,
                    payload: data,
                });
                //   localStorage.setItem("userInfo", JSON.stringify(data));
            } catch (error) {
                console.log(error);
                dispatch({
                    type: APPLICATION_CREATE_FAILS,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        };
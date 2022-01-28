import axios from "axios";
import {
    ONE_INTERNSHIP_DETAILS_REQUEST,
    ONE_INTERNSHIP_DETAILS_SUCCESS,
    ONE_INTERNSHIP_DETAILS_FAILS,
    ALL_USER_INTERNSHIPS_REQUEST,
    ALL_USER_INTERNSHIPS_SUCCESS,
    ALL_USER_INTERNSHIPS_FAILS,
    FRONTEND_INTERNSHIPS__LIST_REQUEST,
    FRONTEND_INTERNSHIPS__LIST_SUCCESS,
    FRONTEND_INTERNSHIPS__LIST_FAILS,
    BACKEND_INTERNSHIPS__LIST_SUCCESS,
    BACKEND_INTERNSHIPS__LIST_FAILS,
    BACKEND_INTERNSHIPS__LIST_REQUEST,
    DESIGNING_INTERNSHIPS__LIST_REQUEST,
    DESIGNING_INTERNSHIPS__LIST_SUCCESS,
    DESIGNING_INTERNSHIPS__LIST_FAILS,
    DATABASE_INTERNSHIPS__LIST_REQUEST,
    DATABASE_INTERNSHIPS__LIST_SUCCESS,
    DATABASE_INTERNSHIPS__LIST_FAILS,
    FULLSTACK_INTERNSHIPS__LIST_REQUEST,
    FULLSTACK_INTERNSHIPS__LIST_SUCCESS,
    FULLSTACK_INTERNSHIPS__LIST_FAILS,
    OTHER_INTERNSHIPS_LIST_SUCCESS,
    OTHER_INTERNSHIPS_LIST_FAILS,
    OTHER_INTERNSHIPS_LIST_REQUEST,
    ALL_EMPLOYER_INTERNSHIPS_REQUEST,
    ALL_EMPLOYER_INTERNSHIPS_SUCCESS,
    ALL_EMPLOYER_INTERNSHIPS_FAILS,
    INTERNSHIP_CREATE_REQUEST,
    INTERNSHIP_CREATE_SUCCESS,
    INTERNSHIP_CREATE_FAILS,
} from "../constants/internshipConstants";

export const oneInternshipDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ONE_INTERNSHIP_DETAILS_REQUEST });
        const { data } = await axios.get(`/internship/oneinternship/${id}`);
        dispatch({
            type: ONE_INTERNSHIP_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ONE_INTERNSHIP_DETAILS_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// AFTER ORDER MODEL
export const allUserInternshipsAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_USER_INTERNSHIPS_REQUEST,
        });
        const { data } = await axios.get(`/order/getAllInternshipsOfUser/${id}`);
        dispatch({
            type: ALL_USER_INTERNSHIPS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_USER_INTERNSHIPS_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const allEmployerInternshipsAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_EMPLOYER_INTERNSHIPS_REQUEST,
        });
        const { data } = await axios.get(`/internship/allEmployerInternships/${id}`);
        dispatch({
            type: ALL_EMPLOYER_INTERNSHIPS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_EMPLOYER_INTERNSHIPS_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const frontendInternshipListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: FRONTEND_INTERNSHIPS__LIST_REQUEST,
        });
        const { data } = await axios.get("/internship/allFrontendInternships");
        dispatch({
            type: FRONTEND_INTERNSHIPS__LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FRONTEND_INTERNSHIPS__LIST_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const backendInternshipListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: BACKEND_INTERNSHIPS__LIST_REQUEST,
        });
        const { data } = await axios.get("/internship/allBackendInternships");
        dispatch({
            type: BACKEND_INTERNSHIPS__LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: BACKEND_INTERNSHIPS__LIST_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const designingInternshipListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: DESIGNING_INTERNSHIPS__LIST_REQUEST,
        });
        const { data } = await axios.get("/internship/allDesigningInternships");
        dispatch({
            type: DESIGNING_INTERNSHIPS__LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DESIGNING_INTERNSHIPS__LIST_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const databaseInternshipListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: DATABASE_INTERNSHIPS__LIST_REQUEST,
        });
        const { data } = await axios.get("/internship/allDatabaseInternships");
        dispatch({
            type: DATABASE_INTERNSHIPS__LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DATABASE_INTERNSHIPS__LIST_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const fullstackInternshipListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: FULLSTACK_INTERNSHIPS__LIST_REQUEST,
        });
        const { data } = await axios.get("/internship/allFullstackInternships");
        dispatch({
            type: FULLSTACK_INTERNSHIPS__LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FULLSTACK_INTERNSHIPS__LIST_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const otherInternshipListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: OTHER_INTERNSHIPS_LIST_REQUEST,
        });
        const { data } = await axios.get("/internship/allOtherInternships");
        dispatch({
            type: OTHER_INTERNSHIPS_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: OTHER_INTERNSHIPS_LIST_FAILS,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createInternship =
    (
        employerId, title, type, companyLogo, companyName, location, startsAt, duration, stipend, lastDateToApply, aboutCompany, aboutInternship, noOfOpenings, skillsRequired, perks, questions, isPartTime, isPPO
    ) =>
        async (dispatch) => {
            try {
                dispatch({ type: INTERNSHIP_CREATE_REQUEST });

                // to handle headers
                const config = { headers: { "Content-Type": "application/json" } };
                const { data } = await axios.post(
                    "/internship/createinternship",
                    {
                        employerId, title, type, companyLogo, companyName, location, startsAt, duration, stipend, lastDateToApply, aboutCompany, aboutInternship, noOfOpenings, skillsRequired, perks, questions, isPartTime, isPPO

                    },
                    config
                );
                dispatch({
                    type: INTERNSHIP_CREATE_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                console.log(error);
                dispatch({
                    type: INTERNSHIP_CREATE_FAILS,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        };
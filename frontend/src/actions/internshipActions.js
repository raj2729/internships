import axios from "axios";
import {
  ALL_INTERNSHIPS__LIST_REQUEST,
  ALL_INTERNSHIPS__LIST_SUCCESS,
  ALL_INTERNSHIPS__LIST_FAILS,
  ONE_INTERNSHIP_DETAILS_REQUEST,
  ONE_INTERNSHIP_DETAILS_SUCCESS,
  ONE_INTERNSHIP_DETAILS_FAILS,
  ALL_USER_INTERNSHIPS_REQUEST,
  ALL_USER_INTERNSHIPS_SUCCESS,
  ALL_USER_INTERNSHIPS_FAILS,
  WEBDEV_INTERNSHIPS__LIST_REQUEST,
  WEBDEV_INTERNSHIPS__LIST_SUCCESS,
  WEBDEV_INTERNSHIPS__LIST_FAILS,
  DESIGNING_INTERNSHIPS__LIST_SUCCESS,
  DESIGNING_INTERNSHIPS__LIST_FAILS,
  DESIGNING_INTERNSHIPS__LIST_REQUEST,
  CONTENTWRITING_INTERNSHIPS__LIST_REQUEST,
  CONTENTWRITING_INTERNSHIPS__LIST_SUCCESS,
  CONTENTWRITING_INTERNSHIPS__LIST_FAILS,
  DIGITALMARKETING_INTERNSHIPS__LIST_REQUEST,
  DIGITALMARKETING_INTERNSHIPS__LIST_SUCCESS,
  DIGITALMARKETING_INTERNSHIPS__LIST_FAILS,
  DATASCIENCE_INTERNSHIPS__LIST_REQUEST,
  DATASCIENCE_INTERNSHIPS__LIST_SUCCESS,
  DATASCIENCE_INTERNSHIPS__LIST_FAILS,
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
  // console.log("internship detail from action: ", id);
  try {
    dispatch({ type: ONE_INTERNSHIP_DETAILS_REQUEST });
    const { data } = await axios.get(`/internship/oneInternship/${id}`);
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

//GET ALL INTERNSHIPS
export const allInternshipsListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_INTERNSHIPS__LIST_REQUEST,
    });
    const { data } = await axios.get("/internship/allInternships");
    console.log(data);
    dispatch({
      type: ALL_INTERNSHIPS__LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_INTERNSHIPS__LIST_FAILS,
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
    const { data } = await axios.get(
      `/internship/allEmployerInternships/${id}`
    );
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

export const webdevInternshipListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: WEBDEV_INTERNSHIPS__LIST_REQUEST,
    });
    const { data } = await axios.get("/internship/allWebdevInternships");
    dispatch({
      type: WEBDEV_INTERNSHIPS__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WEBDEV_INTERNSHIPS__LIST_FAILS,
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

export const contentWritingInternshipListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: CONTENTWRITING_INTERNSHIPS__LIST_REQUEST,
    });
    const { data } = await axios.get(
      "/internship/allContentWritingInternships"
    );
    dispatch({
      type: CONTENTWRITING_INTERNSHIPS__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTENTWRITING_INTERNSHIPS__LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const digitalMarketingInternshipListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: DIGITALMARKETING_INTERNSHIPS__LIST_REQUEST,
    });
    const { data } = await axios.get(
      "/internship/allDigitalMarketingInternships"
    );
    dispatch({
      type: DIGITALMARKETING_INTERNSHIPS__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DIGITALMARKETING_INTERNSHIPS__LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const dataScienceInternshipListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: DATASCIENCE_INTERNSHIPS__LIST_REQUEST,
    });
    const { data } = await axios.get("/internship/allDataScienceInternships");
    dispatch({
      type: DATASCIENCE_INTERNSHIPS__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATASCIENCE_INTERNSHIPS__LIST_FAILS,
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
    employerId,
    title,
    type,
    companyLogo,
    companyName,
    location,
    startsAt,
    duration,
    stipend,
    lastDateToApply,
    aboutCompany,
    aboutInternship,
    noOfOpenings,
    skillsRequired,
    perks,
    questions,
    isPartTime,
    isPPO,
    website
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: INTERNSHIP_CREATE_REQUEST });

      // to handle headers
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/internship/createinternship",
        {
          employerId,
          title,
          type,
          companyLogo,
          companyName,
          location,
          startsAt,
          duration,
          stipend,
          lastDateToApply,
          aboutCompany,
          aboutInternship,
          noOfOpenings,
          skillsRequired,
          perks,
          questions,
          isPartTime,
          isPPO,
          website,
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

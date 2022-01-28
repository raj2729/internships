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
    BACKEND_INTERNSHIPS__LIST_REQUEST,
    BACKEND_INTERNSHIPS__LIST_SUCCESS,
    BACKEND_INTERNSHIPS__LIST_FAILS,
    DESIGNING_INTERNSHIPS__LIST_REQUEST,
    DESIGNING_INTERNSHIPS__LIST_SUCCESS,
    DESIGNING_INTERNSHIPS__LIST_FAILS,
    DATABASE_INTERNSHIPS__LIST_REQUEST,
    DATABASE_INTERNSHIPS__LIST_SUCCESS,
    DATABASE_INTERNSHIPS__LIST_FAILS,
    FULLSTACK_INTERNSHIPS__LIST_REQUEST,
    FULLSTACK_INTERNSHIPS__LIST_SUCCESS,
    FULLSTACK_INTERNSHIPS__LIST_FAILS,
    OTHER_INTERNSHIPS_LIST_REQUEST,
    OTHER_INTERNSHIPS_LIST_SUCCESS,
    OTHER_INTERNSHIPS_LIST_FAILS,
    ALL_EMPLOYER_INTERNSHIPS_REQUEST,
    ALL_EMPLOYER_INTERNSHIPS_SUCCESS,
    ALL_EMPLOYER_INTERNSHIPS_FAILS,
    INTERNSHIP_CREATE_REQUEST,
    INTERNSHIP_CREATE_SUCCESS,
    INTERNSHIP_CREATE_FAILS,
} from "../constants/internshipConstants";

// Partiicular INTERNSHIP details
export const oneINTERNSHIPDetailsReducer = (
    state = { INTERNSHIP: { reviews: [] } },
    action
) => {
    switch (action.type) {
        case ONE_INTERNSHIP_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ONE_INTERNSHIP_DETAILS_SUCCESS:
            return { loading: false, internship: action.payload };
        case ONE_INTERNSHIP_DETAILS_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const allUserINTERNSHIPsReducer = (state = { internships: [] }, action) => {
    switch (action.type) {
        case ALL_USER_INTERNSHIPS_REQUEST:
            return { ...state, loading: true, internships: [] };
        case ALL_USER_INTERNSHIPS_SUCCESS:
            return { loading: false, internships: action.payload };
        case ALL_USER_INTERNSHIPS_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const allEmployerInternshipsReducer = (
    state = { EMPLOYERINTERNSHIPs: [] },
    action
) => {
    switch (action.type) {
        case ALL_EMPLOYER_INTERNSHIPS_REQUEST:
            return { ...state, loading: true, EmployerInternships: [] };
        case ALL_EMPLOYER_INTERNSHIPS_SUCCESS:
            return { loading: false, EmployerInternships: action.payload };
        case ALL_EMPLOYER_INTERNSHIPS_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const frontendInternshipListReducer = (
    state = { frontendInternshipList: [] },
    action
) => {
    switch (action.type) {
        case FRONTEND_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, frontendInternshipList: [] };
        case FRONTEND_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, frontendInternshipList: action.payload };
        case FRONTEND_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const backendInternshipListReducer = (
    state = { backendINTERNSHIPList: [] },
    action
) => {
    switch (action.type) {
        case BACKEND_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, backendInternshipList: [] };
        case BACKEND_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, backendInternshipList: action.payload };
        case BACKEND_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const designingInternshipListReducer = (
    state = { designingINTERNSHIPList: [] },
    action
) => {
    switch (action.type) {
        case DESIGNING_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, designingInternshipList: [] };
        case DESIGNING_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, designingInternshipList: action.payload };
        case DESIGNING_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const databaseInternshipListReducer = (
    state = { databaseINTERNSHIPList: [] },
    action
) => {
    switch (action.type) {
        case DATABASE_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, databaseInternshipList: [] };
        case DATABASE_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, databaseInternshipList: action.payload };
        case DATABASE_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const fullstackInternshipListReducer = (
    state = { fullstackInternshipList: [] },
    action
) => {
    switch (action.type) {
        case FULLSTACK_INTERNSHIPS__LIST_REQUEST:
            return { ...state, loading: true, fullstackInternshipList: [] };
        case FULLSTACK_INTERNSHIPS__LIST_SUCCESS:
            return { loading: false, fullstackInternshipList: action.payload };
        case FULLSTACK_INTERNSHIPS__LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const otherInternshipListReducer = (
    state = { otherInternshipList: [] },
    action
) => {
    switch (action.type) {
        case OTHER_INTERNSHIPS_LIST_REQUEST:
            return { ...state, loading: true, otherInternshipList: [] };
        case OTHER_INTERNSHIPS_LIST_SUCCESS:
            return { loading: false, otherInternshipList: action.payload };
        case OTHER_INTERNSHIPS_LIST_FAILS:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const createInternshipReducer = (state = {}, action) => {
    switch (action.type) {
        case INTERNSHIP_CREATE_REQUEST:
            return { ...state, loading: true };
        case INTERNSHIP_CREATE_SUCCESS:
            return { ...state, loading: false, IinternshipCreateInfo: action.payload };
        case INTERNSHIP_CREATE_FAILS:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
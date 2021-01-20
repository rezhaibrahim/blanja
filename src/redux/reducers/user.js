const initialState = {
  profile: [],
  editProfile: {},
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_DETAIL_USER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        profile: action.payload.data.data,
      };
    }
    case 'UPDATE_DETAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_DETAIL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'UPDATE_DETAIL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        editProfile: action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
};

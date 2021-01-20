const initialState = {
  data: {},
  detail: {},
  pageInfo: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'ADD_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'ADD_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: action.payload.data.message,
      };
    }
    case 'GET_DETAIL_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_DETAIL_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        detail: action.payload.data.data,
      };
    }
    case 'UPDATE_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'UPDATE_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

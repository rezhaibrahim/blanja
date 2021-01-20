const initialState = {
  data: [],
  detail:{},
  pageInfo: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ORDER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_ORDER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'GET_DETAIL_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_ORDER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_DETAIL_ORDER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        detail: action.payload.data.detail,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    default: {
      return state;
    }
  }
};

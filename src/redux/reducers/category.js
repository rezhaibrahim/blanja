const initialState = {
  category: [],
  categoryDetail: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
  pageInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CATEGORY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_CATEGORY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        category: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'GET_DETAIL_CATEGORY_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_CATEGORY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_DETAIL_CATEGORY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        categoryDetail: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'CLEAR': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        categoryDetail: [],
        pageInfo: {},
      };
    }
    default: {
      return state;
    }
  }
};

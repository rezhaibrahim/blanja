const initialState = {
  mybag: [],
  pageInfo: {},
  isError: false,
  isLoading: false,
  alertMsg: '',
  isAdd: false,
  checkoutAddress:[],
  checkoutResults:[],
  isEdit:false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MY_BAG_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MY_BAG_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'GET_MY_BAG_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        mybag: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'POST_MY_BAG_PENDING': {
        return {
          ...state,
          isLoading: true,
        };
      }
      case 'POST_MY_BAG_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: action.payload,
        };
      }
      case 'POST_MY_BAG_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          isError: false,
          alertMsg: action.payload.data.message,
        };
      }
      case 'POST_CHECKOUT_PENDING': {
        return {
          ...state,
          isLoading: true,
        };
      }
      case 'POST_CHECKOUT_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: action.payload,
        };
      }
      case 'POST_CHECKOUT_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          isError: false,
          alertMsg: action.payload.data.message,
          checkoutAddress: action.payload.data.address,
          checkoutResults: action.payload.data.results,
        };
      }
      case 'PUT_MY_BAG_PENDING': {
        return {
          ...state,
          isLoading: true,
        };
      }
      case 'PUT_MY_BAG_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: action.payload,
        };
      }
      case 'PUT_MY_BAG_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          isError: false,
          alertMsg: action.payload.data.message,
          isEdit:true
        };
      }
      case 'CLEAR':{
          return{
              ...state,
              isEdit:false,
              
          }
      }
      case 'RESET':{
        return{
            ...state,
            isEdit:false,
            mybag: [],
            pageInfo: {},
        }
    }

    default: {
      return state;
    }
  }
};

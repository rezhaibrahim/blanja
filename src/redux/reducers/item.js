const initialState = {
    itemNew:[],
    itemPopular:[],
    itemDetail:{},
    isLoading:false,
    isError:false,
    alertMsg:'',
    pageInfo:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NEW_ITEM_PENDING': {
          return {
            ...state,
            isLoading: true,
          };
        }
        case 'GET_NEW_ITEM_REJECTED': {
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
        }
        case 'GET_NEW_ITEM_FULFILLED': {
          return {
            ...state,
            isLoading: false,
            isError: false,
            itemNew: action.payload.data.results,
            pageInfo: action.payload.data.pageInfo,
          };
        }
        case 'GET_POPULAR_ITEM_PENDING': {
            return {
              ...state,
              isLoading: true,
            };
          }
          case 'GET_POPULAR_ITEM_REJECTED': {
            return {
              ...state,
              isLoading: false,
              isError: true,
            };
          }
          case 'GET_POPULAR_ITEM_FULFILLED': {
            return {
              ...state,
              isLoading: false,
              isError: false,
              itemPopular: action.payload.data.results,
              pageInfo: action.payload.data.pageInfo,
            };
          }
          case 'GET_POPULAR_ITEM_PENDING': {
            return {
              ...state,
              isLoading: true,
            };
          }
          case 'GET_DETAIL_ITEM_REJECTED': {
            return {
              ...state,
              isLoading: false,
              isError: true,
            };
          }
          case 'GET_DETAIL_ITEM_FULFILLED': {
            return {
              ...state,
              isLoading: false,
              isError: false,
              itemDetail: action.payload.data.result,
              pageInfo: action.payload.data.pageInfo,
            };
          }
        default: {
          return state;
        }
      }
}
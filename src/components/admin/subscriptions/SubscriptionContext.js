export const subscriptionState = {
    subscriptions: [],
    addSubscriptionModal: false,
    updateSubscriptionModal: {
      modal: false,
      oId: null,
      status: "",
    },
    loading: false,
  };
  
  export const subscriptionReducer = (state, action) => {
    switch (action.type) {
      /* Get all subscription */
      case "fetchSubscriptionAndChangeState":
        return {
          ...state,
          subscriptions: action.payload,
        };
      /* Create a subscription */
      case "addSubscriptionModal":
        return {
          ...state,
          addSubscriptionModal: action.payload,
        };
      /* Edit a subscription */
      case "updateSubscriptionModalOpen":
        return {
          ...state,
          updateSubscriptionModal: {
            modal: true,
            oId: action.oId,
            status: action.status,
          },
        };
      case "updateSubscriptionModalClose":
        return {
          ...state,
          updateSubscriptionModal: {
            modal: false,
            oId: null,
            status: "",
          },
        };
      case "loading":
        return {
          ...state,
          loading: action.payload,
        };
      default:
        return state;
    }
  };
  
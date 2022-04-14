export const GET_CURRENCY_FETCH = "GET_CURRENCY_FETCH";
export const SET_CURRENCY_FETCH = "SET_CURRENCY_FETCH";


export const getNames = (selectCurrency) => (
  {
    type: GET_CURRENCY_FETCH,
    data: selectCurrency,
  }
);

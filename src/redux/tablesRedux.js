//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const FETCH_ALL_TABLES = createActionName('FETCH_ALL_TABLES');

// action creators
const fetchAllTables = payload => ({ type: FETCH_ALL_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch ('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(fetchAllTables(tables)));
  }
};


const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_ALL_TABLES:
      return [...action.payload];
    default:
      return statePart;
  };
};
export default tablesReducer;

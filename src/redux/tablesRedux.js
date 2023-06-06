//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const FETCH_ALL_TABLES = createActionName('FETCH_ALL_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
const fetchAllTables = payload => ({ type: FETCH_ALL_TABLES, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch ('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(fetchAllTables(tables)));
  }
};

export const editTableRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(table),
    };

    fetch ('http://localhost:3131/api/tables/' + table.id, options)
      .then(() => dispatch(editTable(table)));
  }
};


const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_ALL_TABLES:
      return [...action.payload];
      case EDIT_TABLE:
        return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    default:
      return statePart;
  };
};
export default tablesReducer;

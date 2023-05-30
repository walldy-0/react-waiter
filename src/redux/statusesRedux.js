//selectors
export const getStatuses = ({ tableStatuses }) => tableStatuses;

const statusesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default statusesReducer;

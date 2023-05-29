import Table from "../../features/Table/Table";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";

const TableSingle = () => {
  const { id } = useParams();
  const tableData = useSelector(tables => getTableById(tables, id));

  return (
    <Table table={tableData} />
  );
};

export default TableSingle;
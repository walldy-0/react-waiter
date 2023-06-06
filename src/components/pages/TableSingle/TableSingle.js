import Table from "../../features/Table/Table";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";

const TableSingle = () => {
  const { id } = useParams();
  const tableData = useSelector(tables => getTableById(tables, id));

  if(!tableData) return <Navigate to="/" />

  return (
    <Table table={tableData} />
  );
};

export default TableSingle;
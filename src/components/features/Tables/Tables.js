import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Row, Col, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Tables = () => {
  const tables = useSelector(getAllTables);

  return (
    <>
      {
        tables.map(table => (
          <Row key={table.id}>
            <Col>
              <h2>Table {table.id}</h2>
            </Col>
            <Col>
              <b>Status: </b>{table.status}
            </Col>
            <Col>
              <Button variant='primary' as={NavLink} to={'/table/' + table.id}>Show more</Button>
            </Col>
          </Row>
        ))
      }
    </>
  );
};

export default Tables;
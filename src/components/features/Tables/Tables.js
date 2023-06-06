import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Row, Col, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styles from './Tables.module.scss';

const Tables = () => {
  const tables = useSelector(getAllTables);

  return (
    <div>
      {
        tables.map(table => (
          <Row key={table.id} className='d-flex align-items-center border-bottom p-2'>
            <Col className={styles.formLeftCol}>
              <h2>Table {table.id}</h2>
            </Col>
            <Col>
              <b>Status: </b>{table.status}</Col>
            <Col className={styles.buttonCol}>
              <Button variant='primary' as={NavLink} to={'/table/' + table.id}>Show more</Button>
            </Col>
          </Row>
        ))
      }
    </div>
  );
};

export default Tables;
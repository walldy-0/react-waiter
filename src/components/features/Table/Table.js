import { useState } from 'react';
import { Form, Row, Col, FormGroup, Button } from "react-bootstrap";
import styles from './Table.module.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Table = (props) => {
  const { register, handleSubmit: validate, formState: {errors}} = useForm();
  const navigate = useNavigate();
  const [status, setStatus] = useState(props.table.status);
  const [peopleAmount, setPeopleAmount] = useState(props.table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.table.maxPeopleAmount);
  const [bill, setBill] = useState(props.table.bill);

  return (
    <Form>
      <Form.Group as={Row} controlid='tableStatus'>
        <Form.Label as={Col}>Status:</Form.Label>
        <Form.Label as={Col}>{status}</Form.Label>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label as={Col}>People:</Form.Label>
        <Col>
          <Form.Control
            controlid='peopleAmount'
            className={styles.peopleAmount}
            value={peopleAmount}
            onFocus={e => e.target.select()}
            onChange={e => setPeopleAmount(e.target.value)}>
          </Form.Control>
          <span> / </span>
          <Form.Control
            controlid='maxPeopleAmount'
            className={styles.peopleAmount}
            value={maxPeopleAmount}
            onFocus={e => e.target.select()}
            onChange={e => setMaxPeopleAmount(e.target.value)}>
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label as={Col}>Bill:</Form.Label>
        <Col>
          <Form.Control
            controlid='bill'
            className={styles.peopleAmount}
            value={bill}
            onFocus={e => e.target.select()}
            onChange={e => setBill(e.target.value)}>
          </Form.Control>
        </Col>
      </Form.Group>
      <FormGroup as={Row}>
        <Col>
          <Button type='submit'>Update</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Table;

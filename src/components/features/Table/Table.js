import { useState } from 'react';
import { Form, Row, Col, FormGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import styles from './Table.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStatuses } from '../../../redux/statusesRedux';
import { editTableRequest } from '../../../redux/tablesRedux';

const Table = (props) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(props.table.status);
  const [peopleAmount, setPeopleAmount] = useState(props.table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.table.maxPeopleAmount);
  const [bill, setBill] = useState(props.table.bill);

  const statuses = useSelector(getStatuses);

  const dispatch = useDispatch();

  const handleStatusSelect = e => {
    if (e === 'Cleaning' || e === 'Free') {
      setPeopleAmount(0);
    }
    setStatus(e);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const dataBill = status === 'Busy' ? bill : 0;
    const dataPeopleAmount = status === 'Cleaning' || status === 'Free' ? 0 : peopleAmount;

    const table = {
      id: props.table.id,
      status: status,
      peopleAmount: dataPeopleAmount,
      maxPeopleAmount: maxPeopleAmount,
      bill: dataBill,
    }
    dispatch(editTableRequest(table));
    navigate('/');
  };

  const setPeopleAmountHandle = e => {
    if (validatePeopleAmount(e.target.value)) {
      const amount = parseInt(e.target.value);
      if (amount <= maxPeopleAmount) {
        setPeopleAmount(amount);
      }
    }
  };

  const setMaxPeopleAmountHandle = e => {
    if (validatePeopleAmount(e.target.value)) {
      const amount = parseInt(e.target.value);
      setMaxPeopleAmount(amount);
      setPeopleAmount(amount);
    }
  };

  const setBillHandle = e => {
    if (validateBill(e.target.value)) {
      setBill(parseInt(e.target.value));
    }
  };

  const validatePeopleAmount = value => {
    return validateRegex('^(10|[0-9])$', value);
  };

  const validateBill = value => {
    return validateRegex('^(0|[1-9][0-9]*)$', value);
  };

  const validateRegex = (expr, value) => {
    const regex = new RegExp(expr);

    return regex.test(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className='d-flex align-items-center m-2'>
        <Form.Label as={Col} className={styles.formLeftCol}>Status:</Form.Label>
        <Col>
          <DropdownButton
            variant="outline-secondary"
            title={status}
            onSelect={handleStatusSelect}>
            {
              statuses.map(status => (
                <Dropdown.Item key={status.name} eventKey={status.name}>{status.name}</Dropdown.Item>
              ))
            }
          </DropdownButton>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='d-flex align-items-center m-2'>
        <Form.Label as={Col} className={styles.formLeftCol}>People:</Form.Label>
        <Col>
          <Form.Control
            type='number'
            className={styles.peopleAmount}
            value={peopleAmount}
            onFocus={e => e.target.select()}
            onChange={setPeopleAmountHandle}>
          </Form.Control>
          <span> / </span>
          <Form.Control
            type='number'
            className={styles.peopleAmount}
            value={maxPeopleAmount}
            onFocus={e => e.target.select()}
            onChange={setMaxPeopleAmountHandle}>
          </Form.Control>
        </Col>
      </Form.Group>
      {status === 'Busy' && 
        <Form.Group as={Row} className='d-flex align-items-center m-2'>
          <Form.Label as={Col} className={styles.formLeftCol}>Bill:</Form.Label>
          <Col>
            $
            <Form.Control
              type='number'
              className={styles.peopleAmount}
              value={bill}
              onFocus={e => e.target.select()}
              onChange={setBillHandle}>
            </Form.Control>
          </Col>
        </Form.Group>
      }
      
      <FormGroup as={Row} className='d-flex align-items-center m-2'>
        <Col className={styles.formLeftCol}>
          <Button type='submit'>Update</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Table;

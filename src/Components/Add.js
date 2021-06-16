 import React, {useState} from 'react'
 import {Modal,Button,Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addmovie } from '../redux/Action';
export const Add = () => {
const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [rate, setRate] = useState(0);

    const handleClose = () => {
        setTitle('')
        setRate('')
        setId('')
        setShow(false)
    }
    const handleShow = () => setShow(true);
    const handlesave =()=> {
      dispatch(addmovie({
      title,
      rate,
      id 
     }))
     handleClose()
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Control placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
          <Form.Control placeholder="rating" onChange={e=>setRate(e.target.value)}/>
          <Form.Control placeholder="id" onChange={e=>setId(e.target.value)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlesave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } 


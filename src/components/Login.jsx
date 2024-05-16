import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Login = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
       <Form>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
 
  
        
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Enviar
        </Button>

        </Modal.Footer>
        </Form>
    </Modal>
  )
}

export default Login
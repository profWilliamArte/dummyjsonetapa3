import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Detalle({show, handleClose, producto}) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Detalle del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <img src={producto.thumbnail} alt={producto.title} className="img-fluid img-thumbnail" />
            </div>
            <div className='col-md-6'>
              <h3>{producto.title}</h3>
             
              <p className="lead">
                <b>Marca: </b>{producto.brand}
                <br/><b>Categoria: </b>{producto.category}
                <br/><b>Stock: </b>{producto.stock}
                <br/><b>Clasificación: </b>{producto.rating}
                </p>
              <p className='lead small'><b>Descripción: </b>{producto.description}</p> 

              <h3 className="text-danger"><b>Precio: </b>{producto.price.toFixed(0).toLocaleString()}$</h3>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default Detalle;
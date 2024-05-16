import { useState } from "react";
import FiltroCategorias from "./FiltroCategorias"
import Login from "./Login";
import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg";

import { CartFill } from 'react-bootstrap-icons';




// para el contexto
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";




const Header = () => {
    // controla los detalles
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // para el contexto

    const { cart, vaciar, comprar } = useContext(carritoContext)
    const total = cart.reduce((acc, item) => acc + item.cantidad, 0);
    

    const totalCantidad = cart.reduce((total, item) => total + item.cantidad, 0);
    const totalPrecio = cart.reduce((total, item) => total + item.cantidad * item.price, 0);
    return (

    <>
        <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt="logo" width={100} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/inicio" className="nav-link active" aria-current="page" href="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tienda" className="nav-link" href="#">Tienda</Link>
                </li>
                <li className="nav-item">
                    <Link to="/movil" className="nav-link" href="#">Movil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/laptop" className="nav-link" href="#">Laptop</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu">

                        <FiltroCategorias/>
                        
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/contactos" className="nav-link">Contactos</Link>
                </li>
            </ul>
            <button className='btn btn-danger me-2'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">  <CartFill  size={25} /> <span className="bagbe bg-secondary">{cart.length} / {total}</span></button>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                <a className="btn btn-outline-info" href="#" onClick={handleShow}>Login</a>
            </form>
            </div>
        </div>
        </nav>

   
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Ver Carrito</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
              
                        {cart.map((item) => (
                            <div className="card mb-3" key={item.id}>
                                <div className="card-header p-0">
                                    <img src={item.thumbnail} alt={item.title}  className="img-fluid"  />
                                   
                                </div>
                                <div className="card-body text-center">
                                    <h5>{item.title}</h5>
                                    <p className="text-success">{item.brand}</p>
                                    <h5 className="text-danger">Precio: {item.price.toFixed(0).toLocaleString()}$</h5>
                                    <h5 className="text-danger">Cantidad: {item.cantidad}</h5>
                                    <h5 className="text-danger">Cantidad: {(item.cantidad*item.price).toFixed(0).toLocaleString()}$</h5>
                                </div>
                            </div>
                        ))}
                        <div className="card p-3">
                            <h3>Total productos : {totalCantidad}</h3>
                            <h3>Total A Pagar : {totalPrecio}</h3>
                        </div>
                        <div className="card p-3 my-3">
                            <button className="btn btn-danger btn-sm mx-1 mb-2" onClick={()=>vaciar()}>Vaciar Carrito</button>
                            <button className="btn btn-success btn-sm mx-1" onClick={()=>comprar()}>Comprar</button>
                        </div>

                        
                </div>
                </div>
          






        <Login show={show} handleClose={handleClose}  />



        
    </>


  )
}

export default Header
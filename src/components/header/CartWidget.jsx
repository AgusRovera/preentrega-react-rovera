import React, { useContext } from 'react';
import { CartCheck } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../components/context/CartContext';

export const CartWidget = () => {
    const { calcularCantidad } = useContext(CartContext);

    return (
        <Link className="carrito" to="/carrito">
            <CartCheck color="white" /> {calcularCantidad()}
        </Link>
    );
};

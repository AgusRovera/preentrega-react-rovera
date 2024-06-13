import React, {useEffect, useState}  from 'react';
import data from "../data/productos.json";
import { ItemList } from './ItemLIst';

const ItemListContainer = () => {
    


    let [productos, setProductos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])


    return (
        <div className='item-list-container'>
            <h1>Modelos</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer

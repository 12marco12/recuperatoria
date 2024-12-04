import React, { useEffect, useState } from 'react';

function CustomersPage() {
    const [products, setProducts] = useState([]); // Estado para almacenar los productos
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    // Función para obtener los productos desde la API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data); // Guardar los datos en el estado
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };

        fetchProducts(); // Llamada a la función
    }, []);

    // Manejo de la interfaz según el estado
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Customers Page</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.images[0]} alt={product.title} width="100" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomersPage;
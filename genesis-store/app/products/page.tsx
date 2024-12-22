"use client";
import Button  from "antd/es/button/button";
import { Products } from "../components/Products";
import { useEffect, useState } from "react";
import { addProduct, deleteProduct, getAllProducts, ProductRequest, updateProduct } from "../Services/Products";
import Title from "antd/es/typography/Title";
import { AddUpdateProduct, Mode } from "../components/AddUpdateProduct";

export default function ProductsPage(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Add);

    const defaultValues = {
        productName: "",
        description: "",
        price: 0,
    } as Product;

    const [values, setValues] = useState<Product>(defaultValues);

    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts();
            setLoading(false);
            setProducts(products);
        };

        getProducts();
    }, []);

    const handleAddProduct = async (request: ProductRequest) => {
        await addProduct(request);
        closeModal();

        const products = await getAllProducts();
        setProducts(products);
    };

    const handleUpdateProduct = async (id: string, request: ProductRequest) => {
        await updateProduct(id, request);
        closeModal();

        const products = await getAllProducts();
        setProducts(products);
    };

    const handleDeleteProduct = async (id: string) => {
        await deleteProduct(id);

        const products = await getAllProducts();
        setProducts(products);
    }

    const openModal = () => {
        setMode(Mode.Add);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openUpdateModal = (product: Product) => {
        setMode(Mode.Update);
        setValues(product);
        setIsModalOpen(true);
    };
    
    return(
        <div>
            <Button
                type="primary"
                style={{ marginTop: "30px" }}
                size="large"
                onClick={openModal}
            >
                Добавить новый товар
            </Button>

            <AddUpdateProduct 
                mode={mode} 
                values={values} 
                isModalOpen={isModalOpen} 
                handleAdd={handleAddProduct} 
                handleUpdate={handleUpdateProduct} 
                handleCancel={closeModal}  
            />

            {loading ? (<Title>Загрузка товаров....Подождите</Title>) : (<Products products={products} handleOpen={openUpdateModal} handleDelete={handleDeleteProduct}/>)}
        </div>
    );
}
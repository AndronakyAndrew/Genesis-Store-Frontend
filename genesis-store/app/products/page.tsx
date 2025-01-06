"use client";

import Button  from "antd/es/button/button";
import { Products } from "../components/Products";
import { useEffect, useState } from "react";
import { addProduct, deleteProduct, getAllProducts, ProductRequest, updateProduct } from "../Services/Products";
import Title from "antd/es/typography/Title";
import { AddUpdateProduct, Mode } from "../components/AddUpdateProduct";
import { Input, Select } from "antd";

const { Option } = Select;

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
    const [search, setSearch] = useState("");
    const [sortItem, setSortItem] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts();
            setLoading(false);
            setProducts(products);
            setFilteredProducts(products); // Initialize filteredProducts with all products
        };

        getProducts();
    }, []);
    
    const handleSearchClick = () => {
        applyFilters();
    };

    const handleSortItemChange = (value: string) => {
        setSortItem(value);
        applyFilters();
    };

    const handleSortOrderChange = (value: string) => {
        setSortOrder(value);
        applyFilters();
    };

    const applyFilters = () => {
        let filtered = products.filter(product =>
            product.productName.toLowerCase().includes(search.toLowerCase())
        );

        if (sortItem) {
            filtered = [...filtered].sort((a, b) => {
                const aValue = a[sortItem as keyof Product];
                const bValue = b[sortItem as keyof Product];
                if (typeof aValue === "string" && typeof bValue === "string") {
                    return sortOrder === "desc"
                        ? bValue.localeCompare(aValue)
                        : aValue.localeCompare(bValue);
                }
                if (typeof aValue === "number" && typeof bValue === "number") {
                    return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
                }
                return 0;
            });
        }

        setFilteredProducts(filtered);
    };

    const handleAddProduct = async (request: ProductRequest) => {
        await addProduct(request);
        closeModal();

        const products = await getAllProducts();
        setProducts(products);
        setFilteredProducts(products); // Update filteredProducts
    };

    const handleUpdateProduct = async (id: string, request: ProductRequest) => {
        await updateProduct(id, request);
        closeModal();

        const products = await getAllProducts();
        setProducts(products);
        setFilteredProducts(products); // Update filteredProducts
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
            <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                <Input
                    placeholder="Search by product name"
                    value={search}
                    style={{ width: 200 }}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button type="primary" onClick={handleSearchClick}>
                    Search
                </Button>
                <Select
                    placeholder="Sort by"
                    value={sortItem}
                    onChange={handleSortItemChange}
                    style={{ width: 150 }}
                >
                    <Option value="productName">Product Name</Option>
                    <Option value="price">Price</Option>
                </Select>
                <Select
                    placeholder="Sort order"
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                    style={{ width: 150 }}
                >
                    <Option value="asc">Ascending</Option>
                    <Option value="desc">Descending</Option>
                </Select>
            </div>
            <Button
                type="primary"
                style={{ marginTop: "35px" }}
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
            {loading ? (<Title>Загрузка товаров....Подождите</Title>) : (<Products products={filteredProducts} handleOpen={openUpdateModal} handleDelete={handleDeleteProduct}/>)}
        </div>
    );
}
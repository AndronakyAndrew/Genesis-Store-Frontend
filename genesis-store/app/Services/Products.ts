export interface ProductRequest{
    productName: string;
    description: string;
    price: number;
}

export const getAllProducts = async () => {
    const response = await fetch("http://localhost:8080/products");

    return response.json();
};

export const addProduct = async (productRequest: ProductRequest) => {
    await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(productRequest),
    });
};

export const updateProduct = async (id: string, productRequest: ProductRequest) => {
    await fetch(`http://localhost:8080/products/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(productRequest),
    });
};

export const deleteProduct = async (id: string) => {
    await fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE"
    });
};
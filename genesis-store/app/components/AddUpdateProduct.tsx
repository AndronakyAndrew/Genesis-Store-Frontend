import Modal from "antd/es/modal/Modal";
import { ProductRequest } from "../Services/Products";
import Input from "antd/es/input/Input";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface Props{
    mode: Mode;
    values: Product,
    isModalOpen: boolean,
    handleCancel: () => void;
    handleAdd: (request: ProductRequest) => void;
    handleUpdate: (id: string, request: ProductRequest) => void;
}

export enum Mode{
    Add,
    Update,
}

export const AddUpdateProduct = ({
    mode, 
    values, 
    isModalOpen, 
    handleCancel, 
    handleAdd, 
    handleUpdate
}: Props) => {
    const [productName, setProductName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        setProductName(values.productName);
        setDescription(values.description);
        setPrice(values.price);
    }, [values]);

    const handleOnOk = async () => {
        const productRequest = { productName, description, price };

        mode == Mode.Add 
            ? handleAdd(productRequest) 
            : handleUpdate(values.id, productRequest);
    }

    return(
        <Modal 
            title={mode === Mode.Add ? "Добавить товар" : "Редактировать товар"} 
            open={isModalOpen} 
            cancelText={"Отмена"}
            onOk={handleOnOk}
            onCancel={handleCancel}
        >
            <div className="product_modal">
                <Input 
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Название"
                />
                <TextArea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Описание"
                />
                <Input 
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    placeholder="Цена"
                />
            </div>
        </Modal>
    );
}
import Card from "antd/es/card/Card";
import { CardName } from "./CardName";
import Button  from "antd/es/button/button";

interface Props {
    products: Product[],
    handleDelete: (id: string) => void;
    handleOpen: (product: Product) => void
}

export const Products = ({products, handleDelete, handleOpen}: Props) => {
    return (
        <div className="cards">
            {products.map((product : Product) => (
                <Card 
                    key={product.id} 
                    title={<CardName productName={product.productName} price={product.price}/>} 
                    bordered={false} 
                >
                    <p>{product.description}</p>
                    <div className="card_buttons">
                        <Button 
                            onClick={() => handleOpen(product)} 
                            style={{flex: 1}}
                        >
                            Редактировать
                        </Button>
                        <Button 
                            onClick={() => handleDelete(product.id)}
                            danger
                            style={{flex: 1}}
                        >
                            Удалить
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    );
}
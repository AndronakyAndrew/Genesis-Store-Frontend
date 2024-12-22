interface Props{
    productName: string;
    price: number;
}

export const CardName = ({productName, price}: Props) => {
    return (
        <div 
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <p className="card_name">{productName}</p>
                <p className="card_price">{price}</p>
            </div>
    );
}
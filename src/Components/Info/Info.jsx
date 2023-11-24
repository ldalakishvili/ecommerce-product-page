import styled from "styled-components";
import Plus from "/icon-plus.svg";
import Minus from "/icon-minus.svg";
import Basket from "/icon-cart.svg";
import { useState } from "react";

export default function InfoComponent({
	addToCart,
	cartItems,
	setCartItems,
	cartIsEmpty,
	setCartIsEmpty,
}) {
	const [value, setValue] = useState(0);

	const handleMinusClick = () => {
		setValue((prevValue) => (prevValue == 0 ? prevValue : prevValue - 1));
	};

	const handlePlusClick = () => {
		setValue((prevValue) => prevValue + 1);
	};

	const handleAddToCart = () => {
		if (value === 0) {
			return;
		}

		const existingItemIndex = cartItems.findIndex(
			(item) => item.productName === "Fall Limited Edition Sneakers"
		);

		const newItem = {
			productName: "Fall Limited Edition Sneakers",
			productPrice: 125.0,
			quantity: value,
			imageUrl: "/image-product-1-thumbnail.jpg",
		};

		if (existingItemIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[existingItemIndex].quantity = value;
			setCartItems(updatedCartItems);
		} else {
			const updatedCartItems = [...cartItems, newItem];
			setCartItems(updatedCartItems);
			setCartIsEmpty(false);
		}
	};

	return (
		<InfoContainer>
			<Company> Sneaker Company</Company>
			<Title> Fall Limited Edition Sneakers</Title>
			<Text>
				These low-profile sneakers are your perfect casual wear companion.
				Featuring a durable rubber outer sole, they’ll withstand everything the
				weather can offer.
			</Text>
			<Price>
				<CurrentPrice>
					$125.00 <span> 50%</span>{" "}
				</CurrentPrice>
				<OldPrice> $250.00</OldPrice>
			</Price>
			<NumberBox>
				<Numbers>
					<MinusIcon src={Minus} onClick={handleMinusClick} />
					<NumberValue>{value}</NumberValue>
					<PlusIcon src={Plus} onClick={handlePlusClick} />
				</Numbers>
				<Button onClick={handleAddToCart}>
					{" "}
					<Cart src={Basket} /> Add to cart
				</Button>
			</NumberBox>
		</InfoContainer>
	);
}

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	max-width: 44.5rem;
	width: 100%;
	@media (max-width: 760px) {
		padding: 0 2.4rem;
	}
`;

const Company = styled.h3`
	font-size: 13px;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: 2px;
	text-align: left;
	color: #ff7e1b;
	text-transform: uppercase;
	margin-bottom: 2.7rem;

	@media (max-width: 760px) {
		font-size: 12px;
		margin-bottom: 1.9rem;
		line-height: 14px;
	}
`;

const Title = styled.h2`
	font-size: 44px;
	font-weight: 700;
	line-height: 48px;
	letter-spacing: 0px;
	text-align: left;
	color: #1d2026;
	margin-bottom: 3.2rem;

	@media (max-width: 760px) {
		font-size: 28px;
		margin-bottom: 1.5rem;
		line-height: 32px;
	}
`;

const Text = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: left;
	color: #69707d;
	margin-bottom: 2.4rem;
	@media (max-width: 760px) {
		font-size: 15px;
		line-height: 25px;
	}
`;

const Price = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 3.2rem;
	@media (max-width: 760px) {
		flex-direction: row;
		gap: none;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}
`;
const CurrentPrice = styled.p`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	font-size: 28px;
	font-weight: 700;
	line-height: 35px;
	letter-spacing: 0px;
	text-align: left;
	color: #1d2026;
	span {
		font-size: 16px;
		font-weight: 700;
		line-height: 20px;
		letter-spacing: 0px;
		text-align: left;
		color: #ff7e1b;
	}
`;
const OldPrice = styled.p`
	font-size: 16px;
	font-weight: 700;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: left;
	color: #b6bcc8;
	text-decoration: line-through;
`;

const NumberBox = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	@media (max-width: 760px) {
		flex-direction: column;
		gap: 1.6rem;
	}
`;
const Numbers = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2.3rem 1.6rem;
	gap: 4.5rem;
	@media (max-width: 760px) {
		gap: none;
		width: 100%;
	}
`;
const PlusIcon = styled.img`
	width: 12px;
	cursor: pointer;
	height: 12px;
`;
const MinusIcon = styled.img`
	width: 12px;
	cursor: pointer;
	height: 3px;
`;
const NumberValue = styled.p`
	font-size: 16px;
	font-weight: 700;
	line-height: 20px;
	letter-spacing: 0px;
	text-align: center;
`;
const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 1.8rem 7.7rem;
	background-color: #ff7e1b;
	font-size: 16px;
	font-weight: 700;
	line-height: 20px;
	letter-spacing: 0px;
	border-radius: 0.9rem;
	border: none;
	color: white;
	@media (max-width: 760px) {
		width: 100%;
		justify-content: center;
	}
`;
const Cart = styled.img`
	width: 1.6rem;
	height: 1.6reml;
`;

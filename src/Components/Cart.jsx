import React from "react";
import styled from "styled-components";
import Delete from "/icon-delete.svg";
import { useState } from "react";

export default function CartComponent({
	cartItems,
	setCartItems,
	cartIsEmpty,
	setCartIsEmpty,
	cartIsOpen,
	setCartIsOpen,
}) {
	const handleDeleteClick = (index) => {
		const updatedCartItems = [...cartItems];
		updatedCartItems.splice(index, 1);
		setCartItems(updatedCartItems);
		setCartIsEmpty(updatedCartItems.length === 0);
	};

	return (
		<CartModal cartIsOpen={cartIsOpen}>
			<CartTitle>Cart</CartTitle>
			{cartIsEmpty ? (
				<EmptyBox>Your cart is empty.</EmptyBox>
			) : (
				<FullBox>
					{cartItems.map((item, index) => (
						<Product key={index}>
							<ProductImg src={item.imageUrl} alt={item.productName} />
							<ProductInfo>
								<ProductName>{item.productName}</ProductName>
								<ProductQuantity>
									${item.productPrice} x {item.quantity}
									<span>${item.productPrice * item.quantity}</span>
								</ProductQuantity>
							</ProductInfo>
							<DeleteIcon src={Delete} onClick={handleDeleteClick} />
						</Product>
					))}
					<CheckoutButton>Checkout</CheckoutButton>
				</FullBox>
			)}
		</CartModal>
	);
}
const CartModal = styled.div`
	width: 36rem;
	background-color: white;
	display: ${(props) => (props.cartIsOpen ? "flex" : "none")};
	flex-direction: column;
	padding: 2.4rem 2.4rem 3.2rem;
	position: absolute;
	top: 6rem;
	left: -16.6rem;
	box-shadow: 0 2rem 5rem -2rem #1d202680;
	z-index: 10;

	@media (max-width: 1260px) {
		left: -28rem;
		border-radius: 0.9rem;
	}
`;
const CartTitle = styled.h2`
	font-size: 16px;
	padding-bottom: 2.7rem;
	font-weight: 700;
	line-height: 20px;
	letter-spacing: 0px;
	text-align: left;
	color: #1d2026;
`;

const EmptyBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: center;
	color: #69707d;
	padding: 7.7rem 8.5rem 5.3rem;
`;

const FullBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2.4rem;
	padding-top: 2.4rem;
	width: 100%;
`;

const Product = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 1.6rem;
	width: 100%;
`;

const ProductImg = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 0.9rem;
`;

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
const ProductName = styled.h2`
	font-size: 16px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: left;
	color: #69707d;
`;
const ProductQuantity = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: left;
	color: #69707d;

	span {
		font-size: 16px;
		font-weight: 700;
		line-height: 26px;
		letter-spacing: 0px;
		text-align: left;
		color: #1d2026;
	}
`;
const DeleteIcon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
`;

const CheckoutButton = styled.button`
	width: 100%;
	padding: 2rem 12rem;
	background-color: #ff7e1b;
	font-size: 16px;
	font-weight: 700;
	line-height: 20px;
	letter-spacing: 0px;
	text-align: left;
	color: white;
	border: none;
	border-radius: 0.9rem;
`;

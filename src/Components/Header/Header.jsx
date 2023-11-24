import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "/logo.svg";
import Grocery from "/icon-cart.svg";
import Profile from "/image-avatar.png";
import Cross from "/icon-close.svg";
import { Link } from "react-router-dom";
import CartComponent from "../Cart";

export default function HeaderComponent({
	cartItems,
	setCartItems,
	cartIsEmpty,
	setCartIsEmpty,
}) {
	const [cartIsOpen, setCartIsOpen] = useState(false);

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		console.log(showMenu);
		setShowMenu(!showMenu);
	};
	const openCart = () => {
		setCartIsOpen(!cartIsOpen);
	};

	return (
		<HeaderContainer>
			<NavBox>
				<BurgerIcon onClick={toggleMenu}>
					<div></div>
					<div></div>
					<div></div>
				</BurgerIcon>
				<Logo src={LogoImg} />
				<Navigation showMenu={showMenu}>
					<CloseIcon src={Cross} onClick={() => setShowMenu(!showMenu)} />
					<StyledLink to="#">Collections</StyledLink>
					<StyledLink to="#">Men</StyledLink>
					<StyledLink to="#">Women</StyledLink>
					<StyledLink to="#">About</StyledLink>
					<StyledLink to="#">Contact</StyledLink>
				</Navigation>
			</NavBox>
			<BasketBox>
				<Basket src={Grocery} onClick={openCart} />
				<CartProducts>
					{[...cartItems].reduce((total, item) => total + item.quantity, 0)}
				</CartProducts>
				<CartComponent
					cartItems={cartItems}
					setCartItems={setCartItems}
					cartIsEmpty={cartIsEmpty}
					setCartIsEmpty={setCartIsEmpty}
					cartIsOpen={cartIsOpen}
					setCartIsOpen={setCartIsOpen}
				/>
				<ProfileImage src={Profile} />
			</BasketBox>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2.8rem 0 3.4rem;

	@media (max-width: 760px) {
		padding: 2rem 2.4rem 2.5rem;
	}
`;
const NavBox = styled.div`
	display: flex;
	gap: 5.6rem;
	@media (max-width: 760px) {
		gap: 1.6rem;
	}
`;
const Logo = styled.img`
	max-width: 13.75rem;
	height: 2rem;
`;
const StyledLink = styled(Link)`
	font-size: 15px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: left;
	color: #69707d;
	&:focus {
		border-bottom: 4px solid #ff7e1b;
		margin-bottom: -4px;
	}
`;
const CloseIcon = styled.img`
	width: 13px;
	height: 13px;
	margin: 2.4rem 0 5rem;
	cursor: pointer;
	display: none;
	@media (max-width: 1000px) {
		display: flex;
	}
`;
const Navigation = styled.div`
	display: flex;
	align-items: center;
	gap: 3.2rem;

	@media (max-width: 1000px) {
		display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
		flex-direction: column;
		align-items: flex-start;
		position: absolute;
		top: 0;
		left: 0;
		width: 25rem;
		height: 100%;

		background-color: #ffffff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 11;

		${StyledLink} {
			font-size: 18px;
			font-weight: 700;
			line-height: 26px;
			letter-spacing: 0px;
			text-align: left;
			color: #1d2026;
		}
	}
`;
const BasketBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	position: relative;
`;

const Basket = styled.img`
	width: 2.1rem;
	height: 2rem;
	cursor: pointer;
`;
const ProfileImage = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	cursor: pointer;
	@media (max-width: 760px) {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
const BurgerIcon = styled.div`
	display: none;
	cursor: pointer;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3px;
	div {
		background-color: #d8d8d8;
		height: 3px;
		width: 1.6rem;
	}
	@media (max-width: 1000px) {
		display: flex;
	}
`;

const CartProducts = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
	padding: 3px 6px;
	background-color: #ff7e1b;
	font-size: 10px;
	font-weight: 700;
	line-height: 12px;
	letter-spacing: 0px;
	text-align: left;
	color: white;
	border-radius: 50%;
	left: 1rem;
	top: 5px;
	@media (max-width: 760px) {
		left: 1rem;
		top: 0px;
		padding: 3px 6px 0px;
	}
`;

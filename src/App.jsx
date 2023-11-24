import "./reset.css";
import "./App.css";
import styled from "styled-components";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";

import HeaderComponent from "./Components/Header/Header";
import GalleryComponent from "./Components/Slider/Slider";
import InfoComponent from "./Components/Info/Info";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [cartIsEmpty, setCartIsEmpty] = useState(cartItems.length === 0);

	const addToCart = (item) => {
		setCartItems((prevCartItems) => [...prevCartItems, item]);
	};
	return (
		<BrowserRouter>
			<HeaderComponent
				cartItems={cartItems}
				setCartItems={setCartItems}
				cartIsEmpty={cartIsEmpty}
				setCartIsEmpty={setCartIsEmpty}
			/>
			<Box>
				<GalleryComponent />
				<InfoComponent
					addToCart={addToCart}
					cartItems={cartItems}
					setCartItems={setCartItems}
					cartIsEmpty={cartIsEmpty}
					setCartIsEmpty={setCartIsEmpty}
				/>
			</Box>
		</BrowserRouter>
	);
}

export default App;

const Box = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-around;
	margin-top: 9rem;

	@media (max-width: 1000px) {
		flex-direction: column;
		margin-top: 0;
	}
	@media (max-width: 760px) {
		gap: 2.4rem;
	}
`;

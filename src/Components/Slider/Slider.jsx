import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Previous from "/icon-previous.svg";
import Next from "/icon-next.svg";
import Close from "/icon-close.svg";

Modal.setAppElement("#root");

export default function GalleryComponent() {
	const images = [
		"image-product-1.jpg",
		"image-product-2.jpg",
		"image-product-3.jpg",
		"image-product-4.jpg",
	];
	const thumbnails = [
		"image-product-1-thumbnail.jpg",
		"image-product-2-thumbnail.jpg",
		"image-product-3-thumbnail.jpg",
		"image-product-4-thumbnail.jpg",
	];

	const [selectedImage, setSelectedImage] = useState(images[0]);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleThumbnailClick = (image) => {
		setSelectedImage(image);
	};

	const handleMainImageClick = () => {
		if (window.innerWidth > 1000) {
			OpenModal();
		}
	};
	const OpenModal = () => {
		setModalIsOpen(true);
		console.log(modalIsOpen);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const handlePrevImage = () => {
		const currentIndex = images.indexOf(selectedImage);
		const prevIndex = (currentIndex - 1 + images.length) % images.length;
		setSelectedImage(images[prevIndex]);
	};

	const handleNextImage = () => {
		const currentIndex = images.indexOf(selectedImage);
		const nextIndex = (currentIndex + 1) % images.length;
		setSelectedImage(images[nextIndex]);
	};

	return (
		<GalleryContainer>
			<MainImg
				src={selectedImage}
				alt="Main Image"
				onClick={handleMainImageClick}
			/>
			<NavigationMobileprev onClick={handlePrevImage}>
				<Arrow src={Previous} />{" "}
			</NavigationMobileprev>
			<NavigationMobileNext onClick={handleNextImage}>
				{" "}
				<Arrow src={Next} />
			</NavigationMobileNext>

			<ThumbnailContainer>
				{thumbnails.map((thumbnail, index) => (
					<Thumbnail
						key={index}
						src={thumbnail}
						alt={`Thumbnail ${index + 1}`}
						onClick={() => handleThumbnailClick(images[index])}
						isSelected={images[index] === selectedImage}
					/>
				))}
			</ThumbnailContainer>
			<ImageModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={{
					overlay: {
						backgroundColor: "rgba(17, 8, 8, 0.787)", // Set your desired background color
					},
				}}
			>
				<CloseIcon src={Close} onClick={closeModal} />
				<ModalImage src={selectedImage} alt="Modal Image" />
				<NavigationArrowPrev onClick={handlePrevImage}>
					<Arrow src={Previous} />
				</NavigationArrowPrev>
				<NavigationArrowNext onClick={handleNextImage}>
					<Arrow src={Next} />
				</NavigationArrowNext>
				<ThumbnailContainer>
					{thumbnails.map((thumbnail, index) => (
						<Thumbnail
							key={index}
							src={thumbnail}
							alt={`Thumbnail ${index + 1}`}
							onClick={() => handleThumbnailClick(images[index])}
							isSelected={images[index] === selectedImage}
						/>
					))}
				</ThumbnailContainer>
			</ImageModal>
		</GalleryContainer>
	);
}

const GalleryContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	max-width: 44.5rem;
	margin: auto;
	@media (max-width: 1000px) {
		position: relative;
		width: 100%;
	}
`;

const MainImg = styled.img`
	width: 100%;
	height: 44.5rem;
	border-radius: 2.5rem;
	cursor: pointer;
	@media (max-width: 1000px) {
		height: 30rem;
		border-radius: 0;
	}
`;

const ThumbnailContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	/* gap: 3.1rem; */
	@media (max-width: 1000px) {
		display: none;
	}
`;

const Thumbnail = styled.img`
	width: 8.8rem;
	height: 8.8rem;
	border-radius: 2.5rem;
	cursor: pointer;
	${({ isSelected }) =>
		isSelected &&
		`
    opacity: 0.4;
  `};
`;
const ImageModal = styled(Modal)`
	width: 55rem;
	height: 72rem;
	margin: 9rem auto;
	position: relative;
	outline: none;
	background-color: rgba(240, 248, 255, 0);
`;
const CloseIcon = styled.img`
	width: 2rem;
	height: 2rem;
	position: absolute;
	top: 0;
	right: 0;
`;
const ModalImage = styled.img`
	width: 100%;
	cursor: pointer;
	border-radius: 2.5rem;
	margin: 4.8rem 0 4rem;
	height: 55rem;
	width: 100%;
`;

const NavigationArrowPrev = styled.div`
	top: 50%;
	left: -3rem;
	position: absolute;
	height: 5.6rem;
	width: 5.6rem;
	border-radius: 50%;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	cursor: pointer;
`;
const NavigationMobileprev = styled.div`
	top: 50%;
	left: 3rem;
	position: absolute;
	height: 4rem;
	width: 4rem;
	border-radius: 50%;
	transform: translateY(-50%);
	display: none;
	align-items: center;
	justify-content: center;
	background-color: white;
	cursor: pointer;
	@media (max-width: 1000px) {
		display: flex;
	}
`;
const NavigationMobileNext = styled.div`
	top: 50%;
	right: 3rem;
	position: absolute;
	height: 4rem;
	width: 4rem;
	border-radius: 50%;
	transform: translateY(-50%);
	display: none;
	align-items: center;
	justify-content: center;
	background-color: white;
	cursor: pointer;
	@media (max-width: 1000px) {
		display: flex;
	}
`;
const NavigationArrowNext = styled.div`
	top: 50%;
	right: -3rem;
	position: absolute;
	height: 5.6rem;
	width: 5.6rem;
	border-radius: 50%;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	cursor: pointer;
`;

const Arrow = styled.img`
	height: 1.6rem;
	width: 0.8rem;
`;

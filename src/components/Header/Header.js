import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { togglerShowMenu } from "../../store/menuSlice";
import Logo from "./Logo";
import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import Button from "../../UI/Button";

function Header() {
	let [isShowState, setShowState] = useState(false);

	let togglerShowMenu = () => {
		setShowState(!isShowState);
	};

	const dispatch = () => useDispatch;
	const toggleMenu = () => dispatch(togglerShowMenu(isShowState));
	return (
		<header className={`${styles.header} ${isShowState ? "header--open" : ""}`}>
			<div className={styles.header__container}>
				<Logo />
				<Navigation />
			</div>
			<Button className={styles.header__backMenu} type="button" aria-label="Назад." onClick={togglerShowMenu}>
				{
					<svg width="22" height="38" viewBox="0 0 22 38" fill="currentColor">
						<use href="./img/sprite.svg#icon-arrow"></use>
					</svg>
				}
			</Button>
		</header>
	);
}

export default Header;

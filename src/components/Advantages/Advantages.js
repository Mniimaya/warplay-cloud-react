import styles from "./Advantages.module.scss";
import mapMob from "./images/map-mobile@2x.png";
import mapDesk from "./images/map-desktop@2x.png";

function Advantages() {
	return (
		<section className={`${styles.advantages} container`} id="browser-container">
			<h2 className="visually-hidden">Наши приемущества</h2>

			<div className={styles.advantages__container}>
				<div className={styles.advantages__card}>
					<div className={styles.advantagesCardDeskBg}>
						<div className={styles.advantagesCardDeskBlur}></div>
					</div>
					<h2 className={`${styles.advantages__title} title-partition`}>Играть можно в браузере</h2>
					<span className={`${styles.advantages__subtitle} subtitle-partition`}>Запускайте на любых устройствах</span>
					<p className={styles.advantages__description}>Наш модуль доступен на все популярные ОС и&nbsp;работает на всех компьютерах.</p>
					<a href="/#" className={`${styles.advantages__link} link`}>
						Открыть в браузере
					</a>
				</div>
			</div>
			<div className={styles.advantages__cardLocation}>
				<div className={styles.advantages__container}>
					<h2 className={`${styles.advantages__locationTitle} title-partition`}>Игровые сервера на карте</h2>
					<span className={`${styles.advantages__locationSubtitle} subtitle-partition`}>Карта локаций</span>
				</div>
			</div>
			<div className={styles.advantages__card__containerImg}>
				<svg className={styles.advantages__card__containerImgSvg} width="196" height="232" viewBox="0 0 196 232" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_d_7610_131)">
						<path d="M1 223.936V221.986L11.3056 215.998L21.6113 221.847V223.936L11.4449 229.924L1 223.936Z" />
					</g>
					<path d="M1 221.985V220.036L11.3056 214.047L21.6113 219.897V221.985L11.4449 227.974L1 221.985Z" />
					<path d="M1 220.036V218.086L11.3056 212.098L21.6113 217.947V220.036L11.4449 226.024L1 220.036Z" />
					<path d="M1 217.938V215.988L11.3056 210L21.6113 215.849V217.938L11.4449 223.927L1 217.938Z" />
					<line x1="18.8385" y1="214.502" x2="119.532" y2="136.185" stroke="white" />
					<path d="M1 216.938V214.988L11.3056 209L21.6113 214.849V216.938L11.4449 222.927L1 216.938Z" />
					<path
						d="M130.649 122.143H133.934L136.263 131.729H136.277L138.606 122.143H141.891V135H139.749V125.814L137.52 135H135.02L132.791 125.814V135H130.649V122.143ZM147.63 127.329H145.844C145.606 127.329 145.487 127.448 145.487 127.686V132.671C145.487 132.91 145.606 133.029 145.844 133.029H147.63C147.868 133.029 147.987 132.91 147.987 132.671V127.686C147.987 127.448 147.868 127.329 147.63 127.329ZM144.772 125.357H148.701C149.101 125.357 149.439 125.495 149.715 125.771C149.991 126.048 150.13 126.386 150.13 126.786V133.571C150.13 133.971 149.991 134.31 149.715 134.586C149.439 134.862 149.101 135 148.701 135H144.772C144.372 135 144.034 134.862 143.758 134.586C143.482 134.31 143.344 133.971 143.344 133.571V126.786C143.344 126.386 143.482 126.048 143.758 125.771C144.034 125.495 144.372 125.357 144.772 125.357ZM152.995 125.357H157.281V127.329H154.066C153.828 127.329 153.709 127.448 153.709 127.686V132.671C153.709 132.91 153.828 133.029 154.066 133.029H157.638V135H152.995C152.595 135 152.257 134.862 151.981 134.586C151.705 134.31 151.566 133.971 151.566 133.571V126.786C151.566 126.386 151.705 126.048 151.981 125.771C152.257 125.495 152.595 125.357 152.995 125.357ZM159.066 125.357H161.209V129.186H161.824L163.652 125.357H166.024L163.738 130.171V130.186L166.024 135H163.652L161.824 131.171H161.209V135H159.066V125.357ZM171.294 127.329H169.237V129.186H171.294C171.532 129.186 171.651 129.067 171.651 128.829V127.686C171.651 127.448 171.532 127.329 171.294 127.329ZM171.38 131.171H169.237V133.029H171.38C171.618 133.029 171.737 132.91 171.737 132.671V131.529C171.737 131.29 171.618 131.171 171.38 131.171ZM167.094 125.357H172.365C172.765 125.357 173.103 125.495 173.38 125.771C173.656 126.048 173.794 126.386 173.794 126.786V129.1C173.794 129.376 173.694 129.614 173.494 129.814C173.303 130.014 173.051 130.133 172.737 130.171V130.186C173.051 130.224 173.318 130.348 173.537 130.557C173.765 130.757 173.88 130.99 173.88 131.257V133.571C173.88 133.971 173.741 134.31 173.465 134.586C173.189 134.862 172.851 135 172.451 135H167.094V125.357ZM179.959 131.171H177.816C177.578 131.171 177.459 131.29 177.459 131.529V132.671C177.459 132.91 177.578 133.029 177.816 133.029H179.602C179.84 133.029 179.959 132.91 179.959 132.671V131.171ZM175.674 125.357H180.674C181.074 125.357 181.412 125.495 181.688 125.771C181.964 126.048 182.102 126.386 182.102 126.786V135H180.245L180.045 134.357H180.031C179.974 134.538 179.85 134.69 179.659 134.814C179.478 134.938 179.283 135 179.074 135H176.745C176.345 135 176.007 134.862 175.731 134.586C175.455 134.31 175.316 133.971 175.316 133.571V130.614C175.316 130.214 175.455 129.876 175.731 129.6C176.007 129.324 176.345 129.186 176.745 129.186H179.959V127.686C179.959 127.448 179.84 127.329 179.602 127.329H175.674V125.357Z"
						fill="white"
					/>
					<defs>
						<filter id="filter0_d_7610_131" x="0" y="215.998" width="22.6113" height="15.9268" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
							<feOffset dy="1" />
							<feGaussianBlur stdDeviation="0.5" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7610_131" />
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7610_131" result="shape" />
						</filter>
					</defs>
				</svg>

				<picture>
					<source media="(min-width: 768px)" src={require("./images/map-desktop@2x.png")} />
					<img className={styles.advantages__locationMap} src={require("./images/map-mobile@2x.png")} width="556" height="435" alt="Карта локаций серверов. Москва." />
				</picture>
			</div>
		</section>
	);
}

export default Advantages;

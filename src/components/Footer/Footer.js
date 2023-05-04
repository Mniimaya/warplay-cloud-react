import styles from "./Footer.module.scss";
function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<ul className={styles.footer__socialList}>
					<li className={styles.footer__socialItem}>
						<a href="/" className={styles.footer__socialLink} aria-label="Перейти на нашу группу вконтакте.">
							<svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.06755 0.742569H16.4301C23.1551 0.742569 24.7426 2.34257 24.7426 9.06757V16.4301C24.7426 23.1551 23.1426 24.7426 16.4176 24.7426H9.05505C2.33005 24.7426 0.742554 23.1426 0.742554 16.4176V9.05507C0.742554 2.34257 2.34255 0.742569 9.06755 0.742569Z" />
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M20.3926 9.00508C20.5051 8.63008 20.3926 8.36758 19.8676 8.36758H18.1176C17.6676 8.36758 17.4676 8.60508 17.3551 8.86758C17.3551 8.86758 16.4676 11.0426 15.2051 12.4426C14.7926 12.8551 14.6176 12.9801 14.3926 12.9801C14.2801 12.9801 14.1176 12.8551 14.1176 12.4801V9.00508C14.1176 8.55508 13.9926 8.36758 13.6176 8.36758H10.8676C10.5926 8.36758 10.4176 8.58008 10.4176 8.76758C10.4176 9.19258 11.0426 9.29258 11.1176 10.4676V13.0426C11.1176 13.6051 11.0176 13.7051 10.7926 13.7051C10.2051 13.7051 8.75508 11.5301 7.90508 9.03008C7.73008 8.56758 7.56758 8.36758 7.11758 8.36758H5.36758C4.86758 8.36758 4.76758 8.60508 4.76758 8.86758C4.76758 9.33008 5.35508 11.6301 7.53008 14.6676C8.98008 16.7426 11.0176 17.8676 12.8676 17.8676C13.9801 17.8676 14.1176 17.6176 14.1176 17.1926V15.6176C14.1176 15.1176 14.2176 15.0176 14.5801 15.0176C14.8426 15.0176 15.2801 15.1426 16.3176 16.1426C17.5051 17.3301 17.7051 17.8676 18.3676 17.8676H20.1176C20.6176 17.8676 20.8676 17.6176 20.7176 17.1301C20.5551 16.6426 19.9926 15.9301 19.2426 15.0801C18.8301 14.5926 18.2176 14.0801 18.0426 13.8176C17.7801 13.4801 17.8551 13.3301 18.0426 13.0426C18.0426 13.0301 20.1801 10.0301 20.3926 9.00508Z"
									fill="#171717"
								/>
							</svg>
						</a>
					</li>
					<li className={styles.footer__socialItem}>
						<a href="/" className={styles.footer__socialLink} aria-label="Перейти на наш канал в телеграме.">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.9705 15.6201L8.48506 20.7793C8.48506 20.7793 8.28186 22.3601 9.86234 20.7793C11.4428 19.1985 12.9556 17.9795 12.9556 17.9795" />
								<path d="M5.66303 14.0748L0.461211 12.38C0.461211 12.38 -0.160465 12.1278 0.0397146 11.5558C0.0809228 11.4379 0.164049 11.3375 0.41272 11.165C1.56531 10.3617 21.7461 3.10813 21.7461 3.10813C21.7461 3.10813 22.3159 2.91612 22.652 3.04383C22.7351 3.06957 22.8099 3.11692 22.8688 3.18106C22.9276 3.24519 22.9683 3.3238 22.9868 3.40884C23.0231 3.55905 23.0383 3.71359 23.0319 3.86799C23.0303 4.00157 23.0142 4.12537 23.0019 4.31951C22.879 6.30265 19.2008 21.1035 19.2008 21.1035C19.2008 21.1035 18.9807 21.9696 18.1923 21.9992C17.9985 22.0055 17.8055 21.9727 17.6247 21.9027C17.4439 21.8328 17.279 21.7272 17.1399 21.5921C15.5926 20.2612 10.2448 16.6672 9.06307 15.8768C9.03641 15.8586 9.01396 15.835 8.99723 15.8074C8.9805 15.7798 8.96988 15.749 8.96608 15.717C8.94957 15.6336 9.04015 15.5304 9.04015 15.5304C9.04015 15.5304 18.3521 7.25328 18.5999 6.38436C18.6191 6.31704 18.5466 6.28383 18.4493 6.31331C17.8308 6.54084 7.10923 13.3116 5.92592 14.0589C5.84074 14.0846 5.75071 14.0901 5.66303 14.0748V14.0748Z" />
							</svg>
						</a>
					</li>
					<li className={styles.footer__socialItem}>
						<a href="/" className={styles.footer__socialLink} aria-label="Перейти на профиль в инстаграмме.">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C9.28412 2 8.94362 2.01151 7.87701 2.06018C6.81259 2.10876 6.08569 2.27779 5.44958 2.52501C4.79199 2.78056 4.23432 3.1225 3.67839 3.67843C3.12246 4.23436 2.78052 4.79203 2.52497 5.44962C2.27775 6.08573 2.10872 6.81263 2.06014 7.87705C2.01147 8.94362 2 9.28416 2 12C2 14.7159 2.01147 15.0564 2.06014 16.123C2.10872 17.1874 2.27775 17.9143 2.52497 18.5504C2.78052 19.208 3.12246 19.7657 3.67839 20.3216C4.23432 20.8775 4.79199 21.2195 5.44958 21.475C6.08569 21.7223 6.81259 21.8913 7.87701 21.9399C8.94362 21.9885 9.28412 22 12 22C14.7158 22 15.0564 21.9885 16.1229 21.9399C17.1874 21.8913 17.9143 21.7223 18.5504 21.475C19.208 21.2195 19.7656 20.8775 20.3216 20.3216C20.8775 19.7657 21.2194 19.208 21.475 18.5504C21.7222 17.9143 21.8912 17.1874 21.9398 16.123C21.9885 15.0564 22 14.7159 22 12C22 9.28416 21.9885 8.94362 21.9398 7.87705C21.8912 6.81263 21.7222 6.08573 21.475 5.44962C21.2194 4.79203 20.8775 4.23436 20.3216 3.67843C19.7656 3.1225 19.208 2.78056 18.5504 2.52501C17.9143 2.27779 17.1874 2.10876 16.1229 2.06018C15.0564 2.01151 14.7158 2 12 2ZM12.0139 6.88086C9.17577 6.88086 6.875 9.18163 6.875 12.0197C6.875 14.8579 9.17577 17.1586 12.0139 17.1586C14.852 17.1586 17.1528 14.8579 17.1528 12.0197C17.1528 9.18163 14.852 6.88086 12.0139 6.88086ZM12.0233 15.3561C10.181 15.3561 8.6875 13.8626 8.6875 12.0203C8.6875 10.1781 10.181 8.68457 12.0233 8.68457C13.8656 8.68457 15.3591 10.1781 15.3591 12.0203C15.3591 13.8626 13.8656 15.3561 12.0233 15.3561ZM18.5099 6.64358C18.5099 7.30107 17.9769 7.83408 17.3194 7.83408C16.6619 7.83408 16.1289 7.30107 16.1289 6.64358C16.1289 5.98609 16.6619 5.45312 17.3194 5.45312C17.9769 5.45312 18.5099 5.98609 18.5099 6.64358Z"
								/>
							</svg>
						</a>
					</li>
				</ul>
				<ul className={styles.footer__list}>
					<li className={styles.footer__item}>
						<a href="/" className={styles.footer__link}>
							Контакты
						</a>
					</li>
					<li className={styles.footer__item}>
						<a href="info.html" className={styles.footer__link}>
							Политика конфиденциальности
						</a>
					</li>
					<li className={styles.footer__item}>
						<a href="info.html" className={styles.footer__link}>
							Файлы Coocie
						</a>
					</li>
				</ul>
				<a href="/" className={styles.footer__logoLink} aria-label="Логотип сайта облачного гейминга.">
					<svg width="212" height="41" viewBox="0 0 212 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M77.32 27.52L79.816 23.776L82.288 27.52C82.504 27.832 82.84 28 83.224 28H85.432V11.2H82.624V23.8L81.208 21.664L80.728 20.968C80.296 20.296 79.312 20.296 78.88 20.968L78.4 21.664L76.984 23.8V11.2H74.2V28H76.384C76.768 28 77.104 27.832 77.32 27.52ZM95.3526 11.248C95.2806 11.224 95.1846 11.2 95.1126 11.2H88.9446C88.3206 11.2 87.8406 11.704 87.8406 12.328V28H90.6246V23.92C91.6566 23.704 92.5926 23.296 93.4326 22.744V28H96.2406V12.328C96.2406 11.8 95.8566 11.368 95.3526 11.248ZM90.6246 21.016V14.008H93.4326V18.808C92.7846 19.84 91.8006 20.632 90.6246 21.016ZM106.157 11.248C106.085 11.224 105.989 11.2 105.917 11.2H98.6453V28.024H101.429V23.92C102.293 23.752 103.085 23.416 103.829 23.008L104.237 23.776V28.024H107.045V23.776L105.773 21.4C106.277 20.824 106.709 20.2 107.045 19.528V12.328C107.021 11.8 106.661 11.368 106.157 11.248ZM101.429 14.008H104.237V18.808C103.589 19.84 102.605 20.632 101.429 21.016V14.008ZM116.962 11.248C116.89 11.224 116.794 11.2 116.722 11.2H110.554C109.93 11.2 109.45 11.704 109.45 12.328V28H112.234V23.92C113.266 23.704 114.202 23.296 115.042 22.744C116.242 21.952 117.202 20.824 117.826 19.528V12.328C117.826 11.8 117.466 11.368 116.962 11.248ZM112.234 21.016V14.008H115.042V18.808C114.394 19.84 113.41 20.632 112.234 21.016ZM123.039 11.2H120.255V26.896C120.255 27.52 120.735 28 121.359 28H128.631V25.216H123.039V11.2ZM138.571 11.248C138.499 11.224 138.403 11.2 138.331 11.2H132.163C131.539 11.2 131.059 11.704 131.059 12.328V28H133.843V23.92C134.875 23.704 135.811 23.296 136.651 22.744V28H139.459V12.328C139.459 11.8 139.075 11.368 138.571 11.248ZM133.843 21.016V14.008H136.651V18.808C136.003 19.84 135.019 20.632 133.843 21.016ZM149.064 11.2L146.256 16.816L143.448 11.2H140.664L144.864 19.6V28H147.648V19.6L151.848 11.2H149.064ZM153.067 25.216V28H154.747C155.347 28 155.851 27.52 155.851 26.896V25.216H153.067ZM163.862 25.216H161.054V14.008H163.862V16.864C165.062 16.432 166.07 15.544 166.646 14.416V12.328C166.646 11.704 166.166 11.2 165.542 11.2H158.27V28H165.542C166.166 28 166.646 27.52 166.646 26.896V19.792H163.862V25.216ZM171.859 11.2H169.075V26.896C169.075 27.52 169.555 28 170.179 28H177.451V25.216H171.859V11.2ZM179.88 12.328V26.896C179.88 27.52 180.36 28 180.984 28H187.152C187.776 28 188.256 27.52 188.256 26.896V12.328C188.256 11.704 187.776 11.2 187.152 11.2H180.984C180.36 11.2 179.88 11.704 179.88 12.328ZM185.472 25.216H182.664V14.008H185.472V25.216ZM196.276 11.2V25.216H193.468V11.2H190.684V26.896C190.684 27.52 191.164 28 191.788 28H197.956C198.58 28 199.06 27.52 199.06 26.896V11.2H196.276ZM201.489 11.2V28H208.761C209.385 28 209.865 27.52 209.865 26.896V12.328C209.865 11.704 209.385 11.2 208.761 11.2H201.489ZM207.081 25.216H204.273V14.008H207.081V25.216Z"
							fill="currentColor"
						/>
						<path
							d="M27.9148 24.0279H19.9117C19.8238 24.0279 19.744 24.0852 19.712 24.1671L12.1882 40.7048C12.1323 40.8523 12.2361 41.0079 12.3879 40.9997H35.4226C35.5744 40.9997 35.6702 40.8359 35.6223 40.6966L28.0985 24.1589C28.0745 24.0852 27.9946 24.0279 27.9148 24.0279Z"
							fill="currentColor"
						/>
						<path
							d="M12.2924 36.2899L18.8178 22.0538C18.8338 22.0129 18.8418 21.9637 18.8258 21.9146L9.38506 1.15026C9.32116 0.904527 8.96973 0.937291 8.96973 1.1994L11.893 36.2079C11.877 36.4373 12.2045 36.511 12.2924 36.2899Z"
							fill="currentColor"
						/>
						<path
							d="M0.591141 13.8382L6.74919 0.0936014C6.87699 -0.0866016 7.14056 0.0116907 7.13257 0.232849L10.3753 38.2721C10.3673 38.5014 10.0559 38.5669 9.96799 38.354L0.231722 16.9098C-0.17562 15.8941 -0.0398394 14.731 0.591141 13.8382Z"
							fill="currentColor"
						/>
						<path
							d="M35.9342 36.2079L38.8575 1.19939C38.8575 0.945469 38.506 0.904514 38.4421 1.15024L29.0014 21.9145C28.9854 21.9637 28.9934 22.0128 29.0094 22.0538L35.5348 36.2898C35.6227 36.511 35.9502 36.4373 35.9342 36.2079Z"
							fill="currentColor"
						/>
						<path
							d="M47.5875 16.9099L37.8512 38.354C37.7633 38.5752 37.4518 38.5096 37.4438 38.2721L40.6866 0.232888C40.6786 0.0117295 40.9422 -0.0783717 41.07 0.0936402L47.236 13.8382C47.867 14.731 47.9948 15.8942 47.5875 16.9099Z"
							fill="currentColor"
						/>
					</svg>
				</a>
			</div>
		</footer>
	);
}

export default Footer;

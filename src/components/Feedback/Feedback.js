import styles from './Feedback.module.scss'

function Feedback() {
  return (
    <section className={`${styles.feedback} container`} id="feedback-container">
    <h2 className="visually-hidden">Контакты и форма обратной связи.</h2>

    <div className={styles.feedback__container}>
      <p>Остались вопросы? <span>Заполните форму и мы постараемся Вам помочь</span></p>

      <form action="#" method="get" classNameName={styles.formFeedback}>
        <fieldset>
          <label>
            <input type="text" name="userName" placeholder="Ваше имя" required/>
          </label>
          <label>
            <input type="email" name="userEmail" placeholder="Ваш Email" required/>
          </label>
          <label className={styles.labelTextarea}>
            <textarea name="userMessage" placeholder="Опишите вашу проблему" maxlength="500" required></textarea>
            <span className={styles.counterSymbol}><span>0</span>/500</span>
          </label>
        </fieldset>
  
        <span>Вы можете прикрепить скриншот который отображает суть проблемы</span>
        <label className={styles.labelFile}>
          <span className={styles.selectFile}>Выберите файлы</span>
          <input type="file" multiple accept="image/*"/>
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </section>
  )
}

export default Feedback
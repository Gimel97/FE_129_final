import styles from './ProductCard.module.css'

function ProductCard() {
    return (
        <footer className={styles.footer}>
          <div className={styles.logo_footer}>
            <img src="/images/logo_footer.svg" alt="" />
            <div className={styles.development}>
              <p>© YouMeal, 2022</p>
              <p>Design: Anastasia Ilina</p>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contacts_number}>
              <p className={styles.number_title}>Номер для заказа</p>
              <p className={styles.number}><img className={styles.phone} src="./images/phone.svg" alt="" /> +7(930)833-38-11</p>
            </div>
            <div className={styles.social}>
            <p className={styles.social_title}>Мы в соцсетях</p> 
            <div className={styles.social_icons}>
              <img className={styles.vk} src="./images/vk.svg" alt="" />
              <img src="./images/telegram.svg" alt="" />
            </div>
            </div>

          </div>
        </footer>
    )
}

export default ProductCard;
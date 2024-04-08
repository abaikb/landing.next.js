import Image from 'next/image';
import styles from './Main.module.scss'; 
const Main = () => {
    return (
        <div className={styles.container}> 
            <div className={styles.text}> 
                <h1 className={styles.aboutus__title}>Разрабатываем IT - решения для вашего бизнеса</h1>
                <p className={styles.aboutus__desc}>Наша профессиональная команда готова предоставить вам высококачественные веб-решения и воплотить в жизнь ваши инновационные идеи. Global Lab использует самые современные и востребованные технологии для создания выдающегося продукта.</p>
                <button className={styles.btn}>оставить заяку</button>
            </div>
            <div className={styles.aboutus__img}> 
                <Image src='/about.svg' alt="Logo" width={100} height={100} className={styles.img} />
            </div>
        </div>
    );
};

export default Main;

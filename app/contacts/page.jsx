import Link from "next/link";
import GalleryImg from "../components/GalleryImg/GalleryImg";

import galleryData from "../database/galleryData";

import mainStyles from "../main.module.css";
import styles from "./page.module.css";

export default function Contacts() {
  return (
    <>
      <section className={styles.contacts}>
        <div className={mainStyles.container}>
          <div className={styles.conactcsInner}>
            <h4 className={mainStyles.pagesTitle}>Контакты и галерея</h4>
            <div className={styles.contactFlex}>
              <div className={styles.left}>
                <h5 className={styles.contactSubtitle}>Контактные данные:</h5>
                <ul className={styles.contactsList}>
                  <li className={styles.contact}>
                    <Link href="tel:+7 888 555 35 35">
                      Телефон: +7 888 555 35 35
                    </Link>
                  </li>
                  <li className={styles.contact}>
                    <Link href="mailto:thisemailisnotexist@gmail.com">
                      Почта: thisemailisnotexist@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={mainStyles.container}>
          <h5 className={styles.contactSubtitle}>Фотогалерея клуба:</h5>
        </div>
        <div className={styles.galleryInner}>
          {galleryData.map((gallery, id) => (
            <GalleryImg key={id} img={gallery.img} />
          ))}
        </div>
      </section>

      <section className={styles.description}>
        <div className={mainStyles.container}>
          <div className={styles.descriptionInner}>
            <p className={mainStyles.text}>
              Fusion начал свою деятельность в мире фитнеса и здоровья с 2010
              года. С момента основания наш фитнес-клуб стремится предоставлять
              высококачественные услуги, вдохновляя людей на активный образ
              жизни и поддерживая их в пути к лучшей версии себя. Мы гордимся
              тем, что на протяжении многих лет Fusion стал местом встречи
              единомышленников, где дружелюбная атмосфера и профессиональные
              тренеры создают идеальные условия для достижения ваших
              фитнес-целей. Наш опыт и энтузиазм позволили нам стать надежным
              партнером на пути к здоровому образу жизни и вдохновить тысячи
              людей к более активной и счастливой жизни.
            </p>
            <p className={mainStyles.text}>
              Наша миссия - вдохновлять и поддерживать наших участников на пути
              к фитнесу и здоровью. Мы верим, что каждый человек имеет потенциал
              стать сильнее, здоровее и счастливее, и наша команда экспертов
              готова помочь вам достичь ваших целей.
            </p>
            <p className={mainStyles.text}>
              Fusion предлагает широкий спектр услуг и возможностей, включая
              современный тренажерный зал с последними инновационными
              технологиями, разнообразные групповые занятия под руководством
              профессиональных тренеров, зоны для функциональных тренировок,
              йоги, пилатеса и многое другое.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.card}>
        <div className={mainStyles.container}>
          <div className={styles.cardInner}>
            <div className={styles.cardLeft}>
              <p className={mainStyles.text}>
                Присоединяйтесь к нам сегодня и станьте частью Fusion!
                Разблокируйте свой потенциал, совершенствуйте свое тело и ум, и
                откройте для себя радость движения и здорового образа жизни.
                Вместе мы сделаем каждый шаг вашего фитнес-путешествия
                увлекательным и незабываемым!
              </p>
            </div>
            <Link href="/card">
              <button className={styles.cardBtn}>Купить карту</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

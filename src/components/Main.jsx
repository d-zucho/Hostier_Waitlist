import styles from '../styles/Main.module.css'
import MainImage from '../Assets/Hero Image (Model).png'
import PurpleImage from '../Assets/Purple Shape.svg'
import PinkImage from '../Assets/Pink Shape.svg'
import BlueImage from '../Assets/Blue Shape.svg'
import Checkmark from '../Assets/Checkmark.svg'
import Button from './Button'

const Main = () => {
  return (
    <main className={styles.main_container}>
      <div className={styles.copy_container}>
        <h1>Host your website in less that 5 minutes</h1>
        <p className={styles.main_copy}>
          With Hosterr, get your website up and running in no more than 5
          minutes with the most competitive pricing packages available online.
        </p>
        <div className={styles.input_cta}>
          <input
            className={styles.email_input}
            type='email'
            name='email'
            id='email'
            placeholder='Enter e-mail address'
          />
          <Button className={styles.join_waitlist} />
        </div>
        <div className={styles.no_spam}>
          <img className={styles.checkmark} src={Checkmark} alt='' />
          <span>No spam, ever. Unsubscribe anytime.</span>
        </div>
      </div>

      {/* ***Hero Images & Shapes**** */}
      <div className={styles.images_container}>
        {/* <div className={styles.image_container}> */}
        <img className={styles.hero_image} src={MainImage} />
        {/* </div> */}
        <img className={styles.purple_shape} src={PurpleImage} alt='' />
        <img className={styles.pink_shape} src={PinkImage} alt='' />
        <img className={styles.blue_shape} src={BlueImage} alt='' />
      </div>
    </main>
  )
}

export default Main

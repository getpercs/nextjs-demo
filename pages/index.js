import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'

function Home() {
  function handleSubscribe() {
    console.info("subscribe")
    window.PERCS.openModal({
      subscribe: {
        required: true,
        headingImage: {
          src: "https://assets.getpercs.com/logo.svg",
        },
        headingText: "Stars, stripes & savings!",
        descriptionText: "Great deals sent straight to your inbox! Connect your wallet & subscribe to get notified about exclusive offers!",
        successHeadingText: "Thanks for signing up!",
        successDescriptionText: "Be on the lookout for new product drops and exclusive offers in your inbox!",
        providers: ["xmtp_messaging"],
      }
    })
  }

  return (
    <main className={styles.main}>
      <h1>NextJS Demo</h1>
      <p>
        Sample NextJS 13 app with integration for Percs SDK.
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
          Subscribe with your wallet
        </p>
        <Button onClick={handleSubscribe}>
          Subscribe
        </Button>
      </div>
      <hr className={styles.hr} />
    </main>
  )
}

export default Home

import Script from "next/script"

import '../global.css'

export default function MyApp({ Component, pageProps }) {

  function handlePercsLoad() {
    window.PERCS.init({
      clientKey: "gjZs6GpK2-7uBQjUbFgaWkTadtoA8J37-aCQxjU8yBZ1u4HAgMnjNBuFt8TJ2Umvbtu9kNAZjN/JBA0HKelPsWY7",
      apiHost: "https://stg-api.getpercs.com",
    })
    document.body.append(document.createElement("percs-modal"))
  }

  return <>
    <Script src="https://assets.getpercs.com/sdk/percs.js" onLoad={handlePercsLoad} />
    <Component {...pageProps} />
  </>
}

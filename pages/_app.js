import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;



//In Next.js, you can add global CSS files by importing them from pages/_app.js.
//You cannot import global CSS anywhere else.

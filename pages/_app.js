import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>Francamaradev</title>
      </head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

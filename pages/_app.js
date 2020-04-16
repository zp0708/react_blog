import 'antd/dist/antd.css'
import '../static/style/pages/comm.css'
import '../static/style/components/header.css'
import '../static/style/pages/index.css'
import '../static/style/components/author.css'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
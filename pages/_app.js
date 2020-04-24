import 'antd/dist/antd.css'
import '../static/style/pages/comm.css'
import '../static/style/components/header.css'
import '../static/style/pages/index.css'
import '../static/style/pages/detail.css'
import '../static/style/components/author.css'
import '../static/style/components/advert.css'
import '../static/style/components/footer.css'
import 'markdown-navbar/dist/navbar.css'
import 'highlight.js/styles/monokai-sublime.css';

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
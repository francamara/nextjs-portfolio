import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Projects from '../components/Projects'
import LatestPosts from '../components/LatestPosts'

// https://tailwindcomponents.com/component/developer-portfolio

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Intro />
      <About />
      <LatestPosts />
      <Projects />
    </div>
  )
}

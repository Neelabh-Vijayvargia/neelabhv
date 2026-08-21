import About from '../components/About'
import Hero from '../components/Hero'
import SocialLinks from '../components/SocialLinks'

export default function Home() {
  return (
    <>
      <SocialLinks />
      <main className="mx-auto flex min-h-dvh w-container-xs flex-col justify-center py-page-bottom sm:w-container">
        <Hero />
        <About />
      </main>
    </>
  )
}

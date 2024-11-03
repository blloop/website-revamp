import Header from './components/Header'
import Introduction from './components/Introduction'
import Highlights from './components/Highlights'
import Skills from './components/Skills'
import CTA from './components/CTA'

export default async function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Highlights />
      <Skills />
      <CTA />
    </>
  )
}

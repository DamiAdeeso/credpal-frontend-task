import DepositInvestment from '../../components/deposit-investment/depositInvestment'
import DownloadCredpal from '../../components/download-credpal/downloadCredpal'
import Faqs from '../../components/faqs/faqs'
import Footer from '../../components/footer/footer'
import Hero from '../../components/hero/hero'
import Navbar from '../../components/navbar/navbar'

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <DepositInvestment />
      <Faqs />
      <DownloadCredpal />
      <Footer />
    </main>
  )
}

export default LandingPage

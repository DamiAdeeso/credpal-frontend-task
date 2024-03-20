import DepositInvestment from '../../components/deposit-investment/depositInvestment'
import DownloadCredpal from '../../components/download-credpal/downloadCredpal'
import Faqs from '../../components/faqs/faqs'
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
    </main>
  )
}

export default LandingPage

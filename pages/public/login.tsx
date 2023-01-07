import Head from 'next/head'
import Header from '../../components/WelcomePage/Header'
import Hero from '../../components/WelcomePage/Hero'
import Footrt from '../../components/WelcomePage/Footrt'
import AboutUs from '../../components/WelcomePage/AboutUs'
import Pricing from "../../components/WelcomePage/Pricing"
import LogInComponent from '../../components/LoginPage/LogInComponent'

export default function WelcomePage() {
  return (
    <>
      <Head>
        <title>Avalanche</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>
      <main className="w-full">
       <Header />
       <div className='w-full h-screen flex justify-center pt-8 items-center bg-gray-900 '>
       <LogInComponent />
       </div>
       <Footrt />
      
      </main>
    </>
  )
}
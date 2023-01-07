import Link from "next/link"
import { useRouter } from "next/router"




export default function Hero() {

  const router = useRouter();
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col mt-10  items-center" id="home">
        <div className="w-[70%] pl-2 h-[200px] flex items-center justify-center mt-[100px] sm:mt-[170px]">
        <h1 className="sm:text-5xl text-center md:text-7xl text-3xl text-white font-extrabold"><span
         className="text-red-500">Avalanche</span> get access to several games and apps </h1>
         </div>
        <div className="md:mt-14 justify-center mt-4 flex sm:w-[50%] w-[80%] sm:h-[60px] items-center sm:justify-center gap-x-4 sm:flex-row flex-col">
        <button type="button" className="w-[80%] sm:w-fit text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"  onClick={() => router.push('/public/marketplace')}>marketplace</button>

        <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <Link href="/public/login" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              log in to your account
            </Link>
          </button>
        </div>
    </div>
  )
}


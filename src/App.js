import Header from "./components/Header/Header";
import { Tab } from '@headlessui/react'
import barCode from "./assets/images/barImage.jpeg"
import BtcLogo from "./assets/images/bit.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <>
      <Header/>
      <div className="h-screen bg-gray-200 pt-10 md:pt-20 px-2">

         <div className="w-full md:w-5/12  p-2 shadow-md rounded-lg mx-auto bg-white ">

       <Tab.Group>
      <Tab.List className="flex p-1 space-x-1 -mt-2 bg-white rounded-md">
        <Tab className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-black rounded-t-lg',
                  selected
                    ? 'bg-white  border-t-4 border-blue-500 text-black-100 '
                    : 'text-black-100  hover:bg-white/[0.12] hover:text-gray-300 border-b-2 border-r-2 border-gray-300'
                )
              }>Send</Tab>
        <Tab className={({ selected }) =>
                   classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-black rounded-t-lg',
                  selected
                    ? 'bg-white  border-t-4 border-blue-500 text-black-100 '
                    : 'text-black-100  hover:bg-white/[0.12] hover:text-gray-300 border-b-2 border-l-2 border-gray-300'
                )
              }>Receive</Tab>

      </Tab.List>
      <Tab.Panels>
              <Tab.Panel>
                <div>
                  <div className="my-5 flex gap-2 px-5">
                    <div className="flex-1">
                    
                    </div>
                    <div className="flex-1">
                     
                        <div className="border-2 border-gray-400 rounded-md">
                          <input className="w-full outline-none my-2"  type="text" dir="rtl" placeholder="0.0" />
                          <p className="text-right">$0</p>
                          </div>
                     
                      <p className="mt-3 text-gray-400 font-thin text-sm">in wallet: <span className="ml-4 font-semibold">0.0</span></p>
                  </div>
                  </div>
                  {/* form */}
     	<form className="my-4 flex w-full p-3 border-t-2 border-gray-300">
    	<input className="flex-1  rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white outline-none" placeholder="Type here..."/>
		<button className="flex-2  px-1 md:px-8 rounded-r-lg bg-blue-200  text-blue-600 text-xs md:text-sm font-bold p-4 ">Terra Wallet address</button>
                  </form>
                 <div className="my-5  p-3 border-t-2 border-gray-300">
                    <button class="w-full px-8 rounded-lg bg-blue-700  text-white font-semi-bold p-4 ">Send to Address</button>
                  </div>
                </div>
        </Tab.Panel>
              <Tab.Panel className="p-10">

                <div className="border-2 border-gray-300 my-5 rounded-md">
                  <div className="flex  justify-center ">
                    <img className="h-24 w-24 my-3" src={ barCode } alt="" />
                  </div>
                  <div>
                    <div className="flex items-center pl-2 border-t-2 border-gray-300 ">
                      <img className="h-10 w-14 my-3" src={ BtcLogo } alt="" />
                      <div>
                        <p className="font-bold">Asset</p>
                        <p className="text-gray-400">Bitcoin</p>
                      </div>
                      </div>
                  </div>
                  <div className="my-5 pl-5 py-3 border-t-2 border-gray-300">
                     <p className="font-bold">BTC Address</p>
                        <p className="text-gray-400 p-0 text-xs md:text-sm">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</p>
                  </div>
                </div>
                <p className="font-thin text-xs text-gray-400">Only send Bitcoin(BTC) to this address</p>
        </Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
      </div>
    </div>
    </>
  );
}

export default App;

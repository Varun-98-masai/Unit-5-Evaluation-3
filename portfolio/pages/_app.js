import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'


export default function App({ Component, pageProps }) {
  return <div>

   <ChakraProvider>
   
   <Component {...pageProps} />
   </ChakraProvider>
  </div> 
}

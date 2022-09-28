import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Function to check respectully if user is logged i or not and route that user to login or home route
    const checkUserLoggedIn = async () => {
      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) {
          router.push("/");
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkUserLoggedIn();
  }, []);

  // The minute the router change then the useEffect will be triggered
  useEffect(() => {
    // set isLoading to false in the last step
    const handleComplete = () => {
        setIsLoading(false)
    }
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      //Stop events from happening if complete
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return isLoading ? <div>Loading...</div> : <Component {...pageProps} />
}

export default MyApp

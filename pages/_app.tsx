import "../styles/globals.css"
import type { AppProps } from "next/app"
import { LazyMotion, m, domAnimation, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "next-themes"
import Header from "@/components/Header"

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider defaultTheme='system' enableSystem disableTransitionOnChange>
        <LazyMotion features={domAnimation}>
          <div className='wrapper'>
            <Header />
            <AnimatePresence
              exitBeforeEnter
              onExitComplete={() => window.scrollTo(0, 0)}>
              <m.div
                key={router.asPath}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}>
                <div className='main'>
                  <Component {...pageProps} />
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </LazyMotion>
    </ThemeProvider>
  )
}

export default MyApp

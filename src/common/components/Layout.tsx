import { ReactNode } from 'react'

import useDeviceDetect from 'hooks/useDeviceDetect'

import Header from 'components/Header'
import MobileFooter from 'components/MobileFooter'
import Footer from 'components/Footer'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const device = useDeviceDetect()
  return (
    <>
      <Header />
      <main>{children}</main>
      {
        device.isMobile() ?
        <>
          <MobileFooter/>
        </> :
        <>
          <Footer/>
        </>
      }
    </>
  )
}

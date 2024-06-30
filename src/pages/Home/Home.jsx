import React from 'react'
import { HeroBanner } from '../../features/pages/Home/HeroBanner/HeroBanner'
import { Discover } from '../../features/pages/Home/Discover/Discover'
import { Health } from '../../features/pages/Home/Health/Health'
import { Meet } from '../../features/pages/Home/Meet/Meet'
import { Addressing } from '../../features/pages/Home/Addressing/Addressing'
import { Approved } from '../../features/pages/Home/Approved/Approved'
import { Join } from '../../features/pages/Home/Join/Join'
import { Journey } from '../../features/pages/Home/Journey/Journey'
import { Faqs } from '../../features/pages/Home/Faqs/Faqs'

export const Home = () => {
  return (
    <>
      <HeroBanner />
      <Discover />
      <Health />
      <Meet />
      <Addressing />
      <Approved />
      <Join />
      <Journey />
      <Faqs />
    </>
  )
}

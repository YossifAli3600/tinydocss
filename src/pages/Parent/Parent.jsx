import React from 'react'
import { Journey } from '../../features/pages/Home/Journey/Journey'
import { HeroBanner } from '../../features/pages/Home/HeroBanner/HeroBanner'

export const Parent = () => {
    return (
        <>
            <HeroBanner />
            <Journey />
        </>
    )
}

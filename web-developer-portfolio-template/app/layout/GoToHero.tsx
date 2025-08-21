import React from 'react'
import { BackToHero } from '../components/BackToHero';
interface Props {
    children: React.ReactNode
}
export const GoToHero = ({ children }: Props) => {
    return (
        <section className='relative'>
            {children}
            <BackToHero />
        </section>
    )
}

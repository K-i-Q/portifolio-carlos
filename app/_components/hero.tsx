'use client';
import { gsap } from 'gsap';
import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

const Hero = () => {
    const heroTitleRef = useRef(null);
    const chevronRef = useRef(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { delay: 0.5 } });
        tl.fromTo(heroTitleRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(chevronRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(chevronRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
            .fromTo(chevronRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5")
    }, [])

    return (
        <>
            <section className='h-screen relative bg-slate-800 w-full flex flex-col items-center justify-center'>
                <div ref={heroTitleRef} className='text-slate-100 text-5xl hero text-center'>
                    Portifólio do Carlos
                </div>
                <ChevronDown ref={chevronRef} className='text-slate-100 absolute bottom-6 cursor-pointer h-12 w-12 hover:opacity-80' />
            </section>
        </>
    )
}

export default Hero;
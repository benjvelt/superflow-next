"use client";

import Image from 'next/image'
import { useEffect } from 'react'
import { initSuperflow } from '@usesuperflow/client'

export default function Home() {

useEffect(()=>{
  initSuperflow('jweIj5yb3k6WElsyHyp3', {
    projectId: '7562859393923502'
  });

})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test out Superflow by hightlighting this text.
    </main>
  )
}

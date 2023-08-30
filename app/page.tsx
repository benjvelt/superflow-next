"use client";

import Image from 'next/image'
import { useEffect } from 'react'
import { initSuperflow } from '@usesuperflow/client'

export default function Home() {

useEffect(()=>{
  initSuperflow('UK94lyDJqZtHiKGmTo2f', {
    projectId: '4382367812143960'
  });

})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test out Superflow by highlighting this text.
    </main>
  )
}

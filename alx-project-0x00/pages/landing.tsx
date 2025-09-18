import React from "react"
import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Welcome to the Landing Page</h1>
      
      {/* Render Card component */}
      <Card />
      <Card />
      <Card />
    </main>
  )
}

export default Landing

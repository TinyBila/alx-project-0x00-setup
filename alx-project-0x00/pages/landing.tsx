import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Cards */}
      <Card />
      <Card />

      {/* Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap">
        <Button title="Small" className="text-sm px-2 py-1 rounded-sm" />
        <Button title="Medium" className="text-base px-4 py-2 rounded-md" />
        <Button title="Large" className="text-lg px-6 py-3 rounded-full" />
	<Button styles="rounded-lg" />
      </div>
    </div>
  )
}

export default Landing

import React from 'react'

interface Props {
  title: string,
  subtitle: string
}

const Hero: React.FC<Props> = ({title, subtitle}) => {
  return (
    <div className="container py-6">
      <p className="font-semibold text-3xl text-white my-3">{title}</p>
      <p className="text-lg text-white my-2">{subtitle}</p>
    </div>
  )
}

export default Hero

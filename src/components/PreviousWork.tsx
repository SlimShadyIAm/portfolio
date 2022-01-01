import React from 'react'
import ettImg from '../assets/img/works/ett-dashboard/01.png'

interface Props {

}

const PreviousWork = (props: Props) => {
  return (
    <div className="container mt-8 mb-16">
      <div className="font-bold text-gray-800 text-3xl mb-3">Previous Work</div>
      <div className="space-y-8">
        <Work />
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div className="custom-shadow">
      <div className="bg-slim-blue px-4 py-2 text-white font-mono font-normal uppercase rounded-t-sm">ETT DASHBOARD</div>
      <div className="flex py-4 flex-row">
        <div className="grow-[2] px-4 flex justify-center items-center">
          <img src={ettImg} />
        </div>
        <div className="grow-[3] px-4 items-center">This was my Bachelor graduation design project. It was a dashboard created for Esports Team Twente, who wanted a centralized dashboard where you could upload replay files from game, run them through a data analysis pipeline, and store and display statistics from matches. We created the frontend, backend, API and database implementation to solve their use case.</div>
      </div>
    </div>
  )
}

export default PreviousWork

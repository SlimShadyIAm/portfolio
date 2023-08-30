import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const SocialButton = ({children}: Props) => {
  return (
    <div className="text-zinc-400/75" >
      {children}
    </div>
  )
}

export default SocialButton

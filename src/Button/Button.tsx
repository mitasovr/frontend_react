import { FC, useEffect } from 'react'
import { shareWrapper } from '../shares/helpers'


type ButtonProps = {
  text?: string
  onClick?: () => void
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    text = 'Hello world 3',
    onClick,
  } = props

  useEffect(() => {
    console.log('Button created')

    return () => {
      console.log('Button destroyed')
    }
  }, [])


  return (
    <button onClick={ onClick }>{ text }</button>
  )
}

export const ButtonShared = shareWrapper(Button)
import React from 'react'

const Inputs = () => {
  const onClickForm = (ev: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    console.log('controlled: ', ev.currentTarget)
    console.log('uncontrolled: ' /* вставить value2 */)
  }
  const myRef = React.useRef(null)
  myRef.current.return(
    <form onClick={onClickForm}>
      <input placeholder="controlled" />
      <input placeholder="uncontrolled" />
      <button>Отправить заявку на кредит</button>
    </form>,
  )
}

export function App() {
  return (
    <>
      <Inputs />
    </>
  )
}

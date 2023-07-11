import React from 'react'
import { Button } from 'semantic-ui-react'
import './HePage.scss'

export function HePage (props) {
  const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props

  return (
    <div className='he-page-admin'>
      <h2>{title}</h2>
      <div>
        {btnTitle && (
          <Button positive onClick={btnClick}>
            {btnTitle}
          </Button>
        )}
        {btnTitleTwo && (
          <Button negative onClick={btnClickTwo}>
            {btnTitleTwo}
          </Button>
        )}
      </div>
    </div>
  )
}

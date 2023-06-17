import React from 'react'
import { LoginAdmin } from '../../pages/Admin/LoginAdmin'
import { useAuth } from '../../hooks'
import './AdminLayout.scss'

export function AdminLayout (props) {
  const { children } = props
  const { auth } = useAuth()

  if (!auth) return <LoginAdmin />

  return <div>{children}</div>
}

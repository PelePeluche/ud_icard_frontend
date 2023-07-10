import React, { useEffect } from 'react'
import { HePage } from '../../components/Admin'
import { useUser } from '../../hooks/useUser'

export function UsersAdmin () {
  const { loading, users, getUsers } = useUser()

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <HePage title='Usuarios' btnTitle='Nuevo usuario' btnTitleTwo='Eliminar usuario'/>
      <h1>Estamos en Users Admin</h1>
    </>
  )
}

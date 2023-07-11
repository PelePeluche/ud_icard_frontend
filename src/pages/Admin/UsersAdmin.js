import React, { useEffect } from 'react'
import { Loader, loading } from 'semantic-ui-react'
import { HePage, TableUsers } from '../../components/Admin'
import { useUser } from '../../hooks/useUser'

export function UsersAdmin () {
  const { loading, users, getUsers } = useUser()

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <HePage title='Usuarios' btnTitle='Nuevo usuario' />
      {loading ? (
        <Loader active inline='centered'>
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}
    </>
  )
}

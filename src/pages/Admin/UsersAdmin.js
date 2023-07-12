import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react'
import { HePage, TableUsers, AddEditUserForm } from '../../components/Admin'
import { ModalBasic } from '../../components/Common'
import { useUser } from '../../hooks/useUser'

export function UsersAdmin () {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const { loading, users, getUsers } = useUser()

  useEffect(() => {
    getUsers()
  }, [])

  const openCloseModal = () => setShowModal(prev => !prev)

  const addUser = () => {
    setTitleModal('Nuevo usuario')
    setContentModal(<AddEditUserForm />)
    openCloseModal()
  }

  return (
    <>
      <HePage title='Usuarios' btnTitle='Nuevo usuario' btnClick={addUser} />
      {loading ? (
        <Loader active inline='centered'>
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  )
}

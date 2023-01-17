import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'

export function Logout({logout}) {
  return (
    <Button icon basic color='red' onClick={logout}>
        <Icon name='log out' />
        Cerrar Sesion
    </Button>
  )
}

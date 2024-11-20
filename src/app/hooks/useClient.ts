import { useContext } from 'react'
import Client from '../services/Client'
import { ClientContext } from '../context/ClientContext'

export function useClient(): Client {
  return useContext(ClientContext)
}

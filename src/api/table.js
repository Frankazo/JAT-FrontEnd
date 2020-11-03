import apiUrl from '../apiConfig'
import axios from 'axios'

export const createTable = (table, user) => {
  return axios({
    url: apiUrl + '/table',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { table }
  })
}
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const TokenKey = 'Access-Token'
const RefreshKey = 'Refresh-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function getRefreshToken () {
  return Cookies.get(RefreshKey)
}

export function setToken (token) {
  Cookies.set(TokenKey, token)
}

export function setRefreshToken (token) {
  Cookies.set(RefreshKey, token)
}

export function removeToken () {
  Cookies.remove(TokenKey)
}

export function removeRefreshToken () {
  Cookies.remove(RefreshKey)
}

export function decodeToken (token) {
  return jwtDecode(token)
}

export function saveStudent (enrollment) {
  Cookies.set('EnrollmentID', enrollment)
}

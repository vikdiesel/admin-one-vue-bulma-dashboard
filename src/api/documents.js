import request from '@/utils/axios'

export function getDocumentsList (params) {
  return request({
    url: '/documents/',
    method: 'GET',
    params
  })
}

export function generateDocument (data) {
  return request({
    url: '/documents/',
    method: 'POST',
    data
  })
}

export function deleteDocument (id) {
  return request({
    url: `/documents/${id}/`,
    method: 'DELETE'
  })
}

import request from '@/utils/axios'

export function getTemplatesList (params) {
  return request({
    url: '/templates/',
    method: 'GET',
    params
  })
}

export function uploadTemplate (data) {
  return request({
    url: '/templates/',
    method: 'POST',
    data
  })
}

export function deleteTemplate (id) {
  return request({
    url: `/templates/${id}/`,
    method: 'DELETE'
  })
}

import request from '@/utils/axios'

export function login (data) {
  return request({
    url: '/auth/token/',
    public: true,
    method: 'POST',
    data
  })
}


import httpInstance from '@/utils/http'

export function loginAPI (data) {
  return httpInstance({
    url: '/login',
    method: "POST",
    data
  })
}
import { createError, eventHandler, getRequestHeader } from 'h3'
import { extractTokenFromAuthorizationHeader } from '~/server/utils/session'

export default eventHandler(async event => {
  const authorizationHeader = getRequestHeader(event, 'Authorization')
  const rtConfig = useRuntimeConfig()
  const apiUrl = rtConfig.API_URL

  if (typeof authorizationHeader === 'undefined') {
    throw createError({
      statusCode: 403,
      statusMessage:
        'Need to pass valid Bearer-authorization header to access this endpoint',
    })
  }

  const requestAccessToken =
    extractTokenFromAuthorizationHeader(authorizationHeader)

  // console.log({ requestAccessToken })

  const result = await $fetch(`${apiUrl}/api/users/me?populate=*`, {
    headers: {
      Authorization: `Bearer ${requestAccessToken}`,
    },
  })

  // console.log({ requestAccessToken, result })

  return result
})

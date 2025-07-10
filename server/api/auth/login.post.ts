import { createError, eventHandler, readBody } from 'h3'
/*
 * DISCLAIMER!
 * This is a demo implementation, please create your own handlers
 */

export default eventHandler(async event => {
  const body = await readBody(event)
  const rtConfig = useRuntimeConfig()
  const apiUrl = rtConfig.API_URL
  // const result = credentialsSchema
  // const { identifier, password } = result.data
  interface AuthResult {
    data: any
    [key: string]: any
  }

  const result = await $fetch<AuthResult>(`${apiUrl}/api/auth/local`, {
    body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  // console.log({ result })

  if (result.data === null) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Unauthorized, invalid credentials',
    })
  }

  // Emulate successful login
  // const user = await getUser(result.user.username)

  // console.log({ user })

  // Sign the tokens
  // const tokens = await createUserTokens(user, result.jwt)

  // await function createUserTokens() {
  //   const accessToken = result.jwt
  //   const refreshToken = result.jwt

  //   return {
  //     accessToken,
  //     refreshToken,
  //   }
  // }

  return {
    token: {
      accessToken: result.jwt,
      refreshToken: result.jwt,
    },
  }
})

'use server'

import { cookies } from "next/headers";
import { Token } from "../../../types";

export async function setCookies(response: Token) {
  const cookieStore = await cookies()
  cookieStore.set('token', response.token)
  cookieStore.set('email', response.email)
}

export async function getCookies() {
  const cookieStore = await cookies()
  return cookieStore.get('token')?.value
}
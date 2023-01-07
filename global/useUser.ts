import create from 'zustand'
import Cookies from 'js-cookie'
import type { User } from '../model/index'

const data : User = {}

export const useUser = create((set) => ({
 data,
  setUser: (user :User) => set({
    data : user
}),
  removeUser: () => set({data:{

  }}),
}))
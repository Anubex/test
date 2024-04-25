/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Props {
  [key: string]: any
}

export interface ErrorResponseProps {
  code: string
  message: string
}

export interface UserPermissionProps {
  createRole: boolean
  createUser: boolean
  toggleRole: boolean
  toggleUser: boolean
  updateRole: boolean
  updateUser: boolean
  viewCustomer: boolean
}

export interface UserInformationProps {
  contactNumber: string
  displayName: string
  email: string
  firstName: string
  lastName: string
  status: string
  username: string
  permissions: UserPermissionProps
}

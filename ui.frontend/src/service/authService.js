import people from '@/repository/users/people.json'

class AuthService {
  doLogin (user) {
    const { logins } = people
    const validUser = logins.find(login => login.login === user.user)

    if (!validUser) {
      return {
        status: 200,
        type: 'Error',
        msg: 'Ops, usuário inválido. Tente novamente!'
      }
    } else {
      const validPassForUser = (validUser.password === user.userPass)
      console.log(validPassForUser)
      if (!validPassForUser) {
        return {
          status: 200,
          type: 'Error',
          msg: 'Ops, senha inválida. Tente novamente!'
        }
      } else {
        return {
          status: 200,
          type: 'Success',
          msg: ''
        }
      }
    }
  }
}

// SINGLETON
export const authService = new AuthService()

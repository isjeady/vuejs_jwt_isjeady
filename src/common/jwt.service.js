const ID_TOKEN_KEY = 'id_token'

export default {
  getToken () {
    return localStorage.getItem(ID_TOKEN_KEY)
  },

  saveToken(token) {
    localStorage.setItem(ID_TOKEN_KEY, token)
  },

  destroyToken () {
    console.log('REMOVE TOKEN');
    localStorage.removeItem(ID_TOKEN_KEY)
  }
}

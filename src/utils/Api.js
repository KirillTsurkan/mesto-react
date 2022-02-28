  class Api {
  constructor({url, token}) {
    this._url = url
    this._token = token
  }
// общая функция для промиса и ошибки
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
//Получение карточек с сервера
  getCards() {
    return fetch(`${this._url}cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkResponse)
  }
// получение данных профиля с сервера
  getUserInformation() {
    return fetch(`${this._url}users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponse)
  }
// редактирование профиля
  editProfile(name, job) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: job
      }),
    })
      .then(this._checkResponse)
  }

//редактирование аватарки
  editAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data
    }),
  })
  .then(this._checkResponse)
  }

//Добавление карточки
  addCard(name,link) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
  })
  .then(this._checkResponse)
  }

  getData() {
    return Promise.all([this.getCards(), this.getUserInformation()]);
  }

  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
    .then(this._checkResponse)
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._url}cards/likes/${id}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this._token,
      },
    })
    .then(this._checkResponse)
  }
};

const apiUrl = 'https://mesto.nomoreparties.co/v1/cohort-34/'
const token =  '98faacdb-ea63-49dd-9d5d-7edc32da3ca2'
const api = new Api({url: apiUrl, token})
export default api;




import { useState } from 'react'

function Login() {
  /* const [username, setUsername] = useState('') //username этот состояние setUsername это функция которая меняет username
  const [password, setPassword] = useState('') //тоже самое для пароля */

  const [data, setData] = useState({ username: '', password: '' }) // при изменениее одного из значений useState вызовется stateData и измениттся массив data

  function handleFormSubmit(event) {
    event.preventDefault() /* // прервать переход при нажатии login кнопки */

    /* const userData = {
      //прочитать значения логина и пароля которые мы дали как свойства в input
      //сохраняем значения из нашего хука в перменные после ввода текста onChange
      username: username,
      password: password,
    } */

    console.log(data) /* вывод в консоль пароля и имя пользователя */
    alert(
      JSON.stringify(
        data
      ) /* конвертирование текста в строку для корректного отображения текста в нашем уведомления о принятии пароля js в json */
    )
  }

  function handleInputChange(e, name) {
    setData({
      ...data,
      [name]: e.target.value,
    }) /* чтобы мы могли изменить одно из значений нам необходимо использовать spread оператор ...data и далее мы выбираем какой значение изменить name = username или password */
  }

  return (
    <>
      <h1>Login form</h1>
      <form
        onSubmit={
          handleFormSubmit
        } /* //принажатии на кнопку выполняться определенные действия onSubmit */
      >
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) =>
              handleInputChange(e, 'username')
            } /* передаем e и name в нашу функцию */

            /* {(e) => setData({ ...data, username: e.target.value }) */
            /* чтобы мы могли изменить одно из значений нам необходимо использовать spread оператор и далее мы выбираем какой значение изменить */
            /* name="username" более не нужны т.к. раньше мы их использовали для получения значений*/
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
            /* name="password" */
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  ) /* //чтобы наш иннпут отображался при вводе нам нужно вызвать обработчик onChange */
} /* //e.target.value значение которая пользователь ввел в инпут гле e == event */

export default Login

/* console.log({
      username: event.target.username.value,
      password: event.target.password.value
    }) */

/* console.log(event.target.username.value) // показать в консоле имя пользователя
    console.log(event.target.password.value) */

/* //строка username постоянно меняется и отслеживается хуком useState, это и называется контролируемым инпутом
//value отвечает за значение которое мы вводим в поле, а onChange За его изменение привводе текста */

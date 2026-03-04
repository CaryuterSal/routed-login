import {matches} from './utils/password-manager.js';
import {useContext, useRef, useState} from 'react';
import {SessionContext} from '../hooks/context/SessionContext.js';
import {UserDataContext} from '../hooks/context/UserDataContext.js';

function LoginForm(){
  const usernameInputRef = useRef()
  const passwordInputRef = useRef()

  const {userData, setUserData} = useContext(UserDataContext)
  const {sessionContext, setSessionContext} = useContext(SessionContext)

  const {error, setError} = useState(null)
  const {isPasswordEmpty, setIsPasswordEmpty} = useState(false)
  const {isUsernameEmpty, setIsUsernameEmpty} = useState(false)

  function handleLoginForm(){
    const username = usernameInputRef.current.value
    if(!username) setIsUsernameEmpty(true)
    const password = passwordInputRef.current.value
    if(!password) setIsPasswordEmpty(true)

    const userFound = userData.find(user => user.username === username)
    if(!userFound) return handleOnFailure();

    const isMatch = matches(password, userFound.password)
    isMatch ? handleOnSuccess() : handleOnFailure()

    function handleOnFailure(){
      setError('Invalid username or password')
    }

    function handleOnSuccess(){
      const {password, ...secureUser} = userFound
      setSessionContext(secureUser)
    }
  }

  const clearErrors = () => {
    setIsUsernameEmpty(false)
    setIsPasswordEmpty(false)
  }

  const clearInputs = () => {
    usernameInputRef.current.value = ''
    passwordInputRef.current.value = ''
  }

  return <>
    <h1>Login</h1>
    <p>{error}</p>
    <form>
      <input ref={usernameInputRef} type='email' placeholder='20243ds001@utez.edu.mx' onChange={clearErrors}/>
      <p>{isUsernameEmpty && 'El campo es obligatorio'}</p>
      <input ref={passwordInputRef} type='password' placeholder='Inserta tu contraseña' onChange={clearErrors}/>
      <p>{isPasswordEmpty && 'El campo es obligatorio'}</p>
      <button onClick={ e => {
        e.preventDefault()
        handleLoginForm()
        clearInputs()
      }}>Login</button>
      <p>{sessionContext && 'Logged in'}</p>
    </form>
  </>
}

export default LoginForm

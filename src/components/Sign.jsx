import React from 'react'
import cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'

function Sign() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleChange(event) {
    const { name, value } = event.target
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }

  function handleSubmit() {
    let flag = 0;
    if (cookies.get('users')) {
      const existingUser = JSON.parse(cookies.get('users'))
      existingUser.forEach((user) => {
        if (user.email === email && user.password === password) {
          flag = 1;
          cookies.set('user', JSON.stringify({ email, password }))
          navigate('/products')
        }
      });

      if (flag === 1) {
        alert(`Signin Success! - Email: ${email}, Password: ${password}`)
      } else {
        alert("Signin Failed")
      }
    } else {
      alert("Signup First")
    }
  }

  return (
    <div className="main-content common">
      <table className='border border-gray-300 shadow-xl rounded-lg'>
        <tbody>
          <tr>
            <td className="p-[2vw]" colSpan={2}>
              <h1 className="underline">
                Signin Here
              </h1>
            </td>
          </tr>

          <tr>
            <td className="p-[2vw]">
              <label htmlFor="email">Email:</label>
            </td>
            <td className="p-[2vw] text-left">
              <input
                value={email}
                onChange={handleChange}
                className='border border-gray-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-yellow-600 focus:ring-1 shadow-lg'
                type="text"
                id="email"
                name="email"
              />
            </td>
          </tr>

          <tr>
            <td className="p-[2vw]">
              <label htmlFor="password">Password:</label>
            </td>
            <td className="p-[2vw] text-left">
              <input
                type="password"
                value={password}
                onChange={handleChange}
                className='border border-gray-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-yellow-600 focus:ring-1 shadow-lg'
                id="password"
                name="password"
              />
            </td>
          </tr>

          <tr>
            <td className="p-[2vw] text-center" colSpan={2}>
              <button
                onClick={handleSubmit}
                className='bg-indigo-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-xl transition duration-900'
              >
                Signin
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Sign
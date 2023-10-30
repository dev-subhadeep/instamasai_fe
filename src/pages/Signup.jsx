import React from "react"
import { backend } from "../utils/constants"
import axios from "axios"

const initialState = {
  name: "",
  email: "",
  gender: "",
  password: "",
  age: 0,
  city: "",
  is_married: false,
}

const Signup = () => {
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === age) {
      setFormState({ ...formState, [name]: +value })
    } else {
      setFormState({ ...formState, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.prevetDefault()
    axios({
      method: "post",
      url: `${backend}/users/register`,
      data: JSON.stringify(formState),
    }).then((res) => console.log("registered successfuly"))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="gender"
          name="gender"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="age"
          name="age"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={handleChange}
        />
      </div>
      <div>
        <select name="is_married" id="is_married" onChange={handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </form>
  )
}

export default Signup

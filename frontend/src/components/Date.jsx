import React from 'react'
import SummaryApi from '../common'

const Date = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    hora: "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  return (
    <div>
  
      
    </div>
  )
}

export default Date

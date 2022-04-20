import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UpdatePassword } from "../services/Auth"


const ChangePassword = ({user, authenticated, handleLogOut}) => {
    let navigate = useNavigate()

    const[formValues, setFormValues] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    })
    
    const handleChange = (e) => {
        setFormValues({ ...formValues, 
            [e.target.name]: e.target.value 
            })
            // console.log(formValues)
    }

    const handleSubmit = async (e, userId) => {
        e.preventDefault()
        await UpdatePassword(formValues, userId)
        console.log(userId)
        console.log(formValues)
        setFormValues({
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        })
        await handleLogOut()
        navigate('/signin')

    }
    

    return ( user && authenticated ) ? (
        <div className="change-password col">
            <div className="card-overlay centered">
                <form className="col" onSubmit={(e)=> handleSubmit(e, user.id)}>
                    <div className="input-wrapper">
                        <label htmlFor="currentPassword">Current Password: </label>
                        <input
                        onChange={handleChange}
                        type="password"
                        name="currentPassword"
                        value={formValues.currentPassword}       
                        required
                        />
                     </div>
                     <div className="input-wrapper">
                        <label htmlFor="newPassword">New Password: </label>
                        <input
                        onChange={handleChange}
                        type="password"
                        name="newPassword"
                        value={formValues.newPassword}       
                        required
                        />
                     </div>
                     <div className="input-wrapper">
                        <label htmlFor="confirmNewPassword">Confirm New Password: </label>
                        <input
                        onChange={handleChange}
                        type="password"
                        name="confirmNewPassword"
                        value={formValues.confirmNewPassword}       
                        required
                        />
                     </div>
                    <button disabled={(
                        !formValues.currentPassword && 
                        !formValues.newPassword && 
                        !formValues.confirmNewPassword &&
                        formValues.newPassword === formValues.confirmNewPassword 
                    )}>
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    ) : (
        <div className="protected">
        <h3>Oops! You must be signed in to do that!</h3>
        <button onClick={()=> navigate('/signin')}>Sign In</button>
      </div>
  
    )

    
}


export default ChangePassword
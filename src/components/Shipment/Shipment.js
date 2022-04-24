import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
        const [user] = useAuthState(auth)

        const [name, setNmae] = useState('');
        const [email, setEmail] = useState('');
        const [address, setAddress] = useState('');
        const [phone, setPhone] = useState('');
        const [error, setError] = useState('');
        // const navigate = useNavigate();
        const handleNameBlur = event => {
            setNmae(event.target.value)
        }

    
        const handleAddressBlur = event => {
            setAddress(event.target.value);
        }
    
        const handlePhoneBlur = event => {
            setPhone(event.target.value);
        }

        const handleCreateUser = event => {
            event.preventDefault();
            const shipping = {name, email, address, phone }
            console.log(shipping);

            
        }
    return (
        <div className="form-container">
        <div>
          <h2 className="form-title">Shipping Information info</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="name">Your name</label>
              <input onBlur={handleNameBlur} type="text" name="name" id="name" required/>
            </div>
            <div className="input-group">
              <label htmlFor="email">Your email</label>
              <input value={user?.email} readOnly type="email" name="email" id="email" required/>
            </div>
            <div className="input-group">
              <label htmlFor="Address">Address</label>
              <input onBlur={handleAddressBlur} type="text" name="text" id="text" required/>
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input onBlur={handlePhoneBlur} type="text" name="phone" id="confirm-password" required/>
            </div>
            <p style={{color:"red"}}>{error}</p>
            <input className="form-submit" type="submit" value="Add shipping" />
          </form>
          <p>
              Already have an account? <Link className="form-link" to='/login'>Login</Link>
          </p>
        </div>
      </div>
    );
};

export default Shipment;
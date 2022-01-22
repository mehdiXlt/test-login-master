import './style/App.css'
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {

    constructor(){
        super()
        this.state={
            fullName:'',
            userName:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered ={
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup' , registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            userName:'',
            email:'',
            password:''
        })
    }
        
    render(){
        return ( 
            <div className='main'>
                <div className="container">

                    <div className='home'>
                            <h3 className='home__title'>Learn to code by <br /> watching others</h3>
                            <span className='home__subtitle'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</span>
                    </div>

                    <div className='home__login'>

                        <div className='home__discount'>
                            <span className='discount'> <span className='blod'>Try it free 7 days</span>then $20/mo. thereafter</span>
                        </div>

                        <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder="Full Name"
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className="form-control form-group"
                            />

                            <input type='text'
                            placeholder="user name"
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className="form-control form-group"
                            />

                            <input type='text'
                            placeholder="email"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className="form-control form-group"
                            />

                            <input type='password'
                            placeholder="password"
                            onChange={this.changePassword}
                            value={this.state.password}
                            className="form-control form-group"
                            />

                            <input type='submit' 
                            className="submit__button"
                            value='Claim your free trial'
                            />

                            
                        </form>

                        <div className='disc'>
                            <span>By clicking the button, you are agreeing to<br /> our <a className='disc__link' href="#">Terms and Services</a></span>
                        </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
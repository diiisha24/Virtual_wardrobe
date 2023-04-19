import React from 'react'
import "../SignUpPage/SignUpPage.css"
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <div className='container'>
        <div className='left'>
            <div className="logo">Closet.io</div>
            <h1 className="create">Create Account</h1>
            <form className="form">
                <div className="det first_det">
                    <lable className="form_label">User Name</lable>
                    <input type="text" placeholder = "Enter User Name"/>
                </div>
                <div className="det">
                    <lable className="form_label">Age</lable>
                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                </div>
                <div className="det">
                    <lable className="form_label">Gender</lable>
                    <select>
                        <option value="0">Select Gender:</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                        <option value="3">Non-Binary</option>
                        <option value="4">Other</option>
                        <option value="5">Prefer Not to Answer</option>
                    </select>
                </div>
                <div className="det">
                    <lable className="form_label">Mobile No.</lable>
                    <input type="number" placeholder = "Enter Mobile No."/>
                </div>
                <div className="det">
                    <lable className="form_label">Email</lable>
                    <input type="email" placeholder = "Enter Email"/>
                </div>
                <div className="det">
                    <lable className="form_label">Password</lable>
                    <input type="password" placeholder = "Enter Password"/>
                </div>
                <div className="det">
                    <lable className="form_label">Skin Color</lable>
                    <select>
                        <option value="0">Select Skin Tone:</option>
                        <option className = "a" value="1"><div className="a">Ivory</div></option>
                        <option value="2"><div className="b">Porcelain</div></option>
                        <option value="3"><div className="c">Pale Ivory</div></option>
                        <option value="4"><div className="d">Warm Ivory</div></option>
                        <option value="5"><div className="e">Sand</div></option>
                        <option value="6"><div className="f">Rose Beige</div></option>
                        <option value="7"><div className="g">Limestone</div></option>
                        <option value="8"><div className="h">Beige</div></option>
                        <option value="9"><div className="i">Sienna</div></option>
                        <option value="10"><div className="j">Honey</div></option>
                        <option value="11"><div className="k">Band</div></option>
                        <option value="12"><div className="l">Almond</div></option>
                        <option value="13"><div className="m">Chestnut</div></option>
                        <option value="14"><div className="n">Bronze</div></option>
                        <option value="15"><div className="o">Umber</div></option>
                        <option value="16"><div className="p">Golden</div></option>
                        <option value="17"><div className="q">Espresso</div></option>
                        <option value="18"><div className="r">Chocolate</div></option>
                      </select>
                </div>

                <div className="det">
                    <lable className="form_label">Body Type</lable>
                    <select>
                        <option value="0">Select Body Type:</option>
                        <option value="1" className = "female">Rectangle</option>
                        <option value="2" className = "female">Triangle or "Pear"</option>
                        <option value="3" className = "female">Spoon</option>
                        <option value="4" className = "female">Hourglass</option>
                        <option value="5" className = "female">Top Hourglass</option>
                        <option value="6" className = "female">Bottom Hourglass</option>
                        <option value="7" className = "female">Inverted Triangle</option>
                        <option value="8" className = "female">Round</option>
                        <option value="9" className = "female">Diamond</option>
                        <option value="10" className = "female">Athletic</option>
                        <option value="11" className = "Male">Rectangle</option>
                        <option value="12" className = "Male">Inverted Triangle</option>
                        <option value="13" className = "Male">Trapezoid</option>
                        <option value="14" className = "Male">Triangle</option>
                        <option value="15" className = "Male">Oval</option>
                      </select>
                </div>
                <div className="det">
                    <input type="submit" className="submit"/>
                </div>
                <div className="footer">Already a user? <Link to="/login">Sign In</Link></div>
            </form>
        </div>
        <div className='right'></div>
    </div>
  )
}

export default SignUpPage

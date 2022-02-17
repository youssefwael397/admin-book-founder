import React from 'react'
import './Help.css'
function Help() {
    return (
        <div>
            <div className="alert mt-5 w-50 mx-auto">
                <div className="p-2" direction="rtl">
                    <h4>You can contact us for help or Business from these links</h4>
                </div>
            </div>

            <table className="table table-hover container text-center w-50">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">method</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>1</td>
                        <td>FaceBook</td>
                        <td><a href="https://www.facebook.com/profile.php?id=100013882777343"><i className="fab fa-facebook-square fa-2x"> </i></a></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>WhatsApp</td>
                        <td><a href="https://api.whatsapp.com/send?phone=201010932484"><i className="fab fa-whatsapp-square fa-2x"></i></a></td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>LinkedIn</td>
                        <td><a href="https://www.linkedin.com/in/youssef-wael/"><i className="fab fa-linkedin fa-2x"> </i></a></td>
                    </tr>


                    <tr><td>4</td>
                        <td>Google</td>
                        <td><a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=youssefwael397gmail.com&tf=1"><i className="fab fa-google-plus-g fa-2x"> </i></a></td>
                    </tr>

                    <tr><td>5</td>
                        <td>Twitter</td>
                        <td><a href="https://twitter.com/_youssef_waael_"><i className="fab fa-twitter-square fa-2x"></i></a></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Help

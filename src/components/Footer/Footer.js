import React from 'react'
import './Footer.css'
function Footer() {
    return (

        <footer className="pt-4 mt-5">

            <div className="container text-center text-md-left">

                <div className="row">

                    <div className="col-md-6 mx-auto">

                        <h5 className="font-weight-bold mt-3 mb-4">
                            Book <span> Founder</span>
                        </h5>
                        <p>
                            This website was created May 10, 2021,<br />
                            which was requested by Dr. Fayza Ahmed
                        </p>
                        <p>
                            This website is about selling books to earn information. <br />We
                            must know the benifits what we earn from reading books and we
                            should encourage people to read more and more.
                        </p>
                    </div>

                    <hr className=" w-100 d-md-none" />

                </div>

            </div>

            <hr />

            {/* social buttons */}
            <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1" href='https://www.facebook.com/profile.php?id=100013882777343' target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-facebook-f fa-lg"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-tw mx-1" href='https://twitter.com/_youssef_waael_' target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-lg"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-gplus mx-1" href='https://mail.google.com/mail/u/1/?fs=1&to=youssefwael397gmail.com&tf=cm' target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-google-plus-g fa-lg"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn-floating btn-li mx-1" href='https://www.linkedin.com/in/youssef-wael/' target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in fa-lg"> </i>
                    </a>
                </li>

            </ul>

            <div className="footer-copyright text-center py-3">
                © 2021 Copyright:
                <a href='/'> bookFounder.com</a>
            </div>
        </footer >

    )
}

export default Footer

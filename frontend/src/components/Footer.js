import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='footer--upper'>
                <div className='footer--upper--left'>


                    <h1>Let's stay connected</h1>
                    <p>Hear first-hand about exclusive product launches and more!</p>
                    <input placeholder='Enter your email' className='footer--upper--search'></input>
                    <div>

                        <img src='..\footer-icons\iconFacebook.png' />
                        <img src='..\footer-icons\iconInstagram.png' />
                        <img src='..\footer-icons\iconTwitter.png' />
                    </div>

                </div>
                <div></div>
                <div className='footer--upper--right'>
                    <p>Shipping & Refunds</p>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Careers</p>
                    <p>Order Status</p>
                    <p>Store Locator</p>

                </div>
            </div>

            <div className='footer--lower'>
                <div className='footer--lower--left'>

                    <p>©2023 The Lulu Company. All Rights Reserved</p>
                    <p>Boston, MA 02111 | 1.888.888.888</p>
                </div >

                <p className='footer--lower--terms'>Terms & Conditions</p>
                <p className='footer--lower--privacy'>Privacy Notice</p>
            </div>
        </div>

    )
}

export default Footer
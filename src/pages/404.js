import React, { useState } from 'react'
import '../styles/notfound.css'

const NotFound = () => {
    const [sec, setSec] = useState(5)

    // using lifecycle to run a function on initial render
    React.useEffect(() => {
        // using setinterval for change the sec value on useState
        const timer = setInterval(() => {
            setSec(sec - 1)
            if (sec === 0) {
                clearInterval(timer)
                // if sec is 0, redirect to home page
                window.location.href = '/'
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [sec])

    return (
        <div className='notfound'>
            <div>
                <h1>404</h1>
                <p style={{ textAlign: 'center', marginTop: 16 }}>
                    redirecting to home in {sec}
                </p>
            </div>
            <h3>Not Found</h3>
        </div>
    )
}

export default NotFound

import React from 'react'

function Home() {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user);
    return (
        <>
            hello { user.name }
        </>
    )
}

export default Home

import { useState } from "react"

export function TwitterFollowCard({children, userName, initialIsFollowing}) {
    // useState es un hook
    // UseState nos devuelve un array de dos posiciones 0, y 1 que son el valor y una función que recibe un valor para settear el estado.
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

   
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                src= {`https://unavatar.io/${userName}`}
                alt="" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName' >@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick} > 
                    {text}
                </button>
            </aside>
        </article>
    )
}
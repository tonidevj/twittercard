import { useState } from "react"

export const TwitterFollowCard = ({ children, username }) =>{
    const [isFolllowing, setIsFolowing] = useState(false);
    const text = isFolllowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFolllowing
    ? 'p-1.5 pl-6 pr-6 pointer-events-auto font-bold bg-white text-black border-none rounded-full hover:bg-red-600 transition-all ease-out duration-300'
    :'p-1.5 pl-6 pr-6 pointer-events-auto font-bold bg-white text-black border-none rounded-full hover:bg-cyan-600 transition-all ease-out duration-300'
    const handleClick = () => {
        setIsFolowing(!isFolllowing)
    }
   
    return(
        <article className="flex items-center justify-between gap-4 text-white">
            <header className="flex items-center gap-1">
                <img className="gap-1 w-12 h-12 rounded-full" src={`https://unavatar.io/${username}`} alt="Avatar" />
                <div className="flex flex-col">
                    <strong >{children}</strong>
                    <span className="text-slate-400 opacity-60">@{username}</span>
                </div>
            </header>
            <aside className="">
                <button className={buttonClassName} onClick={handleClick}>
                  {text}
                </button>
            </aside>
        </article>
        
    )
}
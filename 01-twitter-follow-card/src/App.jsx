import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App() {

    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='app'>
        
            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing={false} 
            userName='Alberto_MTB'>
             Alberto MTB
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing userName='elonmask'>
                Elon Mask
            </TwitterFollowCard>

            
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing userName='micael_gallego'>
                Micael Gallego
            </TwitterFollowCard>
           
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing userName='MovistarFutbol'>
                Movistar Futbol
            </TwitterFollowCard>
        </section>
        
        
    )
}
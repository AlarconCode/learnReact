import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App() {

    return (
        <section className='app'>
        
            <TwitterFollowCard
                initialIsFollowing
                userName='Alberto_MTB'>
                Alberto MTB
            </TwitterFollowCard>
            
            <TwitterFollowCard
                initialIsFollowing={false}
                userName='elonmask'>
                Elon Mask
            </TwitterFollowCard>

            <TwitterFollowCard
                initialIsFollowing={false}
                userName='micael_gallego'>
                Micael Gallego
            </TwitterFollowCard>
           
            <TwitterFollowCard  
                initialIsFollowing
                userName='MovistarFutbol'>
                Movistar Futbol
            </TwitterFollowCard>

        </section>
        
        
    )
}
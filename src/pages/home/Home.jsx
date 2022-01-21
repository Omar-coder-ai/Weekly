import Articles from '../../components/Articles/Articles'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <Articles />
            <Sidebar />
            
        </div>

    )
}

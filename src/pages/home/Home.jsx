import Articles from '../../components/Articles/Articles'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import {Link} from 'react-router-dom'
import './home.css'


export default function Home({ articles }) {
       
    return (
        <div className='home'>
            <Articles />
            <Sidebar /> 
        </div>

    );
}

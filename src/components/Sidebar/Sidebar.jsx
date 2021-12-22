import './sidebar.css'
import SidePreview from './SidePreview'


export default function Sidebar() {
    return (
        <div className='sidebar'>             
            
                <div className="sidebarTitle">Ultime da WEEKLY</div>
                
            <div className="sidebarItem">
               <SidePreview />
               
               <SidePreview />
               <SidePreview />
               <SidePreview />
               <SidePreview />
               <SidePreview />



            </div>
        </div>
    )
}

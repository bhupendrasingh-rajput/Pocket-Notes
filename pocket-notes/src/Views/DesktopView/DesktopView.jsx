import { Routes, Route } from 'react-router-dom';
import DesktopSidebar from '../../Components/DesktopSidebar/DesktopSidebar';
import Mainpage from '../../Pages/Mainpage/Mainpage';
import NotesPage from '../../Pages/Notespage/Notespage';
import './DesktopView.css';

const DesktopView = () => {
    return (
        <div className='desktop-view'>
            <DesktopSidebar />
            <Routes>
                <Route path='/' element={<Mainpage />} />
                <Route path='/notes' element={<NotesPage />} />
            </Routes>
        </div>
    )
}

export default DesktopView;
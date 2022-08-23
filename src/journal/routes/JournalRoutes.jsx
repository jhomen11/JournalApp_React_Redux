import { Route, Routes, Navigate } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"


const JournalRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<JournalPage/>}/>

        <Route path='/*' element={<Navigate to="/"/>} />

      </Routes>
    </div>
  )
}

export default JournalRoutes

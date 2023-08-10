import React from 'react'
import {Routes , Route} from 'react-router-dom'
import { Home , Login, Register , Personel , User, Stories, PostUser, PostPersonel  } from '../index'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PersonelStories } from '../profilId/PersonelStories'
import { PerseonelUserStory } from '../otherUser/PerseonelUserStory'
import { BoxComments } from '../home/post/BoxComments'
import { NotFound } from '../NotFound'


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <ProtectedRoutes><Home/></ProtectedRoutes>} >
            <Route path="getstory/:id/:storiesId" element={<ProtectedRoutes><Stories/></ProtectedRoutes>} />
            <Route path='getcoments/:postsId' element={<ProtectedRoutes><BoxComments/></ProtectedRoutes>} />
           
            </Route>
            <Route path='personel' element={<ProtectedRoutes><Personel/></ProtectedRoutes>} >
            <Route path='*' element={<NotFound/>} />
            <Route path="storiesuser/:storyId" element={<ProtectedRoutes><PersonelStories/></ProtectedRoutes>} />
            <Route path="profil/:personelId" element={<ProtectedRoutes><PostPersonel/></ProtectedRoutes>} />
            </Route>
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path="users/:id" element={<ProtectedRoutes><User/></ProtectedRoutes>}>
            <Route path="p/:postId" element={<ProtectedRoutes><PostUser/></ProtectedRoutes>} />
            <Route path='storieuser/:storyuserId' element={<ProtectedRoutes><PerseonelUserStory/></ProtectedRoutes>} />  
            </Route>
            
            <Route path='*' element={<NotFound/>} />
            
            
           
        </Routes>
    </div>
  )
}

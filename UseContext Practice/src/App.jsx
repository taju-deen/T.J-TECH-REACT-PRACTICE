
import Userprofile from './component/Component/Userprofile'
import UserProvider from './component/Component/UserContext'
import UpdateUser from './component/Component/UpdateUser'

const App = () => {
  return (
    <div>
      <UserProvider>
             <Userprofile></Userprofile>
             <UpdateUser></UpdateUser>
            
      </UserProvider>
  

    </div>
  )
}

export default App
import './App.css';
import { Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/homepage/NavBar.jsx'
import Footer from './components/homepage/Footer.js'
import SQDLCarousel from './components/homepage/Carousel.js'
import Login from './components/lr/Login.js'
import reportWebVitals from './reportWebVitals';
import Register from './components/lr/Register';
import LandingPage from './components/dashboards/LandingPage.js'
import Profile from './components/Profile.js'
import About from './components/About.js'

//global context provider
import ContextProvider from './context/contextProvider';

//teacher invitation acceptance
import Accept from './components/invite/Accept.js'

//subject page tree
import SubjectPage from './components/subject/Subject';
import SingleSubject from './components/subject/SingleSubject';
import NewSubject from './components/subject/NewSubject';
import Module from './components/subject/module/Module';
import NewModule from './components/subject/module/NewModule';
import Session from './components/subject/module/session/Session';
import NewSession from './components/subject/module/session/NewSession';



const AppLayout = ()=>{
  return (
    <div>
      <ContextProvider>
        <NavBar navList = {{about: 'About', login: 'Login', register: 'Register'}}/> 
        <Outlet/>
        <Footer/>
      </ContextProvider>
    </div>
  )
}

const router = createBrowserRouter([
  {
      path: "/",
      element:<AppLayout/>,
      children:[
        {
          path: "/",
          element:<SQDLCarousel/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path:'/dashboard',
          element: <LandingPage/>
        },
        {
          path: '/teacher/accept/:token',
          element: <Accept />
        },
        {
          path:'/profile',
          element: <Profile/>
        },
        {
          path:'/about',
          element: <About/>
        },
        {
          path: '/course',
          element: <SubjectPage/>,
          children:[
            {
              path: 'new',
              element: <NewSubject />
            }, 
            {
              path: ':subjectid',
              element: <SingleSubject />,
             children:[
               {
                 path: 'new',
                 element: <NewModule />
               }, {
                 path: ':moduleid',
                 element: <Module />,
                 children:[

                   {
                     path: 'new',
                     element: <NewSession />
                   }, {
                     path: ':sessionid',
                     element: <Session />
                   }
                 ]
                }
             ]
            }
          ]

        }
      ]
      
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>)



reportWebVitals();
import Profile from './components/Profile'

export default function App() {
  return( 
        <div>
          <Profile 
           img={'./user.jfif'}
           name={'Davi Damasceno de Sousa'} 
           bio={'Estudante de Desenvolvimento de Sistemas'} 
           contact={'+ 55 (85) 99129-8824'} 
           email={'davidamasceno206@gmail.com'} 
           githubUrl={'https://github.com/davitkblade'} 
           instagramUrl={'https://instagram.com/davi._dms'} 
           vercelUrl={'https://vercel.com/davi-damasceno-de-sousas-projects'}
           />
        </div> 
   
  )
}
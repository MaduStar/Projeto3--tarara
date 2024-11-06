// importação de Profile
import Profile from './components/Profile'

export default function App(){
  return(
    <body>
      <Profile
      // Foto 
      img={'./madu.png'} 

      // Nome
      name={'Eduarda Queiroz'} 

      // Biografia
      bio={'Sou artista visual, faço curso técnico em desenvolvimento de sistemas na escola EEEP Dep.Roberto Mesquita '} 

      // Telefone
      phone={'+ 55 (85) 98828-4973'} 

      // Email
      email={'eduardaqueiroz905@gmail.com'} 

      // Links
      instagramUrl={'https://www.instagram.com/_eduarts_q.a/'} 
      githubUrl={'https://github.com/MaduStar'} 
      animeProfileUrl={'https://animeprofile.com.br/participant/madu/'}>
      </Profile>
    </body> 
  )
}
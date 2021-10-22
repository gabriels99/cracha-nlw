const lInksSocialMedia ={

  github: "gabriels99"
  instagram: "gabriel__aguiar09",
  youtube: "/watch?v=5CDI1L092Dw",
  facebook: "Gabriel Aguiar"

} 

   function changeSocialMediaLinks(){
     for (let li of socialLinks.children) {
       const social = li.getAttribute('class')
       
       li.children[0].href = `https://${social}.com/${lInksSocialMedia[social]}`
  }              
}

  changeSocialMediaLinks(){

function getGitHubProfileInfos() 
  const url = `https://api.github.com/users/${LInksSocialMedia.github}`
 
  fetch(url)
   .then(response => response.json())
   .then(data => {
    userName.textContent = data.userName
    userBio.textContent = data.bio
    userImage.src = data.avatar_url
   })

      
    
    
  }
   
getGitHubProfileInfos()





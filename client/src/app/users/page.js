import Link from 'next/link'
const users = async () => {
  const users = await getData();
  return (
   <div>
    <h1>USERS LIST</h1>
    {users.map((user)=>(
        <Link key={user.id} href={`/users/${user.id}`}>
        <h1 style={{fontSize:"0.9rem"}}>{user.title}</h1>
        <p style={{fontSize:"0.7rem"}}>{user.id}</p>
        </Link>
    ))}
   </div>
  )
}

export default users;

async function getData(){
   const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    next:{revalidate:10},
  })
   const posts = await response.json()
   return posts.slice(0,3)
}
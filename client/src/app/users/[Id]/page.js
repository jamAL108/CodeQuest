export default async function user({params , searchParams}){
  const { Id } = params;
  const user = await fetchUser(Id)
  return (
    <div>
      <h1>{user.title}</h1>
      <p>{user.body}</p>
    </div>
  )
}

export async function generateStaticParams(){
  console.log("RENDERING !!!!!")
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data.slice(0,3).map((post)=>({
    id: String(post.id)
  }))
}

async function fetchUser(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    return data
}
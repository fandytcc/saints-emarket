export async function getData(pathname: string) {
  if(!pathname) return 

  const res = await fetch(`${process.env.apiUrl}/${pathname}`, { next: { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
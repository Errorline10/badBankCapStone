import axios from "axios"
export async function addAcount(account, userData) {
  try {
    const response = await axios.get("https://badbankexpress.herokuapp.com/addaccount/"+userData.email+"/"+userData.password+"/"+account, { headers: { Accept: "application/json" } })
    //const response = await axios.get("http://localhost:3000/addaccount/"+userData.email+"/"+userData.password+"/"+account, { headers: { Accept: "application/json" } })
    const data = response.data
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}

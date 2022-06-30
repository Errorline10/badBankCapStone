import axios from "axios"
export async function createNewUser(userData) {
    console.log('Creating new User', userData);
  try {
    //const response = await axios.post("https://badbankexpress.herokuapp.com/createUser", { headers: { Accept: "application/json", data: userData } })
    const response = await axios.get("http://localhost:3000/createUser/"+userData.name+"/"+userData.email+"/"+userData.password, { headers: { Accept: "application/json" } })
    const data = response.data
    console.log(data)
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

import React, { useEffect } from 'react'
import axios from 'axios'

export default function CouchDb() {
  useEffect(() => {
    let username = 'admin';
    let password = 'admin';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    // Getting the data
    // axios.get('http://localhost:5984/couchdbgit/', {
    //   headers: {
    //     'Authorization':`Basic ${token}`,
    //   },
    // }).then((response) => {
    //   // console.log(response)
    //   console.log('The value of the data is ', response.data)
    // })

    // Posting of the Data
    // const EN = {
    //   name: "Sanjay Dimri",
    //   age:29
    // }
    // const data = {
    //   EN
    // }
    // axios.post('http://localhost:5984/couchdbgit/',data.EN, {
    //   headers: {
    //     'Authorization':`Basic ${token}`,
    //   },
    // }).then((response) => {
    //   // console.log(response)
    //   console.log('The value of the data is ', response.data)
    // })

    // Updating the data
    // const EN = {
    //   name: "Palayshwar Dimri",
    //   age:30
    // }
    // const data = {
    //   EN, _rev: "1-4b697821defbdc298e60799d67229a70"
    // }
    // axios.put('http://localhost:5984/couchdbgit/3c2250a01f49fe261e63c61b00000f76',data, {
    //   headers: {
    //     'Authorization':`Basic ${token}`,
    //   },
    // }).then((response) => {
    //   // console.log(response)
    //   console.log('The value of the data is ', response.data)
    // })
    // Deleting the data
  
    // axios.delete('http://localhost:5984/couchdbgit/3c2250a01f49fe261e63c61b00000f76?rev=2-e4e5210720c940e5e94af8d2ee30a012', {
    //   headers: {
    //     'Authorization':`Basic ${token}`,
    //   },
    // }).then((response) => {
    //   // console.log(response)
    //   console.log('The value of the data is ', response.data)
    // })
 },[])
  return (
    <div>
      <h1>Hello World...!</h1>
    </div>
  )
}
import {BASE_URL} from '../config'

export const getGroups = async (token)=>{
    const result = await fetch(BASE_URL + '/group/get/all',{
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization" : "Bearer " + token
                },
        })
    
    const data = await result.json();
    return data;
}

export const getGroupDetail = async (token,groupId)=>{
  const result = await fetch(BASE_URL + '/group/get/' + groupId,{
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + token
              },
      })
  
  const data = await result.json();
  return data;
}

export const toggleGroupModerator = async (token,groupId,userId)=>{
  const result = await fetch(BASE_URL + '/group/access/toggle',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : "Bearer " + token
    },
    body: JSON.stringify({groupId,userId}),
})

const data = await result.json();
return data;
}

export const createGroup = async (token,groupName,image,description)=>{
  const result = await fetch(BASE_URL + '/group/create',{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + token
              },
              body: JSON.stringify({groupName,image,description}),
      })
  
  const data = await result.json();
  return data;
}
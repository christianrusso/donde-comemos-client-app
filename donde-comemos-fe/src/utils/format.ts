export function formatDate(dateObject){
    let day = dateObject.getDate()
    let month = dateObject.getMonth() + 1
    let year = dateObject.getFullYear()

    if(month < 10){
      return `${year}-0${month}-${day}`
    }else{
      return `${year}-${month}-${day}`
    }
  }
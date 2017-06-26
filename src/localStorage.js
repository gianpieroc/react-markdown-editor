export const loadState = () => { 
  try{
    const serializedState = localStorage.getItem('input')
    if (serializedState === null){
      return undefined
    }
    return JSON.parse(serializedState)
  }catch(e){
    return undefined
  }
}

export const saveState = (state) => {
  try{
    localStorage.setItem('input', JSON.stringify(state))
  }catch(error){
    //Ignore write errors
  }
}

const  getResource = async (url) => {
    const res = await fetch(url),
          some = await res.json();

    return some;
}
getResource('https://jsonplaceholder.typicode.com/todos/10000')
    .then((res)=>console.log('succes',res))
    .catch(error => console.error('error', error));
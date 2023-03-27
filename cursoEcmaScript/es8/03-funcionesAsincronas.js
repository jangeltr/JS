const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ("AsynC!!"), 2000)
        : reject(new Error("Error"));
    });
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log("Hello");
}

console.log("before");
anotherFn();
console.log("After");

//Ejemplo
const agregateIncludes = ()=>{
        return new Promise(async (resolve, reject)=>{
            let includes=Array.from(document.getElementsByTagName("include"))
            try{
                await Promise.all(includes.map(async include => {
                    let i_file = await fetch(include.attributes.src.value)
                    let i_text = await i_file.text()
                    include.insertAdjacentHTML("afterend",i_text)
                    include.remove()
                }))
                resolve()
            }catch(error){
                reject()
            }
        })
}
    
async function render(){
    await agregateIncludes()
    createBtnsLogIn()
    createBtnsCreateAccount()
}

render()

function Index(){
    fetch('https://react-9becf-default-rtdb.firebaseio.com/meetings.json')
    .then((data)=>{
        return data.json()
    }).then((data)=>{
        for(let key in data){
            let meeting ={
                id:key,
                ...data[key]
            }
        }
    })
    return(
        <>
        <section>
        <div className="text-4xl weight-bolder font-black">This is the home page</div>
        </section>
        </>

    )
}
export default Index;
import { useRef , useState} from "react";
import { useNavigate } from "react-router-dom";
function  AddMeeting(){
    let titleInput =useRef();
    let dateInput =useRef();
    let descInput =useRef();
    let[loadingStatus,setLoadingStatus]=useState(false);
  let navigate=useNavigate();
    function addMeetingHandler(){
    setLoadingStatus(true)
    let newMeetingData={
        title:titleInput.current.value,
        date:dateInput.current.value,
        desc:descInput.current.value,
    }
    fetch('https://react-9becf-default-rtdb.firebaseio.com/meetings.json',{
        method:'post',/* It sends data to url */
        body:JSON.stringify(newMeetingData)
    }).then(()=>{
        setLoadingStatus(false);
        navigate('/')
    })
}
    return(
        <>
    <section>
    <div className="w-[400px] text-left mx-auto">
            <h1 className="text-2xl font-black">Add new meeting page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div class="w-full  mt-6">
                <input ref={titleInput} type="text" placeholder="Meeting Title" class="flex w-full h-10 px-3 py-6 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
            </div>
            <div class="w-full  mt-6">
                <input ref={dateInput} type="date" placeholder="Meeting Date" class="flex w-full h-10 px-3 py-6 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
            </div>
            <div class="w-full  mt-6">
                <input ref={descInput} type="text" placeholder="Name" class="flex w-full h-10 px-3 py-6 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
            </div>
            <button onClick={addMeetingHandler} className="bg-black text-white px-10 py-4 mt-4 rounded-lg flex gap-4 items-center">
            <span>Create New Meeting</span>
            <span className={loadingStatus ? "loader" : ""}></span>
</button>

        </div>
    </section>
        </>

    )
}
export default AddMeeting;
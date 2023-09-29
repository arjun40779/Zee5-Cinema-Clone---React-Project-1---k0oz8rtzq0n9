const ShowCrousel=()=>{
    const fetchList=async ()=>{
        const res=await fetch("");
        const data=await res.json();
        console.log(data);

    }
    return (
        <div className="ShowCrousel">
        ShowCrousel
        </div>
    )
}
export default ShowCrousel
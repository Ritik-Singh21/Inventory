function getdeleteproduct(id){
    const result=confirm("Are you sure you want to delete? :|")
    if(result){
        fetch('/delete-product/'+id,{
            method:'POST',
    }).Then((res)=>{
        if(res.ok){
            location.reload();
        }
    });
    }
}
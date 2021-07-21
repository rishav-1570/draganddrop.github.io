console.log("this script is working");
let drag_area = document.querySelector(".drag_area");
let header = document.querySelector(".text_drag");
let button = document.getElementById("btnid");
let imgfile = document.getElementById("imagefile");
let filedata;

button.addEventListener("click",()=>{
    imgfile.click();
});

imgfile.addEventListener("change",()=>{
    filedata = imgfile.files[0];
    drag_area.classList.add("bordersolid");
    showimg();
    
});


drag_area.addEventListener("dragover",(e)=>{
    //console.log("fired");

    e.preventDefault();
    drag_area.classList.add("bordersolid");
    header.textContent="Release to upload the file";
});
drag_area.addEventListener("dragleave",(e)=>{
    //console.log("leavefired");
    //e.preventDefault();
    drag_area.classList.remove("bordersolid");
    header.textContent="Drag & drop to upload file";
});
drag_area.addEventListener("drop",(e)=>{
    e.preventDefault();
    //console.log(e);
    filedata = e.dataTransfer.files[0];
    //console.log(filedata);
    showimg();
});

function showimg(){
    let validtype = ["image/jpg","image/png","image/jpeg"];
    let filetype=filedata.type;
    if(validtype.includes(filetype))
    {
        let reader = new FileReader();

        reader.onload = ()=>{
            let fileurl = reader.result;
            let str = `<img src="${fileurl}">`; 
            drag_area.innerHTML=str;
            drag_area.style.paddingBottom="0px";
        }
        reader.readAsDataURL(filedata);
    }
    else
    {
        drag_area.classList.remove("bordersolid");
        alert("Only image files are supported.");
        
    }
}
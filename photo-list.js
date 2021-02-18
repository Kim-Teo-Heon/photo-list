let input_img=document.querySelector('.input_img');
let img_wrap=document.querySelector('.img_wrap');
let input_img_btn=document.querySelector('.input_img_btn');
let input_img_url='';
let img='';

input_img_btn.addEventListener('click',()=>{
    input_img.click();
})

function del_eventHandler(e){
    let img_form=e.target.parentNode;

    img_wrap.removeChild(img_form);
}

function reset_input_img_url(){
    const new_input_img_url= new DataTransfer();
    return new_input_img_url;
}

input_img.addEventListener('change', ()=>{
    let input_img_info=input_img.files;
    let reader = new FileReader();
    
    reader.readAsDataURL(input_img_info[0]);

    reader.addEventListener('load',()=>{
        let create_figure=document.createElement('figure')
        let create_img=document.createElement('img');
        let create_del_btn=document.createElement('div');
        let create_real_edit_btn=document.createElement('input');
        let create_custom_edit_btn=document.createElement('button');
        
        create_figure.appendChild(create_img);
        create_figure.appendChild(create_del_btn);
        create_figure.appendChild(create_real_edit_btn);
        create_figure.appendChild(create_custom_edit_btn);
        create_img.setAttribute('src', reader.result);
        create_real_edit_btn.setAttribute('type','file');
        create_real_edit_btn.setAttribute('accept', 'image/*');
        create_real_edit_btn.setAttribute('class', 'real_edit_btn');
        create_del_btn.setAttribute('class','del_btn');
        create_custom_edit_btn.setAttribute('type','button');
        create_custom_edit_btn.setAttribute('class','custom_edit_btn');

        create_del_btn.innerHTML='Delete';
        create_custom_edit_btn.innerHTML='Edit';

        create_del_btn.addEventListener('click',del_eventHandler)
        
        create_custom_edit_btn.addEventListener('click',()=>{
            create_real_edit_btn.click();
        })

        create_real_edit_btn.addEventListener('change',(e)=>{
            let edit_img_info=create_real_edit_btn.files;
            let reader = new FileReader();
            let img= e.target.previousSibling.previousSibling
            
            reader.readAsDataURL(edit_img_info[0]);

            reader.addEventListener('load',()=>{
                edit_img_url=reader.result;
                img.src=edit_img_url;
            })
        })

        img_wrap.appendChild(create_figure);

    })
        input_img.files=reset_input_img_url().files;
    }
)


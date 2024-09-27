document.getElementsByClassName('left_nav_expand')[0].addEventListener("click",navexpand)

function navexpand(){
    let left_nav = document.getElementsByClassName("left_nav")[0]
    let nav_content = document.getElementsByClassName("nav_content")[0]
    if(left_nav.style.width == "3%"){
       left_nav.style.width = "12%"  
       nav_content.style.gap = "10px"
    }
    else{
      left_nav.style.width = "3%"  
    }     
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////

let must_watch = document.getElementsByClassName("must_watch")[0]
must_watch.addEventListener("click",must_watch_fun)

function must_watch_fun(e){
   
  e.preventDefault();

  let content = document.getElementsByClassName("content")[0]
   
  let name = {ADANITTRANS: "NSE",RELIANCE: "NSE",INFOSYS: "NSE",TCS: "NSE",HDFC: "BSE",WIPRO: "NSE",ADANIGREEN: "NSE",MARUTI: "NSE",AXISBANK: "BSE",BAJFINANCE: "BSE"
};

  
   let companies = []
   for(let [key,value] of Object.entries(name)){
    let company = `
         <div class="must_watch_dicription">
             <div>
                <h4>${key}</h4>
                <h5>${value}</h5>
             </div>

             <div class="btn_container">
                <button class="show_btn" data-key="${key}" data-value="${value}">Show</button>
                <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
             </div>
          </div>
      `
      companies.push(company)
   }
       
  content.innerHTML = ""
  content.innerHTML = companies.join("")

  let add_btn = document.querySelectorAll(".add_btn")
  console.log(add_btn)
  add_btn.forEach((btn)=>{
  btn.addEventListener("click",add_my_list)
})
let show_btn = document.querySelectorAll(".show_btn")
show_btn.forEach((btn)=>{
btn.addEventListener("click",show_detail)
})
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let random = document.getElementsByClassName("random")[0]
random.addEventListener("click",random_fun)

function random_fun(e){
   
  e.preventDefault();

  let content = document.getElementsByClassName("content")[0]
   
  let name = {ADANITTRANS: "NSE",HINDDAPAL: "BSE",CAPPL: "BSE",ADANIGREEN: "NSE",WIPRO: "NSE",TATAELCTRONICS: "NSE",OLA: "BSE",ATHER: "BSE",RELIANCE: "NSE",INFOSYS: "NSE",HDFC: "BSE",SBI: "NSE",TCS: "NSE",NTPC: "BSE",SADBHIN: "NSE",RADIOCITY: "NSE",KOTAKBANK: "NSE",AXISBANK: "BSE",HINDALCO: "NSE",ULTRACEMCO: "BSE",MARUTI: "NSE",BAJFINANCE: "BSE",LARSEN: "NSE",ONGC: "BSE",ASHOKLEY: "NSE"
  };

   let companies = []
   for(let [key,value] of Object.entries(name)){
    let company = `
          <div class="random_dicription">
             <div>
                <h4>${key}</h4>
                <h5>${value}</h5>
             </div>

             <div class="btn_container">
                  <button class="show_btn"  data-key="${key}" data-value="${value}">Show</button>
                  <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
             </div>
          </div>
      `
      companies.push(company)
   }
  
  content.innerHTML = ""
  content.innerHTML = companies.join("")


  let add_btn = document.querySelectorAll(".add_btn")
//   console.log(add_btn)
  add_btn.forEach((btn)=>{
  btn.addEventListener("click",add_my_list)
})
let show_btn = document.querySelectorAll(".show_btn")
show_btn.forEach((btn)=>{
btn.addEventListener("click",show_detail)
})
}



let content = document.getElementsByClassName("content")[0]
   
let name = {ADANITTRANS: "NSE",ADANIGREEN: "NSE",WIPRO: "NSE",SADBHIN: "NSE",RADIOCITY: "NSE",HINDDAPAL: "BSE",CAPPL: "BSE",TATAELCTRONICS: "NSE",OLA: "BSE",ATHER: "BSE",RELIANCE: "NSE",INFOSYS: "NSE",HDFC: "BSE",SBI: "NSE",TCS: "NSE",NTPC: "BSE",KOTAKBANK: "NSE",AXISBANK: "BSE",HINDALCO: "NSE",ULTRACEMCO: "BSE",MARUTI: "NSE",BAJFINANCE: "BSE",LARSEN: "NSE",ONGC: "BSE",ASHOKLEY: "NSE"
};

 let companies = []
 for(let [key,value] of Object.entries(name)){
  let company = `
        <div class="random_dicription">
             <div>
                <h4>${key}</h4>
                <h5>${value}</h5>
             </div>

             <div class="btn_container">
                  <button class="show_btn"  data-key="${key}" data-value="${value}">Show</button>
                  <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
             </div>
          </div>
    `
    companies.push(company)
 }

content.innerHTML = ""
content.innerHTML = companies.join("")


let add_btn = document.querySelectorAll(".add_btn")
console.log(add_btn)
add_btn.forEach((btn)=>{
btn.addEventListener("click",add_my_list)
})

let show_btn = document.querySelectorAll(".show_btn")
show_btn.forEach((btn)=>{
btn.addEventListener("click",show_detail)
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let passive = document.getElementsByClassName("passive")[0]
passive.addEventListener("click",passive_fun)

function passive_fun(e){
   
  e.preventDefault();

  let content = document.getElementsByClassName("content")[0]
   
  let name = { HDFC: "BSE", INFOSYS: "NSE", TCS: "NSE", RELIANCE: "NSE", WIPRO: "NSE", MARUTI: "NSE", BAJFINANCE: "BSE", NTPC: "BSE", SBI: "NSE", AXISBANK: "BSE" };


   let companies = []
   for(let [key,value] of Object.entries(name)){
    let company = `
          <div class="passive_dicription">
             <div>
                <h4>${key}</h4>
                <h5>${value}</h5>
             </div>

             <div class="btn_container">
                   <button class="show_btn"  data-key="${key}" data-value="${value}">Show</button>
                   <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
             </div>
          </div>
      `
      companies.push(company)
   }
  
  content.innerHTML = ""
  content.innerHTML = companies.join("")

  let add_btn = document.querySelectorAll(".add_btn")
  console.log(add_btn)
  add_btn.forEach((btn)=>{
  btn.addEventListener("click",add_my_list)
})
let show_btn = document.querySelectorAll(".show_btn")
show_btn.forEach((btn)=>{
btn.addEventListener("click",show_detail)
})
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let low_priority = document.getElementsByClassName("low_priority")[0]
low_priority.addEventListener("click",low_priority_fun)

function low_priority_fun(e){
   
  e.preventDefault();

  let content = document.getElementsByClassName("content")[0]
   
  let name = { HDFC: "BSE", SBI: "NSE", ITC: "BSE", NTPC: "BSE", RELIANCE: "NSE", TCS: "NSE", KOTAKBANK: "NSE", INFOSYS: "NSE", HINDALCO: "NSE", UPL: "BSE" };


   let companies = []
   for(let [key,value] of Object.entries(name)){
    let company = `
          <div class="low_priority_dicription">
             <div>
                <h4>${key}</h4>
                <h5>${value}</h5>
             </div>

             <div class="btn_container">
                    <button class="show_btn"  data-key="${key}" data-value="${value}">Show</button>
                    <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
             </div>
          </div>
      `
      companies.push(company)
   }
  
  content.innerHTML = ""
  content.innerHTML = companies.join("")

  let add_btn = document.querySelectorAll(".add_btn")
  console.log(add_btn)
  add_btn.forEach((btn)=>{
  btn.addEventListener("click",add_my_list)

  let show_btn = document.querySelectorAll(".show_btn")
  show_btn.forEach((btn)=>{
  btn.addEventListener("click",show_detail)
})
})
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let my_list_name = {}

function add_my_list(event){
  event.preventDefault()
  
  let key = event.target.getAttribute("data-key")
  let value = event.target.getAttribute("data-value")

  console.log(key,":",value)

  my_list_name[key] = value
  

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let my_list = document.getElementsByClassName("my_list")[0]
my_list.addEventListener("click",my_list_fun)

function my_list_fun(e){

  e.preventDefault();

  let content = document.getElementsByClassName("content")[0]

  // let name = {ADANITTRANS: "NSE",ADANIGREEN: "NSE",WIPRO: "NSE",SADBHIN: "NSE",RADIOCITY: "NSE",HINDDAPAL: "BSE",CAPPL: "BSE",TATAELCTRONICS: "NSE",OLA: "BSE",ATHER: "BSE",RELIANCE: "NSE",INFOSYS: "NSE",HDFC: "BSE",SBI: "NSE",TCS: "NSE",NTPC: "BSE",KOTAKBANK: "NSE",AXISBANK: "BSE",HINDALCO: "NSE",ULTRACEMCO: "BSE",MARUTI: "NSE",BAJFINANCE: "BSE",LARSEN: "NSE",ONGC: "BSE",ASHOKLEY: "NSE"};


  let name = Object.assign(my_list_name)

   let companies = []
   for(let [key,value] of Object.entries(name)){
    let company = 
      `
          <div class="my_list_discription">
             <div>
                <h4>${key}</h4>
                <h5>${value}</h5>
             </div>

             <div class="btn_container">
                    <button class="show_btn"  data-key="${key}" data-value="${value}">Show</button>
                    <button class="btn_del" data-key="${key}" data-value="${value}">Delete</button>
             </div>
          </div>
      `
      companies.push(company)
   }
    content.innerHTML = ""
    content.innerHTML = companies.join("")

    let btn_del = document.querySelectorAll(".btn_del")
    console.log(btn_del)
    btn_del.forEach((btn)=>{
    btn.addEventListener("click",del_my_list)})

    let show_btn = document.querySelectorAll(".show_btn")
    show_btn.forEach((btn)=>{
    btn.addEventListener("click",show_detail)
})
}

function del_my_list(event){
  event.preventDefault()
  key = event.target.getAttribute("data-key")
  console.log(key)
  delete my_list_name[key] 
  my_list_fun(event)
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function show_detail(event){

  let key = event.target.getAttribute("data-key")
  let value = event.target.getAttribute("data-value")
 
  alert(
    `
    ${key}
    ${value}  
    `
  )

  if(key == "ADANITTRANS"){
    window.location.href = 'ADANITTRANS.html';
  }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let search_obj = {HINDALCO: "NSE",NTPC: "BSE",OLA: "BSE",KOTAKBANK: "NSE",SADBHIN: "NSE",TATAELCTRONICS: "NSE",RADIOCITY: "NSE",ASHOKLEY: "NSE",ULTRACEMCO: "BSE",CAPPL: "BSE",TCS: "NSE",HDFC: "BSE",WIPRO: "NSE",ADANIGREEN: "NSE",MARUTI: "NSE",AXISBANK: "BSE",BAJFINANCE: "BSE",RELIANCE: "NSE",SBI: "NSE",INFOSYS: "NSE",UPL: "BSE"}


let search_inp = document.querySelector(".search_inp");

search_inp.addEventListener("input", toUppercase);

search_inp.addEventListener("input", search);

function toUppercase() {
    let search_value = search_inp.value;
    if (search_value){
        search_inp.value = search_value.toUpperCase();
    }
}

// function filter(event) {
//     if (event.key === "Enter") {
//         let content = document.getElementsByClassName("content")[0];
        
//         let key = ""
//         let value = ""
//         let search_value = search_inp.value
//         let company
//         let companies = []

//         for (let [obj_key,obj_value] of Object.entries(search_obj)){
//             if (search_value == obj_key){
//                key = obj_key
//                value = search_obj[key];
//                // console.log(key,":",value)

//                company = `
//                     <div class="low_priority_dicription">
//                         <div>
//                             <h4>${key}</h4>
//                             <h5>${value}</h5>
//                         </div>
//                         <div class="btn_container">
//                             <button class="show_btn" data-key="${key}" data-value="${value}">Show</button>
//                             <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
//                         </div>
//                     </div>
//                 `;
//             }
//             else{
//                random_fun(event)
//                console.log("else")
//             }
//             content.innerHTML = ""; 
//             content.innerHTML = company; 

//             let add_btn = document.querySelectorAll(".add_btn")
//             //console.log(add_btn)
//             add_btn.forEach((btn)=>{
//             btn.addEventListener("click",add_my_list)

//             let show_btn = document.querySelectorAll(".show_btn")
//             show_btn.forEach((btn)=>{
//             btn.addEventListener("click",show_detail)
//             })
//             })
//         }
//     }
// }


function search(event) {
   
      let content = document.getElementsByClassName("content")[0];
       
      let key = ""
      let value = ""
      let search_value = search_inp.value
      let company
      let companies = []

       for (let [obj_key,obj_value] of Object.entries(search_obj)){

           if (obj_key.startsWith(search_value)){
              key = obj_key
              value = search_obj[key];
              // console.log(key,":",value)
              
              company = `
                   <div class="low_priority_dicription">
                       <div>
                           <h4>${key}</h4>
                           <h5>${value}</h5>
                       </div>
                       <div class="btn_container">
                           <button class="show_btn" data-key="${key}" data-value="${value}">Show</button>
                           <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
                       </div>
                   </div>
               `;

               companies.push(company)
            }
            else{
               random_fun(event)
           }

           if(companies.length > 0){
            content.innerHTML = ""; 
            content.innerHTML = companies.join(""); 
           }         

           let add_btn = document.querySelectorAll(".add_btn")
           //console.log(add_btn)
           add_btn.forEach((btn)=>{
           btn.addEventListener("click",add_my_list)

           let show_btn = document.querySelectorAll(".show_btn")
           show_btn.forEach((btn)=>{
           btn.addEventListener("click",show_detail)
           })
           })
       }
   
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// option 

let option = document.querySelector(".opt_icon")
option.addEventListener("click",filter)

function filter(){

   let opt_container = document.getElementsByClassName("opt_container")[0];
   let body = document.querySelector("body")
   body.style.backgroundColor = "lightgray"

   let opt = `
      <div class="opt_box">
          <button class="remove"><ion-icon name="close-outline"></ion-icon></button>
          <div class="type_opt">
              <button class="btn_bse">BSE</button>
              <button class="btn_nse">NSE</button>
              <button class="btn_clear">Clear</button>
          </div>

          <div class="sort">
               <button class="btn_sort">A-Z</button>
               <P>Alphabetically</P>
          </div>

      </div>
   `
   opt_container.innerHTML = opt
   
   let opt_box_remove = document.querySelector(".remove")
   opt_box_remove.addEventListener("click",remove)

   let opt_box = document.querySelector(".opt_box");
   opt_box.classList.remove("remove_opt_box");
   opt_box.classList.add("show_opt_box");
   opt_box.style.display = "flex";

   let btn_bse = document.querySelector(".btn_bse")
   btn_bse.addEventListener("click",filter_btn_bse)

   let btn_nse = document.querySelector(".btn_nse")
   btn_nse.addEventListener("click",filter_btn_nse)

   let btn_clear = document.querySelector(".btn_clear")
   btn_clear.addEventListener("click",filter_btn_clear)

   let az = document.querySelector(".btn_sort")
   az.addEventListener("click",alphabetically)

}


function remove() {
   let opt_box = document.querySelector(".opt_box");

   if (opt_box) {
       opt_box.style.display = "none"; 
       let body = document.querySelector("body");
       body.style.backgroundColor = "white";
   }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////

function filter_btn_bse(){

   let content = document.getElementsByClassName("content")[0];
    let bse = {}

    for(let [key,val] of Object.entries(search_obj)){
        
        if(val === "BSE"){
            bse[key] = val
        }
    }

   let companies = []

   for(let [key,value] of Object.entries(bse)){

      company = `
      <div class="low_priority_dicription btn_bse_discription">
          <div>
              <h4>${key}</h4>
              <h5>${value}</h5>
          </div>
          <div class="btn_container">
              <button class="show_btn" data-key="${key}" data-value="${value}">Show</button>
              <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
          </div>
      </div>
  `;
    companies.push(company)
   }

   content.innerHTML = companies.join("");
   content.innerHTML += opt

   let body = document.querySelector("body");
   body.style.backgroundColor = "white";
   
   
   let add_btn = document.querySelectorAll(".add_btn")
   //console.log(add_btn)
   add_btn.forEach((btn)=>{
   btn.addEventListener("click",add_my_list)

   let show_btn = document.querySelectorAll(".show_btn")
   show_btn.forEach((btn)=>{
   btn.addEventListener("click",show_detail)
   })
   })
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function filter_btn_nse(){

   let content = document.getElementsByClassName("content")[0];
    let bse = {}

    for(let [key,val] of Object.entries(search_obj)){
        
        if(val === "NSE"){
            bse[key] = val
        }
    }

   let companies = []

   for(let [key,value] of Object.entries(bse)){

      company = `
      <div class="low_priority_dicription btn_nse_discription">
          <div>
              <h4>${key}</h4>
              <h5>${value}</h5>
          </div>
          <div class="btn_container">
              <button class="show_btn" data-key="${key}" data-value="${value}">Show</button>
              <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
          </div>
      </div>
  `;
    companies.push(company)
   }

   content.innerHTML = companies.join("");
   content.innerHTML += opt

   let body = document.querySelector("body");
   body.style.backgroundColor = "white";
   
   
   let add_btn = document.querySelectorAll(".add_btn")
   add_btn.forEach((btn)=>{
   btn.addEventListener("click",add_my_list)

   let show_btn = document.querySelectorAll(".show_btn")
   show_btn.forEach((btn)=>{
   btn.addEventListener("click",show_detail)
   })
   })
}

function filter_btn_clear(e){
     random_fun(e)
}



function alphabetically(){

     let unsort_arr =  []
     let sort_obj = {}
   
     for(let key of Object.keys(search_obj)){
          unsort_arr.push(key)
     }

     console.log(unsort_arr)

   unsort_arr.sort()

   let value = ""
   let key = ""

   for(let sort_key of unsort_arr){
        key = sort_key
        value = search_obj[sort_key]
        sort_obj[sort_key] = value;
    }
                     
   let companies = []
   for(let [key,value] of Object.entries(sort_obj)){
      let company = `
          <div class="az_dicription">
             <div>
                <h4>${key}</h4>
                <h5>${value}</h5>
             </div>

             <div class="btn_container">
                    <button class="show_btn"  data-key="${key}" data-value="${value}">Show</button>
                    <button class="add_btn" data-key="${key}" data-value="${value}">Add</button>
             </div>
          </div>
      `
      companies.push(company)
   }
  
   content.innerHTML = ""
   content.innerHTML = companies.join("")
   let body = document.querySelector("body");
   body.style.backgroundColor = "white";

    console.log(sort_obj)

    let add_btn = document.querySelectorAll(".add_btn")
    add_btn.forEach((btn)=>{
    btn.addEventListener("click",add_my_list)

    let show_btn = document.querySelectorAll(".show_btn")
    show_btn.forEach((btn)=>{
    btn.addEventListener("click",show_detail)
    })
    })
}
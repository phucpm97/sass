var servies = new Services();

function getListProduct() {
    servies
        .fetchData()
        .then(function(result) {
            renderHTML(result.data);
            // console.log(result.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

getListProduct();

// function renderHTML(data) {
//     var content = "";
//     for (var i = 0; i < data.length; i++) {
//         // var product = data[i];
//         content += `
//         <tr>
//         <section class="Teacher">
//         <div class="container">
//             <div class="row">
//                 <div class="col-sm ">
//                     <div class="Teacher__img">
//                         <img src="./images/teacher_1.jpg">
//                     </div>
//                     <div class="Teacher_font">
//                         <h1>ITALIAN</h1>
//                         <h2>July Roberts</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//         </tr>
//     `;
//     }
//     document.getElementById("tblDanhSachSP").innerHTML = content;
//     // <img src="./../../assets/img/${product.Hinhanh}" width="50px" />
// }

function renderHTML(data) {
    console.log(data);
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var product = data[i];
        console.log(product.loaiND);
        if (product.loaiND == "GV") {
            content += `
            <div class="teacher_slider">
                <div class="card teacher_img">
                    <img src="./images/${product.hinhAnh}" class="card-img-top " alt="...">
                </div>
                    <div class="card-body teacher_text">
                        <h2 class="teacher_langue">${product.ngonNgu}</h2>
                        <h3 class="teacher_name">${product.hoTen}</h3>
                        <p class="teacher_comment">${product.moTa}</p>
                    </div>
            </div>
        `;
        };

    }
    document.getElementById("Idteacher").innerHTML = content;
}

{
    /* <div class="col-12 col-md-6 col-lg-3">
    <div class="card cardPhone">
        <img src="./img/${product.hinhAnh}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <div>
                    <h3 class="cardPhone__title">${product.tenSP}</h3>
                    <p class="cardPhone__text">${product.moTa}</p>
                </div>
                <div>
                    <h3 class="cardPhone__title">$${product.gia}</h3>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="cardPhone__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div>
                    <button class="btnPhone-shadow"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                </div>
            </div>

        </div>
    </div>
    </div> */
}


/* /* <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="sua(${product.id})">S???a</button>
<button class="btn btn-danger" onclick="xoa(${product.id})">Xo??</button> */
// function xoa(id) { */}
//     servies
//         .deleteProduct(id)
//         .then(function(result) {
//             getListProduct();
//             console.log(result);
//         })
//         .catch(function(error) {
//             console.log(error);
//         })
// }

// function sua(id) {
//     console.log(id);
//     // s???a l???i ti??u ????? modal
//     document.getElementsByClassName("modal-title")[0].innerHTML = "S???a s???n ph???m";
//     // add v?? n??t button c???p nh???p d?????i footer c???a modal
//     var footer = `<button class="btn btn-warning" onclick="Capnhat(${id})">Update</button>`;
//     document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

//     // g???i t???i ph????ng th???c servives ????? l???y product t??? server
//     servies
//         .getProductById(id)
//         .then(function(result) {
//             // getListProduct();
//             console.log(result.data);
//             // dom t???i c??c th??? input show value ra
//             var product = result.data;
//             getEle("TenSP").value = product.tenSP;
//             getEle("GiaSP").value = product.gia;
//             getEle("HinhSP").value = product.hinhAnh;
//             getEle("MoTa").value = product.moTa;
//         })
//         .catch(function(error) {
//             console.log(error);
//         })
// }

// function Capnhat(id) {
//     console.log(id);
//     // dom toi cac the input lay value
//     var tenSP = getEle("TenSP").value;
//     var giaSP = getEle("GiaSP").value;
//     var hinhAnh = getEle("HinhSP").value;
//     var moTa = getEle("MoTa").value;


//     // tao ra doi tuong product
//     var product = new Product(id, tenSP, giaSP, hinhAnh, moTa);
//     console.log(product);
//     //gui toi phuowng thuc services de gui product len server
//     servies.UpdateProductById(product)
//         .then(function() {
//             // console.log(result.data);
//             getListProduct();
//             // tat modal
//             document.getElementsByClassName("close")[0].click();
//         })
//         .catch(function(error) {
//             console.log(error);
//         })
// }

// getEle("btnThemSP").addEventListener("click", function() {
//     // //  Sua lai tieu de modal

//     document.getElementsByClassName("modal-title")[0].innerHTML = "Th??m s???n ph???m";
//     // // add vo nut button
//     var footer = `<button class="btn btn-warning" onclick="addProduct()">Th??m s???n ph???m </button>`;
//     document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
// })

// function addProduct() {
//     // console.log("hello");
//     var tenSP = getEle("TenSP").value;
//     var giaSP = getEle("GiaSP").value;
//     var hinhAnh = getEle("HinhSP").value;
//     var moTa = getEle("MoTa").value;

//     var product = new Product("", tenSP, giaSP, hinhAnh, moTa);
//     console.log(product);
//     servies.addProductApi(product)
//         .then(function(result) {
//             // console.log(result);
//             getListProduct();
//             // tat modal
//             document.getElementsByClassName("close")[0].click();
//         })
//         .catch(function(error) {
//             console.log(error);
//         })
// }

// function getEle(id) {
//     return document.getElementById(id);
// }

// //product2.png
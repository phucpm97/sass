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
        content += `
        <div class="col-12 col-md-6 col-lg-3 teacher_slider">
            <div class="card teacher_img">
                <img src="./images/${product.Hinhanh}" class="card-img-top " alt="...">
            </div>
                <div class="card-body teacher_text">
                    <h2 class="teacher_langue">${product.Ngonngu}</h2>
                    <h3 class="teacher_name">${product.TenGV}</h3>
                    <p class="teacher_comment">${product.Mota}</p>
                </div>
        </div>
    `;
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

{
    /* /* <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="sua(${product.id})">Sửa</button>
    <button class="btn btn-danger" onclick="xoa(${product.id})">Xoá</button> */
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
    //     // sửa lại tiêu để modal
    //     document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa sản phẩm";
    //     // add vô nút button cập nhập dưới footer của modal
    //     var footer = `<button class="btn btn-warning" onclick="Capnhat(${id})">Update</button>`;
    //     document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

    //     // gọi tới phương thức servives để lấy product từ server
    //     servies
    //         .getProductById(id)
    //         .then(function(result) {
    //             // getListProduct();
    //             console.log(result.data);
    //             // dom tới các thẻ input show value ra
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

    //     document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm sản phẩm";
    //     // // add vo nut button
    //     var footer = `<button class="btn btn-warning" onclick="addProduct()">Thêm sản phẩm </button>`;
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
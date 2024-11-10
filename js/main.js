import { buttonsData, menu } from "./db.js";
import { elements } from "./helper.js";

//olay izleyicileri

//sayfa yükllendiği anda renderMeNuItems Fonk çalıştır ve menu paremetresi gönder
// document.addEventListener("DOMContentLoaded", renderMenuItems(menu));

// document.addEventListener("DOMContentLoaded", renderButtons("all"));

//!sayfa yüklendiğinde çalışacak fonksiyonları tek bir fon halinde yazdık

document.addEventListener("DOMContentLoaded", () => {

    renderMenuItems(menu);
    renderButtons("all");


});



//butonların bulunduğu alana clik olayı izlediğimizde çalışacak fonk
elements.buttonsArea.addEventListener("click", searchCategory);

// fonksiyonalar

function searchCategory(e) {
    //* Tıkladığımız butonun data özelliklerine eriştik ve bir değişkene aktardık.
    const category = e.target.dataset.category;

    //tüm dizi elemnalrından katagori değeri buton kategori ile işleşirse getir
    const filtredMenu = menu.filter((item) => item.category === category

    )
    if (category === "all") {
        renderMenuItems(menu)


    } else {
        renderMenuItems(filtredMenu)


    }

    renderButtons(category)



}

//ekrana menu elemanlarını aktaracak fonk.
function renderMenuItems(menuItems) {

    //gönderilen verileri dönüp her bir veri için bir a etiketi oluştur
    let menuHTML = menuItems.map((item) => (
        `
        <a
        id="card"
        href="/productDetail.html/item-1.jpeg"
        class="text-decoration-none text-black d-flex flex-column gap-2 flex-md-row"
      >
        <img class="rounded" src="${item.img}" alt="" />
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <h5>${item.title}</h5>
            <p class="text-success">${item.price}</p>
          </div>
          <p class="lead">
           ${item.desc}
          </p>
        </div>
      </a>
        
        `
    ));
    menuHTML = menuHTML.join("")
    //oluşturduğumuz menuHTML  değişkenini ekrana aktardık
    elements.menuArea.innerHTML = menuHTML
}


function renderButtons(active) {
    elements.buttonsArea.innerHTML = ""
    //yeni buton oluşturmak için buto data içindeki verileri dönüp her biri için yeni buton oluşturuyoruz
    buttonsData.forEach((btn) => {
        //her bir veri için HTML buton etiketi oluştur
        const buttonEle = document.createElement("button")
        // oluştuduğuuz butonlara class ekledik
        buttonEle.className = "btn btn-outline-dark filter-btn"
        //butonun title ini ekledik (içerik)
        buttonEle.textContent = btn.text

        //oluşturğumuz butonun hangi kategoride olduğu bilgisini buton elemnetne ekledik
        buttonEle.dataset.category = btn.value
        //eğer active kategorisi ile buton eşlşirse farklı class ekledik
        if (active === btn.value) {
            buttonEle.classList.add("bg-dark", "text-light")
        }

        //html e gönder
        elements.buttonsArea.appendChild(buttonEle)




        console.log(buttonEle)



    })

}

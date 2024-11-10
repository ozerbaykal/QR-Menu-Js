import { menu } from "./db.js";
import { elements } from "./helper.js";

//olay izleyicileri

//sayfa yükllendiği anda renderMeNuItems Fonk çalıştır ve menu paremetresi gönder
document.addEventListener("DOMContentLoaded", renderMenuItems(menu));

//butonların bulunduğu alana clik olayı izlediğimizde çalışacak fonk
elements.buttonsArea.addEventListener("click", searchCategory);

// fonksiyonalar

function searchCategory(e) {
    //* Tıkladığımız butonun data özelliklerine eriştik ve bir değişkene aktardık.
    const category = e.target.dataset.category;

    const filtredMenu = menu.filter((item) => item.category === category

    )


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



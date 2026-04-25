document.addEventListener("DOMContentLoaded", function () {
    
    // Elemanları Seçelim
    const btnTema = document.getElementById("btnTema");
    const kayitFormu = document.getElementById("kayitFormu");
    const ozetAlani = document.getElementById("ozetAlani");
    const btnTemizle = document.getElementById("btnTemizle");

    // 1. TEMA DEĞİŞTİRME (Mevcut özelliğin korunuyor)
    btnTema.addEventListener("click", function () {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
        
        if (document.body.classList.contains("bg-dark")) {
            btnTema.textContent = "Aydınlık Moda Geç";
        } else {
            btnTema.textContent = "Karanlık Moda Geç";
        }
    });

    // 2. FORM GÖNDERME
    kayitFormu.addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfa yenilenmesini engeller

        const ad = document.getElementById("adSoyad").value;
        const eposta = document.getElementById("eposta").value;

        // Özet alanını güncelle (Mavi kutuyu yeşil başarı kutusuna çevirir)
        ozetAlani.classList.replace("alert-info", "alert-success");
        ozetAlani.innerHTML = `
            <div class="text-start">
                <h5 class="fw-bold border-bottom pb-2">Başvuru Özeti</h5>
                <p class="mb-1"><strong>Ad Soyad:</strong> ${ad}</p>
                <p class="mb-0"><strong>E-posta:</strong> ${eposta}</p>
                <p class="mt-2 mb-0 small text-muted text-center">Kaydınız başarıyla oluşturuldu.</p>
            </div>
        `;
    });

    // 3. FORMU TEMİZLE (Yeni özellik)
    btnTemizle.addEventListener("click", function () {
        kayitFormu.reset(); // Kutuları boşaltır
        ozetAlani.classList.replace("alert-success", "alert-info"); // Yeşili tekrar maviye çevirir
        ozetAlani.innerHTML = "Henüz bir başvuru yapılmadı. Sonuçlar burada görünecek.";
    });
});

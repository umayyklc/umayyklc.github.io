// Sayfa tamamen yüklendiğinde çalışmasını sağlarız
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Gerekli Elemanları Seçelim
    const btnTema = document.getElementById("btnTema");
    const kayitFormu = document.getElementById("kayitFormu");
    const ozetAlani = document.getElementById("ozetAlani");

    // 2. TEMA DEĞİŞTİRME (Etkileşim 1)
    btnTema.addEventListener("click", function () {
        // Body elementine 'bg-dark' ve 'text-white' sınıflarını ekler/çıkarır
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
        
        // Butonun içindeki metni duruma göre değiştirelim (Opsiyonel ama şık durur)
        if (document.body.classList.contains("bg-dark")) {
            btnTema.textContent = "Aydınlık Moda Geç";
            btnTema.classList.replace("btn-outline-light", "btn-outline-warning");
        } else {
            btnTema.textContent = "Karanlık Moda Geç";
            btnTema.classList.replace("btn-outline-warning", "btn-outline-light");
        }
    });

    // 3. FORM GÖNDERME VE ÖZET (Etkileşim 2)
    kayitFormu.addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfanın yenilenmesini durdurur (Önemli!)

        // Değerleri alalım
        const ad = document.getElementById("adSoyad").value;
        const eposta = document.getElementById("eposta").value;

        // Basit bir kontrol (Bootstrap 'required' zaten yapar ama biz de görelim)
        if (ad === "" || eposta === "") {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        // Başarılı durumda Sonuç Alanı'na Bootstrap kartı basalım
        ozetAlani.innerHTML = `
            <div class="col-md-6">
                <div class="card border-success shadow">
                    <div class="card-header bg-success text-white">
                        Başvuru Başarılı!
                    </div>
                    <div class="card-body">
                        <p><strong>Ad Soyad:</strong> ${ad}</p>
                        <p><strong>E-posta:</strong> ${eposta}</p>
                        <p class="text-muted small">Kaydınız sisteme başarıyla işlenmiştir.</p>
                    </div>
                </div>
            </div>
        `;

        // Formu temizleyelim
        kayitFormu.reset();
    });
});
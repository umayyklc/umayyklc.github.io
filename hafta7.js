document.addEventListener("DOMContentLoaded", function () {
    
    // Elemanları Seçiyoruz
    const btnTema = document.getElementById("btnTema");
    const kayitFormu = document.getElementById("kayitFormu");
    const ozetAlani = document.getElementById("ozetAlani");
    const btnTemizle = document.getElementById("btnTemizle");

    // 1. TEMA DEĞİŞTİRME FONKSİYONU
    btnTema.addEventListener("click", function () {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
        
        // Kartların içindeki metin renklerini de ayarlayalım
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.toggle('bg-secondary');
            card.classList.toggle('text-white');
        });

        if (document.body.classList.contains("bg-dark")) {
            btnTema.textContent = "Aydınlık Moda Geç";
            btnTema.classList.replace("btn-outline-warning", "btn-outline-light");
        } else {
            btnTema.textContent = "Karanlık Moda Geç";
            btnTema.classList.replace("btn-outline-light", "btn-outline-warning");
        }
    });

    // 2. FORM GÖNDERME (ÖZET OLUŞTURMA)
    kayitFormu.addEventListener("submit", function (event) {
        event.preventDefault();

        const ad = document.getElementById("adSoyad").value;
        const eposta = document.getElementById("eposta").value;
        const bolum = document.getElementById("bolum").value;
        const sinif = document.getElementById("sinif").value;
        // Katılım türünü buradan çekiyoruz:
        const katilim = document.getElementById("katilimTuru").value;

        // Mavi kutuyu yeşil özet kutusuna çeviriyoruz
        ozetAlani.classList.remove("alert-info");
        ozetAlani.classList.add("alert-success");

        // Özet alanına katılım bilgisini de ekliyoruz:
        ozetAlani.innerHTML = `
            <div class="text-start">
                <h5 class="fw-bold border-bottom pb-2">✅ Başvuru Özeti</h5>
                <p class="mb-1"><strong>Ad Soyad:</strong> ${ad}</p>
                <p class="mb-1"><strong>E-posta:</strong> ${eposta}</p>
                <p class="mb-1"><strong>Bölüm:</strong> ${bolum}</p>
                <p class="mb-1"><strong>Sınıf:</strong> ${sinif}</p>
                <p class="mb-1"><strong>Katılım Türü:</strong> ${katilim}</p>
                <p class="mt-3 mb-0 small text-muted text-center italic">Form verileri başarıyla işlendi.</p>
            </div>
        `;
    });

    // 3. FORMU TEMİZLEME FONKSİYONU
    btnTemizle.addEventListener("click", function () {
        kayitFormu.reset(); // Kutuları boşaltır
        ozetAlani.classList.remove("alert-success");
        ozetAlani.classList.add("alert-info");
        ozetAlani.innerHTML = "Henüz bir başvuru yapılmadı. Sonuçlar burada görünecek.";
    });
});

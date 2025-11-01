# 🥗 Diet & Wellness Hub

Modern ve kullanıcı dostu bir sağlıklı yaşam rehberi web uygulaması. Vücut kitle indeksi (BMI) hesaplama, kişiselleştirilmiş beslenme önerileri ve sağlıklı yaşam tavsiyeleri sunar.

![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=flat-square&logo=dotnet)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-MVC-512BD4?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/status-in_development-yellow?style=flat-square)

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Yol Haritası](#-yol-haritası)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

## ✨ Özellikler

### Mevcut Özellikler

- ✅ **BMI Hesaplama Sistemi**
  - Cinsiyet, yaş, boy ve kilo bilgilerine göre detaylı analiz
  - Görsel vücut silueti gösterimi (erkek/kadın)
  - Renkli BMI gösterge barı
  - Kategori bazlı değerlendirme (Zayıf, Normal, Fazla Kilolu, Obez)
  
- ✅ **Kişiselleştirilmiş Öneriler**
  - Her BMI kategorisi için özel beslenme tavsiyeleri
  - Yaşam tarzı önerileri
  - Egzersiz programı önerileri

- ✅ **Beslenme Rehberi**
  - Bilimsel kaynaklara dayalı beslenme tavsiyeleri
  - Görsel destekli içerik kartları
  - Örnek günlük beslenme planları
  - Ana öğün ve ara öğün önerileri

- ✅ **Modern UI/UX**
  - Responsive tasarım (mobil uyumlu)
  - Mavi-yeşil profesyonel renk paleti
  - Smooth animasyonlar ve geçişler
  - Kullanıcı dostu arayüz

## 🛠 Teknolojiler

### Backend
- **ASP.NET Core 8.0** - MVC Pattern
- **C#** - Programlama dili
- **Razor Pages** - View Engine

### Frontend
- **HTML5** - Yapı
- **CSS3** - Stil ve animasyonlar
- **JavaScript (Vanilla)** - İstemci tarafı mantık
- **Bootstrap 5** - Responsive grid sistemi

### Araçlar
- **Visual Studio 2022** - IDE
- **Git** - Versiyon kontrolü

## 🚀 Kurulum

### Gereksinimler

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download)
- [Visual Studio 2022](https://visualstudio.microsoft.com/) (veya VS Code)
- Git

### Adımlar

1. **Projeyi klonlayın**
```bash
   git clone https://github.com/kullanici-adiniz/diet-wellness-hub.git
   cd diet-wellness-hub
```

2. **Görselleri yerleştirin**
   
   `wwwroot/images/` klasörüne aşağıdaki görselleri ekleyin:
   - `hero-image.jpg`
   - Vücut siluetleri: `male-*.png`, `female-*.png`
   - İkonlar: `icon-*.png`
   - Beslenme görselleri: `tip-*.jpg`

3. **Projeyi Visual Studio ile açın**
```bash
   # Visual Studio ile
   start DietWellnessHub.sln
   
   # veya VS Code ile
   code .
```

4. **Bağımlılıkları yükleyin**
   
   Visual Studio otomatik olarak NuGet paketlerini yükleyecektir.

5. **Projeyi çalıştırın**
   
   Visual Studio'da `F5` tuşuna basın veya:
```bash
   dotnet run
```

6. **Tarayıcıda açın**
   
   Varsayılan olarak `https://localhost:5001` adresinde çalışacaktır.

## 💡 Kullanım

### BMI Hesaplama

1. Ana sayfadan "BMI Hesapla" butonuna tıklayın
2. Cinsiyet, yaş, boy ve kilo bilgilerinizi girin
3. "Hesapla ve Görselleştir" butonuna tıklayın
4. Sonuçlarınızı ve önerilerinizi görüntüleyin

### Beslenme Tavsiyeleri

1. Menüden "Beslenme Tavsiyeleri" sekmesine gidin
2. Kategori bazlı tavsiyeleri inceleyin
3. Örnek beslenme planını görüntüleyin

## 📸 Ekran Görüntüleri

> *Ekran görüntüleri eklenecek*

### Ana Sayfa
[Ana sayfa görüntüsü buraya gelecek]

### BMI Hesaplama
[BMI hesaplama sayfası görüntüsü buraya gelecek]

### Beslenme Tavsiyeleri
[Beslenme tavsiyeleri sayfası görüntüsü buraya gelecek]

## 🗺 Yol Haritası

### Kısa Vadeli (v1.1 - v1.3)

- [ ] **Kullanıcı Hesap Sistemi**
  - Kayıt/Giriş işlemleri
  - Kullanıcı profili yönetimi
  - Email doğrulama

- [ ] **Veri Saklama**
  - BMI geçmişi kaydetme
  - İlerleme grafikleri
  - Haftalık/aylık raporlar

- [ ] **Gelişmiş Hesaplamalar**
  - Vücut yağ oranı hesaplama
  - Bazal metabolizma hızı (BMR)
  - Günlük kalori ihtiyacı hesaplama
  - Makro besin dağılımı önerileri

- [ ] **Dil Desteği**
  - İngilizce versiyonu
  - Çoklu dil altyapısı

### Orta Vadeli (v2.0)

- [ ] **Gelişmiş Özellikler**
  - Öğün planlayıcı (meal planner)
  - Alışveriş listesi oluşturucu
  - Yemek tarifleri veritabanı
  - Kalori sayacı

- [ ] **Sosyal Özellikler**
  - İlerleme paylaşımı
  - Motivasyon sistemi
  - Başarı rozetleri
  - Topluluk forumu

- [ ] **Mobil Uygulama**
  - iOS ve Android uygulaması
  - Push bildirimleri
  - Offline mod

### Uzun Vadeli (v3.0+)

- [ ] **AI Entegrasyonu**
  - Kişiselleştirilmiş beslenme planları
  - Yemek fotoğrafından kalori tahmini
  - Chatbot danışman

- [ ] **Profesyonel Entegrasyon**
  - Diyetisyen paneli
  - Randevu sistemi
  - Video konsültasyon

- [ ] **Wearable Entegrasyonu**
  - Akıllı saat bağlantısı
  - Aktivite takibi
  - Kalp ritmi ve uyku analizi

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyorum! Projeye katkıda bulunmak için:

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik: XYZ'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

### Katkı Kuralları

- Kod standartlarına uyun
- Commit mesajlarını açıklayıcı yazın
- Her özellik için test ekleyin
- Dokümantasyonu güncelleyin

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**[Adınız]**

- GitHub: [@kullanici-adiniz](https://github.com/kullanici-adiniz)
- LinkedIn: [Profiliniz](https://linkedin.com/in/profiliniz)
- Email: email@example.com

## 🙏 Teşekkürler

- Bootstrap ekibine responsive framework için
- Unsplash ve Freepik'e görseller için
- Açık kaynak topluluğuna ilham için

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Not:** Bu proje aktif geliştirme aşamasındadır. Önerileriniz ve geri bildirimleriniz için issue açabilirsiniz.
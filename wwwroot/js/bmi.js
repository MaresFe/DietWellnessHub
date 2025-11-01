function calculateBMI() {
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;

    if (!age || !height || !weight) {
        alert('Lütfen tüm alanları doldurun');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category, description, color, recommendations, gaugePosition, imageFile;

    if (bmi < 18.5) {
        category = 'Zayıf';
        color = '#3b82f6';
        gaugePosition = (bmi / 18.5) * 25;
        imageFile = gender === 'male' ? 'male-underweight.png' : 'female-underweight.png';
        description = 'Vücut kitle indeksiniz normalin altında';
        recommendations = `
            <ul>
                <li>Günlük kalori alımınızı kontrollü şekilde artırın (300-500 kalori)</li>
                <li>Protein ve sağlıklı yağ içeren besinlere öncelik verin</li>
                <li>Günde 5-6 küçük öğün şeklinde beslenin</li>
                <li>Kuvvet antrenmanları yaparak kas kütlenizi artırın</li>
                <li>Fındık, avokado, zeytinyağı gibi kalori yoğun sağlıklı gıdalar tüketin</li>
                <li>Bir beslenme uzmanına danışmanızı öneririz</li>
            </ul>
        `;
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal Kilo';
        color = '#10b981';
        gaugePosition = 25 + ((bmi - 18.5) / 6.5) * 25;
        imageFile = gender === 'male' ? 'male-normal.png' : 'female-normal.png';
        description = 'Tebrikler! Sağlıklı kilo aralığındasınız';
        recommendations = `
            <ul>
                <li>Mevcut dengeli beslenme düzeninizi sürdürün</li>
                <li>Haftada en az 150 dakika orta yoğunlukta egzersiz yapın</li>
                <li>Günde en az 2.5 litre su için</li>
                <li>Sebze ve meyve tüketiminizi yüksek tutun</li>
                <li>Yeterli uyku ve dinlenmeye önem verin (7-8 saat)</li>
                <li>Düzenli sağlık kontrolleri yaptırın</li>
            </ul>
        `;
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Fazla Kilolu';
        color = '#f59e0b';
        gaugePosition = 50 + ((bmi - 25) / 5) * 25;
        imageFile = gender === 'male' ? 'male-overweight.png' : 'female-overweight.png';
        description = 'Sağlıklı kilo verme programı öneriyoruz';
        recommendations = `
            <ul>
                <li>Günlük 300-500 kalori açığı oluşturun</li>
                <li>Porsiyon kontrolüne dikkat edin, yavaş yemek yiyin</li>
                <li>Haftada 4-5 gün kardiyovasküler egzersiz yapın</li>
                <li>Şekerli içecekler ve işlenmiş gıdaları tamamen bırakın</li>
                <li>Protein tüketiminizi artırın (tok tutar ve kas korur)</li>
                <li>Ara öğünlerde sağlıklı atıştırmalıklar tercih edin</li>
                <li>Bir diyetisyenden destek alabilirsiniz</li>
            </ul>
        `;
    } else if (bmi >= 30 && bmi < 35) {
        category = 'Obez';
        color = '#ef4444';
        gaugePosition = 75 + ((bmi - 30) / 10) * 25;
        imageFile = gender === 'male' ? 'male-obese.png' : 'female-obese.png';
        description = 'Sağlık riskleri için profesyonel destek almalısınız';
        recommendations = `
            <ul>
                <li>Mutlaka bir endokrinolog ve diyetisyene danışın</li>
                <li>Kademeli ve sürdürülebilir kilo verme planı yapın</li>
                <li>Düzenli kan değerleri kontrolü yaptırın (şeker, kolesterol vb.)</li>
                <li>Yürüyüş gibi düşük etkili egzersizlerle başlayın</li>
                <li>Duygusal yeme alışkanlıklarınızı değerlendirin</li>
                <li>Destek gruplarına katılmayı düşünün</li>
                <li>Hedeflerinizi küçük adımlara bölün</li>
            </ul>
        `;
    } else {
        category = 'İleri Derece Obez';
        color = '#dc2626';
        gaugePosition = Math.min(95, 75 + ((bmi - 35) / 10) * 25);
        imageFile = gender === 'male' ? 'male-extreme.png' : 'female-extreme.png';
        description = 'Acil sağlık kontrolü ve profesyonel destek kritik önem taşıyor';
        recommendations = `
            <ul>
                <li>Acilen bir endokrinolog, diyetisyen ve kardiyolog ile görüşün</li>
                <li>Kapsamlı sağlık taraması yaptırın</li>
                <li>Medikal gözetim altında kilo verme programı başlatın</li>
                <li>Psikolojik destek almanız çok önemli</li>
                <li>Fiziksel aktiviteyi kademeli ve doktor gözetiminde artırın</li>
                <li>Uyku apnesi gibi komplikasyonlar için test yaptırın</li>
                <li>Cerrahi seçenekleri doktorunuzla değerlendirin</li>
            </ul>
        `;
    }

    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiValue').style.color = color;
    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('bmiCategory').style.color = color;
    document.getElementById('bmiDescription').textContent = description;
    document.getElementById('recommendations').innerHTML = recommendations;

    document.getElementById('silhouetteImg').src = '/images/' + imageFile;

    const pointer = document.getElementById('gaugePointer');
    pointer.style.left = gaugePosition + '%';

    document.getElementById('result').style.display = 'block';

    setTimeout(() => {
        document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}
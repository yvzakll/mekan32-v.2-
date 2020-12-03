var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res, next) {
    res.render('mekanlar-liste', {
        'baslik': 'Anasayfa',
        'footer': ' Yavuz AKILLI 2020',
        'sayfaBaslik': {
            'siteAd': 'Mekan 32',
            'aciklama': 'Isparta civarındaki mekanları keşfedin!'
        },
        'mekanlar': [
            {
                'ad': 'Starbucks',
                'adres': 'Centrum Garden',
                'puan': '4',
                'imkanlar': ['kahve', 'çay', 'pasta'],
                'mesafe': '10Km'
            },
            {
                'ad': 'Gloria Jeans',
                'adres': 'Iyaş Avm',
                'puan': '4',
                'imkanlar': ['kahve', 'kek', 'çay'],
                'mesafe': '5 km'

            },
            {
                'ad': 'Çay ve Ötesi',
                'adres': 'Fatih Mahallesi',
                'puan': '3',
                'imkanlar': ['kahve', 'çay', 'pasta'],
                'mesafe': '10Km'
            },
            {
                'ad': 'Antre Gurme',
                'adres': 'İyaş AVM',
                'puan': '5',
                'imkanlar': ['kahve', 'çay', 'pasta'],
                'mesafe': '10Km'
            },
            {
                'ad': 'Burger King',
                'adres': 'Centrum Garden',
                'puan': '3',
                'imkanlar': ['kahve', 'çay', 'pasta'],
                'mesafe': '10Km'
            },
        ]
    });
}


const mekanBilgisi = function (req, res, next) {
    res.render('mekan-detay', {
        'baslik': 'Mekan Bilgisi',
        'sayfaBaslik': 'Starbucks',
        'footer': ' Yavuz AKILLI 2020',
        'mekanBilgisi': {
            'ad': 'Starbucks',
            'adres': 'Centrum Garden',
            'puan': 3,
            'imkanlar': ['Kahve', 'Pasta', 'Kek'],
            'koordinatlar': {
                'enlem': '37.781885',
                'boylam': '30.566034'
            },
            'saatler': [
                {
                    'gunler': 'Pazartesi-Cuma',
                    'acilis': '7:00',
                    'kapanis': '22:30',
                    'kapali': false
              },
                {
                    'gunler': 'Pazar',
                    'kapali': true
              }
          ],
            'yorumlar': [
                {
                    'yorumYapan': 'Asım Sinan Yüksel',
                    'puan': 3,
                    'tarih': "18 Ekim 2017",
                    'yorumMetni': 'Kahveleri çok güzel'
              }
          ]
        }
    });
}


const yorumEkle = function (req, res, next) {
    res.render('yorum-ekle', {
        baslik: 'Yorum Ekle',
        'footer': ' Yavuz AKILLI 2020',
    });
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle

}

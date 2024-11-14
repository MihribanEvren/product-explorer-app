# Product Explorer App

- API'dan çektiğimiz ürünleri listelemeyi, ürün aramayı ve ürünün detaylarına göz atabilmeyi sağlayan bir uygulama.
- Proje structure'ını gelişime ve yeni feature'lar eklemeye açık, clean bir yapıda kurdum.
- Örneğin, bir özellik olarak API'dan kullanıcıları çekmeye karar verdiğimizde, `src/api` altında `userApi` klasörünü oluşturabilir ve bu işlemleri yönetmek için `userHooks` klasörünü ekleyebiliriz.
- Her sayfada kullanılacak bir bileşen eklememiz gerektiğinde, bunu yalnızca `MainLayout` bileşenine eklememiz yeterli olur.

#### Live Demo: https://product-explorer-app.netlify.app/

## Klasör Yapısı

```plaintext
src
│
├── api                       # API işlemleri
│   └── productApi            # Product API istekleri
│       ├── fetchProducts.js  # Tüm productları çekmek için fetch func.
│       └── fetchProduct.js   # Id'ye göre tek product çektiğimiz fetch func.
│
├── hooks                     # Custom hook’lar
│   └── productHooks          # Productlar için hook'lar
│       ├── useProducts.js    # Tüm ürün verilerini Tanstack Query ile çekmeyi yönetmek için hook
│       └── useProduct.js     # Tek bir ürün verisini çekmek için Tanstack Query hook'u
│
├── state                     # Zustand ile state yönetimi
│   └── productStore          # Product için store
│       ├── productsStore.js  # Toplam ürün sayısını tutan state
│       └── filtersStore.js   # Filtreleme ve sayfalama state'leri
│
├── layouts                   # Ortak layout bileşeni
│   └── MainLayout.jsx        # Navbar ve ortak bileşenleri içeren ana layout (Navbar + child)
│
├── components                    # React componentleri
│   ├── navbar                    # Navigation bar
│   │   ├── Navbar.jsx            # Main navbar
│   │   └── SearchInput.jsx       # Ürün arama
│   ├── sidebar                   # Yan menü (Geliştirilebilecek Feature)
│   │   └── Sidebar.jsx           # Kategori, marka, fiyat filtresi için yan menü
│   ├── main
│   │   ├── ProductList.jsx       # Ürünlerin listelendiği bileşen
│   │   ├── ProductCard.jsx       # Her ürün için kart yapısı
│   │   ├── Pagination.jsx        # Sayfa numaralandırma
│   │   ├── ItemCount.jsx         # Sayfa başına ürün sayısı seçimi
│   │   └── ProductSkeleton.jsx   # Yüklenme sırasında gösterilecek iskelet yapısı
│   └── productDetail             # Ürün detay
│       └── ProductDetail.jsx     # Seçilen ürünün detayları
│
├── pages                         # Sayfalar
│   ├── HomePage.jsx              # Ana sayfa ve Ürün listesi (Navbar + Main)
│   └── ProductDetailPage.jsx     # Ürün detay sayfası (Navbar + ProductDetail)
│
├── App.jsx                       # Ana uygulama ve routing yapısı
└── main.jsx
```

### Kullanılan Kütüphaneler

- **React:** UI componentleri oluşturmak için
- **Zustand:** Global state management
- **Tanstack - Material UI:** Stil ve layout düzeni
- **React Router:** Routing işlemleri için

### Özellikler

- Ürün listeleme
- Sayfa başına ürün sayısı seçimi
- Sayfalama
- Ürün detay sayfası
- Search input ile arama yapma

### Geliştirilebilir Özellikler

- Sidebar kısmı ile dinamik ürün filtreleme
- Sepet işlemleri

### Kurulum

Bu projeyi kendi bilgisayarınızda çalıştırmak isterseniz:

#### 1. Depoyu yerel ortamınıza klonlayın

```
git clone https://github.com/mihribanevren/product-explorer-app.git
```

#### 2. Bağımlılıkları yükleyin

```
npm install
```

#### 3. Projeyi başlatın

```
npm run dev
```

#### 4. Projeyi tarayıcıda görüntüleyin

Projeyi başlattıktan sonra, varsayılan olarak http://localhost:5173 adresinde çalışacaktır.

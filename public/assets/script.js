document.addEventListener('DOMContentLoaded', function () {
  // Product slider
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: "start",
      });
    });
  });

  // Animation for elements when they come into view
  const animateElements = document.querySelectorAll('.feature, .brand-item, .map-container, .hero-text');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const brandItems = document.querySelectorAll('.brand-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  brandItems.forEach(item => {
    observer.observe(item);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat h3");

  counters.forEach((counter) => {
    const target = parseInt(counter.textContent.replace(/,/g, ""));
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current).toLocaleString();
      }
    }, 20);
  });
}

// Trigger counter animation when stats section is visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
});

const statsSection = document.querySelector(".stats");
if (statsSection) {
  observer.observe(statsSection);
}

// Add hover effects and animations
document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in animation to elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply fade-in to various elements
  document
    .querySelectorAll(".team-member, .testimonial, .stat, .feature")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      fadeObserver.observe(el);
    });
});

//Product
async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();

    const container = document.querySelector('.products-grid');
    container.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('products-card');
      card.setAttribute('data-product-id', product.id);

      card.innerHTML = `
        <div class="products-img">
          <img src="foto/${product.image}" alt="${product.name}">
        </div>
        <div class="products-info">
          <h3>${product.brand} ${product.name}</h3>
          <p>Rp.${Number(product.price).toLocaleString('id-ID')}</p>
        </div>
        <a href="detail_product.html?id=${product.id}" class="btn-link">Detail</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Gagal mengambil produk:', error);
  }
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchProducts);

async function fetchProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    document.getElementById('detail-product').innerHTML = '<p>ID produk tidak ditemukan.</p>';
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const product = await response.json();

    const container = document.getElementById('detail-product');

    container.innerHTML = `
          <img src="foto/${product.image}">
          <h2>${product.brand} ${product.name}</h2>
          <p class="price">Rp.${Number(product.price).toLocaleString('id-ID')}</p>
          <p class="model">Model: ${product.model || '-'}</p>
          <p>${product.description || 'Tidak ada deskripsi tersedia.'}</p>
          <a href="./product.html" class="btn-back">← Kembali ke Produk</a>
        `;

  } catch (error) {
    console.error('Gagal mengambil detail produk:', error);
    document.getElementById('product-detail').innerHTML = '<p>Gagal memuat detail produk.</p>';
  }
}

// Jalankan saat halaman siap
document.addEventListener('DOMContentLoaded', fetchProductDetail);
src="https://unpkg.com/leaflet/dist/leaflet.js"
  const locations = [
    {
      name: "Gunung Sahendaruman, Sangihe",
      butterfly: "Papilio blumei",
      status: "Rentan (VU)",
      count: 15,
      lat: 3.5872,
      lng: 125.4987,
      gmaps_url: "https://www.google.com/maps?q=3.5872,125.4987",
      note: "Kupu-kupu endemik Sulawesi, sering ditemukan di daerah hutan pegunungan."
    },
    {
      name: "Tahuna, Sangihe",
      butterfly: "Troides hypolitus",
      status: "Hampir Terancam (NT)",
      count: 8,
      lat: 3.6115,
      lng: 125.4683,
      gmaps_url: "https://www.google.com/maps?q=3.6115,125.4683",
      note: "Spesies besar dengan sayap hitam dan emas, sering dijumpai di hutan sekunder."
    },
    {
      name: "Pulau Salibabu, Talaud",
      butterfly: "Ideopsis vitrea",
      status: "Tidak Dievaluasi (NE)",
      count: 20,
      lat: 4.2447,
      lng: 126.7893,
      gmaps_url: "https://www.google.com/maps?q=4.2447,126.7893",
      note: "Sering ditemukan di dekat pantai dan hutan bakau."
    },
    {
      name: "Pulau Karakelang, Talaud",
      butterfly: "Graphium androcles",
      status: "Terancam (EN)",
      count: 6,
      lat: 4.2632,
      lng: 126.8415,
      gmaps_url: "https://www.google.com/maps?q=4.2632,126.8415",
      note: "Kupu-kupu ekor panjang yang langka, ditemukan di hutan primer."
    },
    {
      name: "Beo, Talaud",
      butterfly: "Euploea eupator",
      status: "Tidak Dievaluasi (NE)",
      count: 12,
      lat: 4.0211,
      lng: 126.7044,
      gmaps_url: "https://www.google.com/maps?q=4.0211,126.7044",
      note: "Spesies berwarna gelap dengan pola unik, sering terlihat di sekitar sungai."
    },
    {
      name: "Gunung Awu, Siau",
      butterfly: "Delias orphne",
      status: "Rentan (VU)",
      count: 10,
      lat: 2.7739,
      lng: 125.3784,
      gmaps_url: "https://www.google.com/maps?q=2.7739,125.3784",
      note: "Kupu-kupu khas dengan warna putih dan kuning, menghuni hutan pegunungan."
    },
    {
      name: "Pulau Siau",
      butterfly: "Hypolimnas bolina",
      status: "Tidak Terancam (LC)",
      count: 18,
      lat: 2.7532,
      lng: 125.3675,
      gmaps_url: "https://www.google.com/maps?q=2.7532,125.3675",
      note: "Jantan memiliki sayap biru metalik, sering dijumpai di kebun dan hutan sekunder."
    },
    {
      name: "Pulau Kabaruan, Talaud",
      butterfly: "Vindula arsinoe",
      status: "Tidak Dievaluasi (NE)",
      count: 9,
      lat: 4.1204,
      lng: 126.8292,
      gmaps_url: "https://www.google.com/maps?q=4.1204,126.8292",
      note: "Spesies berwarna oranye terang dengan motif unik, umum di daerah terbuka."
    },
    {
      name: "Tabukan Selatan, Sangihe",
      butterfly: "Ornithoptera croesus",
      status: "Terancam (EN)",
      count: 5,
      lat: 3.5061,
      lng: 125.4879,
      gmaps_url: "https://www.google.com/maps?q=3.5061,125.4879",
      note: "Salah satu kupu-kupu terbesar dengan warna emas mencolok, endemik Sulawesi dan Maluku."
    },
    {
      name: "Pulau Nanusa, Talaud",
      butterfly: "Danaus plexippus",
      status: "Tidak Terancam (LC)",
      count: 25,
      lat: 4.4031,
      lng: 127.0648,
      gmaps_url: "https://www.google.com/maps?q=4.4031,127.0648",
      note: "Migrasi dari wilayah lain, sering ditemukan di lahan terbuka dan kebun."
    }
  ];

  let mapInitialized = false;

  function showMap() {
    document.getElementById('mapSection').style.display = 'block';
    window.scrollTo({
      top: document.getElementById('mapSection').offsetTop - 50,
      behavior: 'smooth'
    });

    if (!mapInitialized) {
      const map = L.map('map').setView([3.5, 125.7], 7);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      locations.forEach(loc => {
        const popupContent = `
          <b>${loc.name}</b><br>
          <i>${loc.butterfly}</i><br>
          Status: ${loc.status}<br>
          Jumlah: ${loc.count}<br>
          <small>${loc.note}</small><br>
          <a href="${loc.gmaps_url}" target="_blank">Lihat di Google Maps</a>
        `;
        L.marker([loc.lat, loc.lng]).addTo(map).bindPopup(popupContent);
      });

      mapInitialized = true;
    }
  }
const festivals2026 = [
  { name: "Lunar New Year", date: "2026-02-17", location: "China, Vietnam, South Korea", region: "Asia", category: "Cultural / New Year", description: "Celebrates the start of the lunar year with family gatherings, parades, and traditional food.", travelTip: "Major city parades and temple fairs" },
  { name: "Maha Shivaratri", date: "2026-02-15", location: "India, Nepal", region: "Asia", category: "Hindu", description: "Night-long worship dedicated to Lord Shiva with fasting and devotional chanting.", travelTip: "Temple events and overnight vigils" },
  { name: "Rio Carnival", date: "2026-02-13", location: "Rio de Janeiro, Brazil", region: "South America", category: "Carnival", description: "World-famous samba parades, blocos, costumes, and street celebrations.", travelTip: "Sambadrome and neighborhood blocos" },
  { name: "Holi", date: "2026-03-04", location: "India, Nepal", region: "Asia", category: "Hindu", description: "Festival of colors marking spring, joy, and social togetherness.", travelTip: "Color-play events in Jaipur, Mathura, and Kathmandu" },
  { name: "Nowruz", date: "2026-03-20", location: "Iran, Central Asia, diaspora worldwide", region: "Middle East / Central Asia", category: "New Year", description: "Persian New Year with home visits, symbolic tables, and seasonal renewal rituals.", travelTip: "Public concerts and spring gatherings" },
  { name: "Hanami Season", date: "2026-03-25", location: "Japan", region: "Asia", category: "Seasonal", description: "Cherry blossom viewing season celebrated with picnics in parks and temple grounds.", travelTip: "Best viewed from late March to early April" },
  { name: "Ramadan (begins)", date: "2026-02-18", location: "Global", region: "Worldwide", category: "Islamic", description: "Month of fasting, reflection, and community prayer observed by Muslims worldwide.", travelTip: "Iftar markets and mosque gatherings" },
  { name: "Eid al-Fitr", date: "2026-03-20", location: "Global", region: "Worldwide", category: "Islamic", description: "Festival marking the end of Ramadan with prayers, meals, and charity.", travelTip: "Major prayer grounds and festive bazaars" },
  { name: "Songkran", date: "2026-04-13", location: "Thailand", region: "Asia", category: "New Year", description: "Thai New Year festival known for ceremonial water blessings and citywide water fights.", travelTip: "Bangkok and Chiang Mai celebrations" },
  { name: "Vaisakhi", date: "2026-04-14", location: "India, Pakistan, global Sikh diaspora", region: "Asia", category: "Sikh", description: "Harvest festival and Sikh New Year commemorating the Khalsa's founding.", travelTip: "Nagar kirtan processions and community meals" },
  { name: "Easter", date: "2026-04-05", location: "Global", region: "Worldwide", category: "Christian", description: "Christian celebration of resurrection observed with church services and family traditions.", travelTip: "Holy Week processions and sunrise services" },
  { name: "Semana Santa", date: "2026-03-29", location: "Spain, Latin America, Philippines", region: "Europe / Americas / Asia", category: "Christian", description: "Holy Week traditions with elaborate processions, music, and religious observances.", travelTip: "Seville and Antigua processions" },
  { name: "Vesak", date: "2026-05-01", location: "Sri Lanka, Thailand, Cambodia, global Buddhist communities", region: "Asia", category: "Buddhist", description: "Commemorates the Buddha's birth, enlightenment, and passing with rituals and lantern displays.", travelTip: "Temple ceremonies and lantern festivals" },
  { name: "Beltane Fire Festival", date: "2026-04-30", location: "Edinburgh, Scotland", region: "Europe", category: "Pagan / Cultural", description: "Modern revival of Celtic spring rites with fire performances and symbolic processions.", travelTip: "Evening hillside performances" },
  { name: "Dragon Boat Festival", date: "2026-06-19", location: "China, Taiwan, Hong Kong", region: "Asia", category: "Cultural", description: "Features dragon boat races and traditional rice dumplings.", travelTip: "Waterfront races and local markets" },
  { name: "Inti Raymi", date: "2026-06-24", location: "Cusco, Peru", region: "South America", category: "Indigenous", description: "Incan Festival of the Sun with historical reenactments and ceremonies.", travelTip: "Cusco main events and Sacsayhuaman reenactment" },
  { name: "Midsummer", date: "2026-06-20", location: "Sweden, Finland, Baltic region", region: "Europe", category: "Seasonal", description: "Celebrates the summer solstice with maypoles, dances, and outdoor feasts.", travelTip: "Countryside celebrations and bonfires" },
  { name: "Eid al-Adha", date: "2026-05-27", location: "Global", region: "Worldwide", category: "Islamic", description: "Festival of sacrifice marked by prayers, charity, and shared meals.", travelTip: "Community celebrations and charitable events" },
  { name: "Naadam", date: "2026-07-11", location: "Mongolia", region: "Asia", category: "Cultural", description: "Traditional festival of wrestling, archery, and horse racing.", travelTip: "Ulaanbaatar opening ceremony and countryside races" },
  { name: "Obon", date: "2026-08-13", location: "Japan", region: "Asia", category: "Buddhist / Cultural", description: "Honors ancestors through dance festivals, lanterns, and family reunions.", travelTip: "Bon Odori dances and floating lantern rituals" },
  { name: "La Tomatina", date: "2026-08-26", location: "Buñol, Spain", region: "Europe", category: "Cultural", description: "Large-scale tomato-throwing festival held annually in Buñol.", travelTip: "Ticketed town-center event" },
  { name: "Onam", date: "2026-08-28", location: "Kerala, India", region: "Asia", category: "Hindu / Harvest", description: "Harvest festival with floral designs, boat races, and traditional feasts.", travelTip: "Snake boat races and cultural performances" },
  { name: "Rosh Hashanah", date: "2026-09-10", location: "Israel and Jewish communities worldwide", region: "Worldwide", category: "Jewish", description: "Jewish New Year focused on reflection, prayer, and symbolic foods.", travelTip: "Synagogue services and family dinners" },
  { name: "Oktoberfest", date: "2026-09-19", location: "Munich, Germany", region: "Europe", category: "Cultural", description: "Historic beer festival featuring Bavarian music, cuisine, and fairgrounds.", travelTip: "Large beer tents and traditional dress" },
  { name: "Mid-Autumn Festival", date: "2026-09-25", location: "China, Vietnam, East Asia", region: "Asia", category: "Cultural / Lunar", description: "Harvest moon festival with lanterns and mooncakes.", travelTip: "Night markets and lantern displays" },
  { name: "Diwali", date: "2026-11-08", location: "India and global diaspora", region: "Asia / Worldwide", category: "Hindu", description: "Festival of lights symbolizing victory of light over darkness.", travelTip: "Citywide light displays and family celebrations" },
  { name: "Día de los Muertos", date: "2026-11-01", location: "Mexico", region: "North America", category: "Cultural / Ancestral", description: "Honors deceased loved ones with altars, marigolds, and gatherings.", travelTip: "Ofrenda displays and cemetery vigils" },
  { name: "Loy Krathong", date: "2026-11-24", location: "Thailand", region: "Asia", category: "Buddhist / Cultural", description: "Festival of lights on water with floating baskets and candles.", travelTip: "Riverside ceremonies and lantern releases" },
  { name: "Hanukkah (begins)", date: "2026-12-04", location: "Jewish communities worldwide", region: "Worldwide", category: "Jewish", description: "Festival of lights commemorating the rededication of the Second Temple.", travelTip: "Public menorah lighting ceremonies" },
  { name: "Christmas", date: "2026-12-25", location: "Global", region: "Worldwide", category: "Christian", description: "Commemorates the birth of Jesus with worship services and festive traditions.", travelTip: "Christmas markets and midnight masses" },
  { name: "Kwanzaa", date: "2026-12-26", location: "United States and diaspora communities", region: "North America", category: "Cultural", description: "Celebration of African heritage, unity, and community values.", travelTip: "Community gatherings and candle ceremonies" }
];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const festivalList = document.querySelector("#festivalList");
const template = document.querySelector("#festivalCardTemplate");
const searchInput = document.querySelector("#searchInput");
const monthSelect = document.querySelector("#monthSelect");
const regionSelect = document.querySelector("#regionSelect");
const categorySelect = document.querySelector("#categorySelect");
const stats = document.querySelector("#stats");

function normalizeDate(dateValue) {
  const date = new Date(dateValue);
  return `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

function getMonthLabel(dateValue) {
  return monthNames[new Date(dateValue).getUTCMonth()];
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function populateFilters() {
  uniqueSorted(festivals2026.map((f) => getMonthLabel(f.date))).forEach((month) => {
    monthSelect.insertAdjacentHTML("beforeend", `<option value="${month}">${month}</option>`);
  });

  uniqueSorted(festivals2026.map((f) => f.region)).forEach((region) => {
    regionSelect.insertAdjacentHTML("beforeend", `<option value="${region}">${region}</option>`);
  });

  uniqueSorted(festivals2026.map((f) => f.category)).forEach((category) => {
    categorySelect.insertAdjacentHTML("beforeend", `<option value="${category}">${category}</option>`);
  });
}

function matchesSearch(festival, query) {
  const haystack = `${festival.name} ${festival.location} ${festival.category} ${festival.region} ${festival.description} ${festival.travelTip}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function renderFestivals() {
  const query = searchInput.value.trim();
  const selectedMonth = monthSelect.value;
  const selectedRegion = regionSelect.value;
  const selectedCategory = categorySelect.value;

  const filtered = festivals2026
    .filter((festival) => !query || matchesSearch(festival, query))
    .filter((festival) => !selectedMonth || getMonthLabel(festival.date) === selectedMonth)
    .filter((festival) => !selectedRegion || festival.region === selectedRegion)
    .filter((festival) => !selectedCategory || festival.category === selectedCategory)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  festivalList.innerHTML = "";

  filtered.forEach((festival) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".festival-name").textContent = festival.name;
    card.querySelector(".festival-date").textContent = normalizeDate(festival.date);
    card.querySelector(".festival-location").textContent = festival.location;
    card.querySelector(".festival-category").textContent = festival.category;
    card.querySelector(".festival-region").textContent = festival.region;
    card.querySelector(".festival-description").textContent = festival.description;
    card.querySelector(".festival-travel").textContent = festival.travelTip;
    festivalList.appendChild(card);
  });

  stats.textContent = `Showing ${filtered.length} festivals in 2026.`;
}

[searchInput, monthSelect, regionSelect, categorySelect].forEach((input) => {
  input.addEventListener("input", renderFestivals);
  input.addEventListener("change", renderFestivals);
});

populateFilters();
renderFestivals();

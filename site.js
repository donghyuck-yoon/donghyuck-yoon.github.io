const workGrid = document.querySelector("#work-grid");
workGrid.innerHTML = CONTENT.work.map(x => `
  <article class="work-card">
    <div class="card-meta">${x.year}</div>
    <h3>${x.title}</h3>
    <p>${x.desc}</p>
    <p class="card-role">${x.role}</p>
    ${x.url && x.url !== "#" ? `<a class="card-link" href="${x.url}">Official source →</a>` : `<span class="card-link" style="color:#98a2ad">Official link to be added</span>`}
  </article>
`).join("");

document.querySelector("#timeline").innerHTML = CONTENT.timeline.map(x => `
  <div class="timeline-item">
    <div class="timeline-year">${x.year}</div>
    <h3>${x.title}</h3>
    <p>${x.text}</p>
  </div>
`).join("");

document.querySelector("#pub-list").innerHTML = CONTENT.publications.map(x => `
  <div class="pub">
    <div class="pub-year">${x.year}</div>
    <div>
      <a class="pub-title" href="${x.url}">${x.title}</a>
      <div class="pub-meta">${x.journal}</div>
    </div>
  </div>
`).join("");

document.querySelector("#note-grid").innerHTML = CONTENT.notes.map(x => `
  <article class="note-card">
    <div class="card-meta">${x.year}</div>
    <h3>${x.title}</h3>
    <p>${x.desc}</p>
    <p class="card-role">${x.role}</p>
  </article>
`).join("");

document.querySelector("#year").textContent = new Date().getFullYear();
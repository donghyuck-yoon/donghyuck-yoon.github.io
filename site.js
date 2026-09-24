const workGrid = document.querySelector("#work-grid");

const iconLink = (url, kind) => {
  if (!url) return "";
  const isInterview = kind === "interview";
  return `<a class="mini-icon-link ${isInterview ? "interview-link" : "clip-link"}"
    href="${url}" target="_blank" rel="noopener noreferrer"
    aria-label="${isInterview ? "관련 인터뷰 기사 열기" : "관련 자료 열기"}"
    title="${isInterview ? "관련 인터뷰 기사" : "관련 자료"}">
    <span aria-hidden="true">${isInterview ? "🎙" : "📎"}</span>
  </a>`;
};

const workItemHTML = (item, linkMode) => {
  if (linkMode === "clip") {
    return `
      <li class="work-list-item">
        <span class="work-item-label">${item.label}</span>
        ${iconLink(item.url, "clip")}
      </li>`;
  }

  return `
    <li class="work-list-item">
      ${item.url
        ? `<a class="work-item-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>`
        : `<span class="work-item-label">${item.label}</span>`}
      ${iconLink(item.interviewUrl, "interview")}
    </li>`;
};

workGrid.innerHTML = CONTENT.work.map(x => `
  <article class="work-card work-card-accordion">
    <h3>${x.title}</h3>
    <details class="work-details">
      <summary>더보기</summary>
      <ul class="work-list">
        ${x.items.map(item => workItemHTML(item, x.linkMode)).join("")}
      </ul>
    </details>
  </article>
`).join("");

document.querySelector("#timeline").innerHTML = CONTENT.timeline.map(x => `
  <div class="timeline-item">
    <div class="timeline-year">${x.year}</div>
    <h3>${x.title}</h3>
    ${x.text ? `<p>${x.text}</p>` : ""}
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

document.querySelector("#peer-review-list").innerHTML = CONTENT.peerReviews.map(x => `
  <div class="peer-review-item">${x.journal} <span>(${x.count})</span></div>
`).join("");

document.querySelector("#note-grid").innerHTML = CONTENT.notes.map(x => `
  <article class="archive-item">
    <div class="archive-meta">${x.year}</div>
    <div class="archive-title">${x.title}</div>
  </article>
`).join("");

document.querySelector("#year").textContent = new Date().getFullYear();
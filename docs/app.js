"use strict";

const filter = document.querySelector("#evidence-filter");
const resetButton = document.querySelector("#reset-filter");
const profiles = Array.from(document.querySelectorAll(".profile-card"));
const emptyState = document.querySelector("#empty-state");
const profileList = document.querySelector("#profile-list");
const resultCount = document.querySelector("#result-count");

function applyFilter() {
  const selectedStatus = filter.value;
  let visibleCount = 0;

  for (const profile of profiles) {
    const matches = selectedStatus === "all"
      || profile.dataset.statuses.split(" ").includes(selectedStatus);
    profile.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  const hasResults = visibleCount > 0;
  emptyState.hidden = hasResults;
  profileList.hidden = !hasResults;
  resultCount.textContent = `${visibleCount} fictional ${visibleCount === 1 ? "profile" : "profiles"}`;
}

function resetFilter() {
  filter.value = "all";
  applyFilter();
  filter.focus();
}

filter.addEventListener("change", applyFilter);
resetButton.addEventListener("click", resetFilter);
document.querySelector("[data-reset]").addEventListener("click", resetFilter);
filter.closest(".filter-box").hidden = false;

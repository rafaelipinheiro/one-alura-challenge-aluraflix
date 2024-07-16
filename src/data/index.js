import data from "./data.json";

export function getCategoryData() {
  let categoryData;
  let storedData = localStorage.getItem("categoryDataKey");

  if (!storedData) categoryData = data;
  else categoryData = JSON.parse(storedData);

  return categoryData;
}

export function setLocalStorage(categoryData) {
  localStorage.setItem("categoryDataKey", JSON.stringify(categoryData));
}

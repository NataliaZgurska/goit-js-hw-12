import refs from "./refs";
const { loaderBtn, loaderContainer } = refs;

export function showLoader() {
  loaderContainer.classList.remove('hidden');
}
export function hideLoader() {
  loaderContainer.classList.add('hidden');
}
export function showBtnLoader() {
  loaderBtn.classList.remove('hidden');
}
export function hideBtnLoader() {
  loaderBtn.classList.add('hidden');
}
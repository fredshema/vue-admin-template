export default () => {
  const token = sessionStorage.getItem("access");
  if (!!token) {
    return "/admin";
  } else {
    return "/login";
  }
};

export const protectedRoute = (component) => {
  const isLoggedIn = localStorage.getItem("token");
  if (isLoggedIn) {
    component();
  } else {
    window.location.href = "../screen/userLogin.html";
  }
};

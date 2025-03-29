const app = document.getElementById("app");
const token = localStorage.getItem("token");

if (token) {
  window.location.href = "./screen/employeeDashboard.html";
}

const main = () => {
  app.innerHTML = `
    <div class="container">
        <h1>Welcome to Employee Management System</h1>
        <p>Streamline your employee management process with our intuitive platform. Login to access your details or administrative dashboards.</p>
        <div class="login-buttons">
            <a href="./screen/userLogin.html" class="login-button">User Login</a>
            <a href="./screen/userRegister.html" class="login-button">User Register</a>

        </div>
    </div>

    `;
};
main();

import { defineConfig } from "vite";

export default defineConfig({
    root: ".", // Set the root to the current directory
    build: {
        outDir: "dist", // Output directory inside 'frontend'
        emptyOutDir: true, // Clears the output directory before building
        rollupOptions: {
            input: {
                main: "index.html",
                employeeDashboard: "src/screen/employeeDashboard.html",
                userLogin: "src/screen/userLogin.html",
                userRegister: "src/screen/userRegister.html",
                employeeProfile: "src/screen/employeeProfile.html",
                employeeLeave: "src/screen/employeeLeave.html",
                employeeAttendance: "src/screen/employeeAttendance.html",
                employeeSetting: "src/screen/employeeSetting.html",
            },
        },
    },
    server: {
        port: 5173, // Default Vite port
        open: true, // Automatically opens the browser when running dev server
    },
});

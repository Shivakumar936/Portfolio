import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function pdfHeaderPlugin() {
  return {
    name: "pdf-header-plugin",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const cleanUrl = req.url ? req.url.split("?")[0] : "";
        if (cleanUrl === "/resume.pdf" || cleanUrl === "/images/resume.pdf") {
          const filePath = path.resolve(__dirname, "public/resume.pdf");
          if (fs.existsSync(filePath)) {
            const stat = fs.statSync(filePath);
            res.writeHead(200, {
              "Content-Type": "application/pdf",
              "Content-Length": stat.size,
              "Accept-Ranges": "bytes",
              "Content-Disposition": 'inline; filename="Shivakumar_C_Resume.pdf"',
              "Cache-Control": "public, max-age=3600",
            });
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pdfHeaderPlugin()],
});


# 🎭 Playwright CI/CD Sample Project

## 📌 Project Overview
This project demonstrates a basic Playwright automation framework integrated with GitHub Actions CI/CD pipeline. The tests are automatically triggered on push to the `master` branch or manually via workflow dispatch.

---

## ⚙️ Tech Stack
- Playwright
- Node.js (v18)
- GitHub Actions (CI/CD)
- JavaScript

---

## 🚀 CI/CD Pipeline Features
- Runs tests automatically on push to `master`
- Supports manual trigger with inputs:
  - Environment: `staging` / `production`
  - Browser: `chromium` / `firefox` / `webkit`
- Installs dependencies and Playwright browsers in CI
- Executes test suite using GitHub Actions runner
- Uploads test reports as artifacts

---

## 🧪 How to Run Locally

```bash
npm install
npx playwright install
npx playwright test

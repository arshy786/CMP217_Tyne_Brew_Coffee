# CMP217 Tyne Brew Coffee – Static Website Deployment via GitHub & Terraform

This project is part of the CMP217 DevOps module for the FdSc Software Engineering programme at Newcastle College University Centre. It demonstrates an end-to-end DevOps workflow by automating the creation and deployment of a static HTML-based website using GitHub and Terraform. The project meets all module requirements for infrastructure as code (IaC), source control, versioning, and automation practices aligned with DevOps principles.

## 🌐 Project Repositories

- **Primary Source Code Repository (HTML, CSS):**  
  🔗 https://github.com/arshy786/CMP217_Tyne_Brew_Coffee

- **Terraform Deployment Repository:**  
  🔗 https://github.com/arshy786/tyne-brew-coffee

The website's source files (including `index.html`, `about.html`, `products.html`, `contact.html`, and `style.css`) are managed in the main repository. Terraform is used separately to create and manage the infrastructure repository that hosts the deployed website.

---

## ✅ Key Features

- Static website created using **HTML5** and **CSS3**, fully responsive and visually polished.
- Full integration of:
  - `index.html` (homepage with branding and features)
  - `about.html` (company background and founder info)
  - `products.html` (interactive product list with filter buttons and lightbox)
  - `contact.html` (form with location and contact details)
- **Infrastructure as Code** (IaC) implemented using **Terraform v1.8+**.
- GitHub repository created automatically using `github_repository` resource in Terraform.
- `github_branch_default` resource used to set `main` as the default branch.
- Repositories and pages linked and structured using provider-level configuration.

---

## ⚙️ Technologies Used

| Tool         | Purpose                                 |
|--------------|-----------------------------------------|
| HTML / CSS   | Front-end structure and styling         |
| Git / GitHub | Version control, repository management  |
| Terraform    | Infrastructure automation (IaC)         |
| PowerShell   | CLI for executing Terraform commands    |
| Visual Studio Code | IDE for editing and managing files |

---

## 🚀 Project Workflow Summary

1. **Website Creation:**
   - Designed and built all HTML and CSS files manually.
   - Ensured responsive layout, dark mode toggle, and visual branding.

2. **Version Control:**
   - Created a GitHub repository `CMP217_Tyne_Brew_Coffee` for all source files.
   - Used `git add`, `git commit`, and `git push` to upload all project code.

3. **Terraform Setup:**
   - Created a separate `terraform` folder.
   - Wrote `main.tf` to declare GitHub provider and create the infrastructure repository.
   - Stored personal access token (PAT) and GitHub username in `.tfvars` (or securely via environment variables).
   - Ran `terraform init` and `terraform apply` to deploy infrastructure.

4. **Successful Deployment:**
   - `tyne-brew-coffee` repo created by Terraform.
   - Website ready for deployment through GitHub Pages or future CI/CD pipelines.

---

## 🖼️ Screenshot Guidance (for Implementation Report)

If required to submit screenshots for the implementation document:
- ✅ Screenshot of Visual Studio Code showing folder structure and `style.css`
- ✅ Screenshot of PowerShell showing successful `terraform apply` output
- ✅ Screenshot of GitHub showing both repositories
- ✅ Screenshot of `index.html` or `products.html` running locally in a browser
- ✅ Screenshot of your `.terraform.lock.hcl` file to show version locking

---

## 🧠 Module Learning Outcomes Achieved

- ✅ Demonstrated clear understanding of **Infrastructure as Code**
- ✅ Used **GitHub** effectively for version control
- ✅ Applied **Terraform** to create public repositories via code
- ✅ Followed **DevOps practices** using automated tools and CLI
- ✅ Created reusable, well-structured website files from scratch

---

## 📦 Optional Improvements (Not Implemented)

The following were considered but not implemented due to scope and time:
- Docker containerisation for local or cloud deployment.

This would be useful future enhancements beyond the current assessment.

---

## 👤 Author

**Arshad Aslam**  
FdSc Software Engineering  
Newcastle College University Centre  
GitHub: [arshy786](https://github.com/arshy786)

---

## 📚 References

- GitHub Docs – Creating a repository using Terraform: https://registry.terraform.io/providers/integrations/github/latest/docs/resources/repository  
- Terraform Docs – GitHub Provider: https://registry.terraform.io/providers/integrations/github/latest  
- HashiCorp – Terraform CLI Commands: https://developer.hashicorp.com/terraform/cli  
- CMP217 Module Handbook – Newcastle College (2025)

---
.


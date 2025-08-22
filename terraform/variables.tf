variable "github_owner" {
  description = "Your GitHub username"
  type        = string
}

variable "github_token" {
  description = "Your GitHub Personal Access Token (PAT)"
  type        = string
  sensitive   = true
}

variable "repository_name" {
  description = "The name of your GitHub repository"
  type        = string
}

variable "pages_branch" {
  description = "The branch that will serve GitHub Pages"
  type        = string
  default     = "main"
}


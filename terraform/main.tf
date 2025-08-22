terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}

provider "github" {
  token = var.github_token
  owner = var.github_owner
}

resource "github_repository" "website" {
  name        = "tyne-brew-coffee"
  description = "Static website deployed with Terraform"
  visibility  = "public"
  auto_init   = true
}

resource "github_branch_default" "main" {
  repository = github_repository.website.name
  branch     = "main"
}

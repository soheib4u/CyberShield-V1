# CyberShield-V1

A gamified cybersecurity learning lab for students. Features include interactive lessons, profile system, achievements, trophies, and progress tracking. Built to make cybersecurity fun, competitive, and practical.

---

# Bienvenue dans votre projet (Français)

## Informations sur le projet

URL publique : %VITE_PROJECT_URL%

## Édition et déploiement (Français)

Ce dépôt contient une application web construite avec Vite + React et configurée pour être déployée sur n'importe quel hébergeur statique ou plateforme de déploiement (Netlify, Vercel, GitHub Pages, etc.).

Variables d'environnement
- Copiez `.env.example` en `.env` et modifiez les valeurs locales. Ne commitez jamais vos secrets.

Exemples (PowerShell) :

```powershell
copy .env.example .env
# éditer .env puis
npm install
npm run dev
```

Construction et déploiement

```powershell
npm run build
# puis déployez le dossier `dist` sur votre hébergeur
```

Personnalisation des métadonnées sociales
- Utilisez les variables `VITE_TWITTER_HANDLE` et `VITE_SOCIAL_IMAGE` (définies via `.env`) pour contrôler les meta tags Open Graph / Twitter.

Domaines personnalisés
- Consultez la documentation de votre fournisseur d'hébergement pour connecter un domaine personnalisé et configurer le DNS.

---

# Welcome to your project (English)

## Project info

Public URL: %VITE_PROJECT_URL%

## Editing and deployment (English)

This repository contains a Vite + React web app. You can develop locally and deploy to any static hosting or deployment platform (Netlify, Vercel, GitHub Pages, etc.).

Environment variables
- Copy `.env.example` to `.env` and fill in values. Do not commit secrets.

Example (PowerShell):

```powershell
copy .env.example .env
# edit .env with your values, then
npm install
npm run dev
```

Build and deploy

```powershell
npm run build
# deploy the `dist` folder to your hosting provider
```

Social metadata
- Configure `VITE_TWITTER_HANDLE` and `VITE_SOCIAL_IMAGE` in your `.env` to control Open Graph / Twitter meta tags.

Custom domains
- Follow your hosting provider's docs to connect a custom domain and configure DNS records.

Thank you for using CyberShield — edit and adapt as needed.

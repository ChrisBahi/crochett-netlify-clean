---
title: News
slug: /news
sections:
  - title:
      text: News en temps reel
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Annonces, demandes partenaires et demandes clients.
    text: >-
      Cette page centralise toutes les annonces operationnelles en continu.
      Chaque publication est faite pour agir vite avec vos equipes et vos
      partenaires.
    actions:
      - label: Voir social
        url: /social
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-24
          - pr-4
        alignItems: center
        flexDirection: row
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: Fond abstrait
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/abstract-background.svg
  - title:
      text: Flux en direct
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Priorites partagees avec vos interlocuteurs.
    items:
      - title: Annonce produit
        subtitle: Publication immediate
        text: >-
          Mises a jour de fonctionnalites, calendriers et disponibilites pour
          clients et partenaires.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Demandes partenaires
        subtitle: Collaboration
        text: >-
          Opportunites, co-branding, diffusion croisee et cadrage des actions
          communes.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Demandes clients
        subtitle: Priorisation
        text: >-
          Remontees terrain, besoins urgents et adaptation des contenus selon la
          demande reelle.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
    actions:
      - label: Envoyer une demande
        url: /formulaire
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-24
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
seo:
  metaTitle: News - crochett.ai
  metaDescription: >-
    Annonces et demandes partenaires/clients publiees en temps reel.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---

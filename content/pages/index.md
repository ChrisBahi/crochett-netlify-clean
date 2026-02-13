---
title: Accueil
slug: /
sections:
  - type: GenericSection
    title:
      text: Unblock your team boost your time to production
      color: text-dark
      type: TitleBlock
    subtitle: Subtitle goes here
    text: >-
      A Netlify Create website is a git repo that you own. Every code commit is
      instantly reflected in the visual editor and since every visual edit is a
      git commit, git workflows and collaboration just work.
    actions:
      - label: Get started
        altText: Ouvrir le formulaire de demande
        url: /formulaire
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
      - label: See Tutorials
        altText: Aller vers social
        url: /social
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Link
    media:
      url: /images/main-hero.svg
      altText: Apercu crochett.ai
      type: ImageBlock
    badge:
      label: THIS IS A BADGE
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: FeaturedItemsSection
    title:
      text: Services et rubriques
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Chaque bloc est optimise pour la conversion.
    items:
      - type: FeaturedItem
        title: Strategie de contenu
        subtitle: Positionnement
        text: >-
          Architecture editoriale, angles de messages, priorites des canaux et
          calendrier operationnel.
        actions: []
        colors: bg-neutralAlt-fg-dark
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
            textAlign: left
      - type: FeaturedItem
        title: Production multi-format
        subtitle: Execution
        text: >-
          Production rapide de contenus sociaux et commerciaux avec iterations
          pilotables.
        actions: []
        colors: bg-neutralAlt-fg-dark
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
            textAlign: left
      - type: FeaturedItem
        title: Diffusion et suivi
        subtitle: Mesure
        text: >-
          Publication, monitoring et ajustements en temps reel selon vos retours
          clients et partenaires.
        actions: []
        colors: bg-neutralAlt-fg-dark
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
            textAlign: left
    actions:
      - label: Get started
        altText: Ouvrir le formulaire de demande
        url: /formulaire
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
    badge:
      label: Services
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      text: A propos de crochett.ai
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Une equipe operationnelle orientee resultats.
    text: >-
      Nous aidons les marques a structurer un systeme de contenu durable,
      mesurable et rapide a deployer, sans dette operationnelle.
    actions:
      - label: Voir news
        url: /news
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Link
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
  - subtitle: Award winning enterprises trust us
    images:
      - url: /images/empathy-logo.svg
        altText: Empathy logo
        type: ImageBlock
      - url: /images/wellster-logo.svg
        altText: Wellster logo
        type: ImageBlock
      - url: /images/vise-logo.svg
        altText: Vise logo
        type: ImageBlock
      - url: /images/telus-logo.svg
        altText: Telus logo
        type: ImageBlock
      - url: /images/contenful-logo.svg
        altText: Contentful logo
        type: ImageBlock
      - url: /images/sanity-logo.svg
        altText: Sanity logo
        type: ImageBlock
      - url: /images/rangle-logo.svg
        altText: Rangle logo
        type: ImageBlock
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: ImageGallerySection
  - type: GenericSection
    title:
      text: Contact
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Questionnaire dedie sur une page separee.
    text: >-
      Votre formulaire est disponible sur /formulaire. Les demandes sont recues
      par email avec redirection automatique apres envoi.
    actions:
      - label: Ouvrir le formulaire
        url: /formulaire
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
      - label: Mentions legales
        url: /legal
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Link
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
seo:
  metaTitle: crochett.ai - Accueil
  metaDescription: >-
    crochett.ai structure votre strategie sociale avec production, diffusion et
    suivi en temps reel.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---

# Parcours Robotique + IA — Plan des 3 prochains mois

## Objectif général

En 3 mois, passer d'un profil **ML/Deep Learning solide mais débutant en robotique classique** à un profil capable de :

- comprendre et manipuler la cinématique d'un bras robotique ;
- utiliser les outils essentiels de robotique : repères, transformations, Jacobiennes, contrôle, URDF, ROS2 ;
- collecter proprement des démonstrations sur le SO-101 ;
- comprendre vraiment Behavioral Cloning, DAgger et ACT ;
- entraîner et comparer plusieurs policies sur une tâche réelle ;
- documenter les expériences comme un mini travail de recherche ;
- publier régulièrement les apprentissages et résultats sur X et GitHub.

Le fil rouge des 3 mois est le **SO-101 réel**, avec Isaac Lab utilisé lorsque la simulation apporte quelque chose.

---

# Mois 1 — Fondamentaux de robotique

## Objectif du mois

Être capable de regarder le SO-101 et de comprendre mathématiquement où se trouve son end-effector, comment les articulations influencent sa position et comment commander des mouvements simples.

## Semaine 1 — Repères et Forward Kinematics

À comprendre :

- degrés de liberté ;
- espace articulaire vs espace cartésien ;
- repères ;
- coordonnées homogènes ;
- rotations 3D ;
- composition de transformations ;
- chaîne cinématique ;
- forward kinematics.

À construire :

- représentation claire des 6 articulations du SO-101 ;
- définition d'un repère pour chaque articulation ;
- script Python qui prend les angles des moteurs et estime la pose de l'end-effector ;
- visualisation 3D simple de la chaîne cinématique.

Livrable public :

> "I started learning robotics from first principles. Today I reconstructed the forward kinematics of my $200 robot arm."

## Semaine 2 — Jacobiennes et Inverse Kinematics

À comprendre :

- dérivée de la pose par rapport aux angles articulaires ;
- Jacobienne ;
- singularités ;
- differential IK ;
- pseudo-inverse ;
- limites articulaires ;
- workspace.

À construire :

- calcul numérique ou analytique de la Jacobienne ;
- IK simple pour atteindre une position cible ;
- visualisation du workspace du SO-101 ;
- test de plusieurs positions atteignables / non atteignables.

Expérience : comparer solution IK souhaitée et position réellement atteinte.

## Semaine 3 — Contrôle et trajectoires

À comprendre :

- boucle ouverte / fermée ;
- position control ;
- velocity control ;
- erreur de suivi ;
- PID ;
- interpolation ;
- trajectoires articulaires et cartésiennes.

À construire :

- trajectoire point A → point B ;
- mesure de l'erreur ;
- trajectoire circulaire ou carrée de l'end-effector ;
- petit contrôleur expérimental en simulation si nécessaire.

À documenter :

- overshoot ;
- oscillations ;
- erreur statique ;
- influence de la fréquence de contrôle.

## Semaine 4 — URDF + ROS2 + outils roboticiens

Objectif : comprendre l'écosystème sans chercher à devenir expert ROS2.

À apprendre :

- URDF ;
- joints / links ;
- ROS2 nodes ;
- topics ;
- services ;
- actions ;
- TF2 ;
- RViz ;
- rosbag ;
- introduction MoveIt.

Mini-projet :

- afficher un modèle du bras ;
- publier les joint states ;
- visualiser la chaîne TF ;
- commander une pose cible de manière simple.

### Checkpoint fin du mois 1

Tu dois pouvoir expliquer sans jargon :

1. comment passer de six angles moteur à la position de la pince ;
2. ce qu'est une Jacobienne et pourquoi elle est utile ;
3. pourquoi certaines poses sont impossibles ;
4. différence entre espace articulaire et cartésien ;
5. rôle d'un contrôleur ;
6. rôle d'un URDF et de TF dans ROS2.

---

# Mois 2 — Imitation Learning sur le SO-101

## Objectif du mois

Comprendre l'Imitation Learning par l'expérience et entraîner de vraies policies sur le robot.

Tâche recommandée :

**prendre un cube / objet simple et le déposer dans un bol ou une zone cible.**

On garde volontairement la tâche simple pour analyser les méthodes plutôt que la difficulté de la tâche.

## Semaine 5 — Dataset et Behavioral Cloning

À comprendre :

- observation ;
- action ;
- démonstration ;
- policy ;
- supervised imitation ;
- distribution des démonstrations.

À faire :

- définir précisément observation/action ;
- collecter 20–50 démonstrations propres ;
- entraîner une baseline BC simple ;
- mesurer le taux de succès.

Expériences indispensables :

- position initiale identique ;
- cube déplacé de quelques centimètres ;
- orientation légèrement différente ;
- perturbation volontaire du bras.

But : constater directement le **covariate shift**.

## Semaine 6 — Comprendre DAgger

À comprendre :

- pourquoi BC échoue hors distribution ;
- distribution induite par la policy ;
- correction des états d'échec ;
- agrégation progressive du dataset.

À faire :

- laisser la policy agir ;
- identifier ses états d'échec ;
- corriger / démontrer les bonnes actions dans ces états ;
- ajouter ces données au dataset ;
- réentraîner ;
- comparer avec BC initial.

Livrable : courbe ou tableau avant/après DAgger.

## Semaine 7 — ACT

À comprendre :

- pourquoi prédire un chunk d'actions ;
- Transformers appliqués aux séquences d'actions ;
- action chunking ;
- temporal ensembling ;
- rôle éventuel du latent / VAE selon l'implémentation.

À faire :

- entraîner ACT sur le même dataset ;
- comparer avec BC ;
- mesurer : succès, stabilité, latence, sensibilité aux perturbations.

## Semaine 8 — Expérience propre BC vs DAgger vs ACT

Construire une comparaison reproductible.

Pour chaque méthode :

- même tâche ;
- mêmes positions de départ ;
- même nombre d'essais ;
- taux de succès ;
- types d'échecs ;
- temps d'entraînement ;
- vitesse d'inférence ;
- robustesse aux petits changements.

Livrable GitHub :

- README ;
- protocole expérimental ;
- vidéos ;
- résultats ;
- discussion honnête des échecs.

### Checkpoint fin du mois 2

Tu dois pouvoir expliquer clairement :

- pourquoi BC fonctionne ;
- pourquoi BC échoue ;
- ce que DAgger change dans la distribution d'entraînement ;
- pourquoi ACT prédit plusieurs actions ;
- quand utiliser chaque approche.

---

# Mois 3 — Perception + policy moderne

## Objectif du mois

Passer d'une policy relativement fermée à un système plus proche du Robot Learning moderne : vision, multimodalité et Diffusion Policy.

## Semaine 9 — Caméras et calibration

À apprendre :

- modèle pinhole ;
- intrinsics ;
- extrinsics ;
- distortion ;
- transformations caméra ↔ robot ;
- notions de hand-eye calibration.

À faire :

- calibrer la webcam principale ;
- comprendre précisément ce que signifie un pixel dans l'image ;
- si possible, relier coordonnées visuelles et espace de travail du robot.

## Semaine 10 — Perception pour la manipulation

À explorer :

- détection / segmentation d'objet ;
- features visuelles ;
- pose / position de l'objet ;
- éventuellement AprilTags ou ArUco pour disposer d'une vérité terrain simple.

Mini-projet :

> détecter une cible visuelle et déplacer l'end-effector relativement à cette cible.

## Semaine 11 — Diffusion Policy

À comprendre :

- diffusion appliquée aux actions ;
- bruitage / débruitage ;
- conditionnement par observation ;
- génération d'une séquence d'actions ;
- caractère multimodal de la distribution d'actions.

À faire :

- entraîner une Diffusion Policy sur la même tâche ;
- réutiliser autant que possible le dataset précédent ;
- comparer avec ACT.

## Semaine 12 — Benchmark + bilan des 3 mois

Comparer au minimum :

- BC ;
- ACT ;
- Diffusion Policy ;
- éventuellement BC + DAgger.

Créer un benchmark personnel avec :

- 20+ essais par méthode si possible ;
- taux de succès ;
- robustesse ;
- comportement face aux perturbations ;
- temps d'entraînement ;
- coût matériel ;
- vidéos représentatives ;
- erreurs et hypothèses.

Livrable final du trimestre :

> **"3 months learning Robot Learning from scratch with a SO-101"**

Ce livrable doit être à la fois :

- un repo GitHub sérieux ;
- une série de posts X ;
- une preuve de progression ;
- un élément de portfolio pour candidatures Robotics AI / Research Engineer.

---

# Ce que l'on ne cherche PAS à faire pendant ces 3 mois

- apprendre toute la théorie robotique existante ;
- faire du SLAM avancé ;
- maîtriser toute la dynamique des manipulateurs ;
- entraîner un énorme VLA from scratch ;
- reproduire immédiatement π0 / GR00T ;
- acheter beaucoup de matériel.

Le but est de construire des **fondations solides et expérimentales**.

Les VLA, world models et projets Physical AI plus ambitieux viendront ensuite, avec beaucoup plus de sens.

---

# Règle principale

Pour chaque nouveau concept :

**Comprendre → coder → tester → mesurer → expliquer → publier.**

Ne jamais considérer un concept comme acquis uniquement parce qu'un notebook tourne.

# Semaine 1 — Comprendre la cinématique de ton SO-101

## Mission de la semaine

À la fin de cette semaine, tu dois être capable d'expliquer et de coder :

> **Comment les angles des articulations du SO-101 déterminent la position de sa pince dans l'espace.**

Le but n'est pas de maîtriser toute la cinématique robotique en 7 jours. Le but est d'obtenir une première compréhension profonde et concrète sur TON robot.

---

# Jour 1 — Comprendre physiquement le bras

## Théorie

Comprendre :

- link ;
- joint ;
- degré de liberté ;
- revolute joint ;
- espace articulaire ;
- espace cartésien ;
- end-effector.

## Sur le SO-101

Identifier précisément :

1. shoulder_pan ;
2. shoulder_lift ;
3. elbow_flex ;
4. wrist_flex ;
5. wrist_roll ;
6. gripper.

Pour chaque articulation :

- quel axe tourne ?
- quel mouvement cela produit ?
- quelles articulations modifient la position de la pince ?
- lesquelles modifient surtout son orientation ?

## Livrable

Faire un schéma du SO-101 avec les articulations numérotées et les axes approximatifs.

## Post X possible

Partager le début du challenge et une photo/vidéo du bras.

---

# Jour 2 — Coordonnées et repères

## Théorie

Comprendre :

- vecteur position ;
- axes X/Y/Z ;
- repère local vs global ;
- rotation ;
- translation ;
- matrice de rotation.

Réviser uniquement les éléments d'algèbre linéaire nécessaires.

## Exercice

Créer en Python quelques matrices de rotation autour de X, Y et Z.

Tester leur effet sur des vecteurs simples.

## Livrable

Notebook :

`01_rotations.ipynb`

avec visualisation 3D minimale.

---

# Jour 3 — Transformations homogènes

## Théorie

Comprendre pourquoi on utilise une matrice 4x4 :

- rotation ;
- translation ;
- composition des deux.

Comprendre surtout :

> transformer un point exprimé dans le repère A vers le repère B.

## Exercice

Créer deux transformations :

- base → articulation 1 ;
- articulation 1 → articulation 2.

Puis composer :

- base → articulation 2.

## Livrable

Fonctions Python simples :

- `rot_x(theta)`
- `rot_y(theta)`
- `rot_z(theta)`
- `transform(R, t)`

Ne pas chercher une grosse librairie qui masque les maths.

---

# Jour 4 — Construire la chaîne cinématique

## Théorie

Comprendre la notion de **kinematic chain**.

Pour le SO-101 :

`base → shoulder → upper arm → elbow → forearm → wrist → gripper`

## Travail pratique

Mesurer ou récupérer les dimensions principales du bras.

Définir une transformation entre chaque paire de repères.

## Premier objectif important

Créer :

```python
forward_kinematics(q)
```

où `q` contient les angles articulaires.

La fonction doit retourner au minimum la position `(x, y, z)` de l'end-effector.

---

# Jour 5 — Visualisation 3D

Créer une représentation simple du bras avec Python.

Pas besoin de moteur 3D complexe.

Matplotlib 3D suffit.

Afficher :

- base ;
- articulations ;
- links ;
- end-effector.

Modifier les angles et observer le comportement.

Questions à se poser :

- une rotation de shoulder_pan produit-elle le mouvement attendu ?
- que se passe-t-il lorsque elbow_flex change ?
- les longueurs semblent-elles correctes ?

---

# Jour 6 — Relier les maths au vrai robot

Lire les positions réelles des moteurs du SO-101.

Faire plusieurs poses manuellement.

Pour chaque pose :

1. enregistrer les angles articulaires ;
2. calculer la pose prédite par la FK ;
3. observer la vraie position du robot.

Pas besoin d'une mesure millimétrique parfaite cette semaine.

Le but est de vérifier que le modèle est cohérent avec la réalité.

## Bonus

Filmer le robot et afficher simultanément sa représentation virtuelle.

Très bon contenu potentiel pour X.

---

# Jour 7 — Consolidation + publication

Pas de nouveau gros concept.

Faire le bilan.

Tu dois savoir répondre sans chercher :

- Qu'est-ce qu'un DOF ?
- Qu'est-ce qu'un repère ?
- Pourquoi une matrice de rotation est 3x3 ?
- Pourquoi une transformation homogène est 4x4 ?
- Qu'est-ce que la forward kinematics ?
- Pourquoi multiplie-t-on plusieurs transformations ?
- Quelle différence entre joint space et Cartesian space ?

## Livrable GitHub de la semaine

Structure suggérée :

```text
robotics-learning/
├── week-01-kinematics/
│   ├── README.md
│   ├── 01_rotations.ipynb
│   ├── 02_transforms.ipynb
│   ├── forward_kinematics.py
│   ├── visualize_arm.py
│   └── media/
```

README :

- ce que tu voulais apprendre ;
- explication courte ;
- comment tu l'as implémenté ;
- résultat ;
- ce qui ne marche pas encore ;
- prochaine étape.

---

# Critère de réussite de la semaine

La semaine est réussie si tu peux partir d'un vecteur :

```text
q = [q1, q2, q3, q4, q5, q6]
```

et obtenir une estimation cohérente de :

```text
x, y, z
```

de la pince, **tout en étant capable d'expliquer chaque étape du calcul**.

La précision parfaite n'est PAS le critère principal cette semaine.

---

# Si tu avances plus vite

Bonus dans cet ordre :

1. orientation de l'end-effector ;
2. quaternions ;
3. comparaison avec une librairie de robotique ;
4. premières différences finies pour approximer une Jacobienne ;
5. début de la visualisation du workspace.

Ne commence pas encore sérieusement ACT, VLA ou world models cette semaine.

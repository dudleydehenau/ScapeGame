# Résumé coaching 9
```diff
+ ANALYSE DE SECURITE
+ Le groupe a effectué et documenté sur le wiki une analyse de sécurité correcte, en identifiant les biens à protéger et en estimant les menaces et les risques associés.
+ Le groupe a identifié des contre-mesures adéquates pour l'ensemble des menaces identifiées.  
+ Le groupe connait et documente les limites de son travail de sécurisation (risques résiduels, …)
+ Le groupe a réfléchi au suivi des aspects sécurité du projet tout au long du cycle de vie du projet
+ Un diagramme de flux de données est attendu
	
SECURISATION	
+ Le groupe a mis en place les éléments de sécurité demandés dans le cadre du cours.Le groupe justifie et implémente correctement les mesures de sécurité au niveau du serveur : Utilisation https, version à jour / patchée, réflexion sur le hardening du serveur (par ex : pas d’autre port ouvert), gestion des connexions et sessions, disponibilité, …
+ Le groupe justifie et implémente correctement les mesures de sécurité les mesures de sécurité au niveau du serveur (Utilisation https, version à jour / patchée, réflexion sur le hardening du serveur (par ex : pas d’autre port ouvert), gestion des connexions et sessions, disponibilité, …), au niveau logiciel ( Librairies /  Framework utilisés à jour, XSS, SQLi,gestion/stockage des mots de passe, ... ) et de la DB ( Inaccessible de l’extérieur, permissions / rôles définis adéquatement, backup, …)
	
VALIDATION DE LA SECURITE
+ Les étudiants ont utilisé des outils extérieurs pour validé la sécurisation de leur site, et présentent les résultats sur le wiki
+ Les étudiants ont interprété et pris en compte les retours donnés par les outils extérieurs et corrigé les failles de sécurité éventuellement identifiées
	
ASPECTS LEGAUX	
+ Le wiki présente les contraintes légales auquel est soumis le site web (notamment RGPD)
+ Le wiki présente ce qui a été mis en place, ou aurait dû être mis en place, pour respecter le prescrit légal (traitement des données, backup, …)

```
# 1. Analyse de la sécurité

## 1.1 Biens à protéger

[Quels sont les éléments importants qu'il faut absolument sécuriser? Pourquoi? Réfléchissez chaque fois en termes de disponibilité/confidentialité/intégrité.  Vous devriez au minimum aborder : 
- Le code, 
- la DB
- et le serveur. ]

## 1.2 Risques

[Pour chaque élément, indiquez : 
  - quelles menaces risquent de l'impacter, 
  - avec quelle probabilité 
  - et quel impact de l'attaque qui résulterait de cette menace.  

Classez ces menaces en fonction du risque.]

## 1.3 Contre-mesures

[Pour chaque menace identifiée plus haut, quelle(s) contre-mesure(s) pourrait-on mettre en place?  Indiquez si vous l'avez implémentée ou non, et si oui : comment?  Décrivez brièvement les configurations mises en place.]

## 1.4 Suivi de la sécurisation

[Au quotidien, comment s'assurer que l'application n'est pas compromise?  Où trouver des informations (logs, monitoring, ...) Qui s'occuperait potentiellement de la surveillance et de la maintenance? Quel est votre interprétation des résultats et quelles mesures ont alors été mises en place ?]

## 1.5 Diagramme de flux de données


# 2. Sécurisation

[Tout ce qui a été mis en place pour sécuriser l'application, le serveur, la DB, ... ]

# 3. Validation de la sécurité

[Avez-vous utilisé des outils de vérification de la sécurité de votre application?  Ou avez-vous demandé ou effectué un "pentest" de votre application, par ex. avec un autre groupe? ] 

# 4. Cadre légal

## 4.1 Contraintes légales

[Présentation des contraintes légales s'appliquant à votre application]

## 4.2 Mise en oeuvre de ces contraintes

[Explication de ce qui a été mis en place pour respecter le cadre légal dans le cadre de ce projet]

# 5. Bilan et Limites

[D'après vous, est-ce que la sécurisation mise en place est suffisante? Pourquoi? Quelles sont les limites ? Et les améliorations à envisager ?]














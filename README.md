# 1. Tu dois avoir accès à `node`

Pour savoir si tu as accès, ouvre ton powershell (ou terminal si sur Mac) et écris `node -v`

> Si node est introuvable, tu vas devoir installer ceci: https://nodejs.org/en

> Si node est trouvé, tu devrais voir dequoi du genre `XX.XX.X` e.g. `18.18.0`

# 2. Assures toi d'être dans le root directory du folder 'rreach-doumi'
> `cd rreach-doumi`

# 3. Liste des étapes
## a. Copier dans le terminal *(toujours sous rreach-doumi)* 
`node fetch.js`
## b. Attendre que le script ait fini de rouler, les logs devraient t'indiquer le progrès.
note: Tu peux modifier le nombre total que tu veux aller chercher en changeant la valeur dans `fetch.js:62`
## c. Une fois terminé, `ids.json` devrait contenir une liste d'identifiants pour chaque personne retourné dans la liste.
note: Tu peux valider la longueur de la liste en runnant `node validateIds.js`
## d. Une fois la liste d'ids validée
Tu veux run `node getPerson.js`
## e. Encore une fois, attendre que toutes les personnes soient retournées.
## f. Les leads devraient tous être dans `leads.json`, incluant:
- Nom
- Compagnie
- Emails
- Téléphones
# doumi-rreach

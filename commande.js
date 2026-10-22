const client = "Awa"
const produit = "ordinateur"
const prixUnitaire = 250000
const quantite = 2
const fraisDeLivraison = 5000
const montantDesProduits = prixUnitaire * quantite
const tva = montantDesProduits * 0.18
const montantTTC = montantDesProduits + tva
const totalAPayer = montantTTC + fraisDeLivraison
console.log("===== REÇU DE COMMANDE =====")
console.log("Client:", client)
console.log("Produit:", produit)
console.log("Prix unitaire:", prixUnitaire, "FCFA")
console.log("Quantité:", quantite)
console.log("Montant des produits:", montantDesProduits, "FCFA")
console.log("TVA (18%):", tva, "FCFA")
console.log("Montant TTC:", montantTTC, "FCFA")
console.log("Livraison:", fraisDeLivraison, "FCFA")
console.log("Total à payer:", totalAPayer, "FCFA")

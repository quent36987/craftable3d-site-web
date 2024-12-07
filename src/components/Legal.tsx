import React from 'react';
import { motion } from 'framer-motion';
import {Scale, Shield, ScrollText, Receipt, Phone, Clipboard} from 'lucide-react';

export function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="space-y-16"
        >
          {/* Mentions Légales */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-blue-600"/>
              <h2 className="text-3xl font-bold text-gray-900">Mentions Légales</h2>
            </div>
            <div className="prose prose-lg">
              <p><strong>La Société :</strong> CYBERMANIAC exerce son activité dans le cadre de : «EBA SARL»,
                représentée par Monsieur GOUJJON Samuel.</p>
              <p><strong>Adresse :</strong> 189 route du barrage, 42300 VILLERST</p>
              <p><strong>SIRET :</strong> 900 126 129 RCS ROANNE</p>
              <p><strong>Responsable de la publication :</strong> Monsieur GOUJJON Samuel</p>
              <p><strong>Hébergeur :</strong> 1&1 Internet SARL - 7, place de la Gare - BP 70109 - 57201 Sarreguemines
                Cedex</p>
            </div>
          </section>

          {/* Politique de Confidentialité */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-blue-600"/>
              <h2 className="text-3xl font-bold text-gray-900">Politique de Confidentialité</h2>
            </div>
            <div className="prose prose-lg">
              <p>Nous accordons une importance particulière à la protection de vos données personnelles.</p>
              <h3>Protection des Données</h3>
              <p>
                Conformément au règlement européen pour la protection des données personnelles (RGPD) et en France
                en application de la loi 78-17 du 06 janvier 1978 (dite « Loi Informatique et Libertés »), il est
                rappelé
                que toutes les données personnelles demandées sont nécessaires à nos traitements internes. Ces données
                personnelles ne sont pas cédées ou transmises à des tiers.
              </p>
              <h3>Droits d'Accès</h3>
              <p>
                Vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données
                personnelles vous concernant. Pour exercer ces droits, contactez-nous :
              </p>
              <ul>
                <li>Adresse : 54 cours Fauriel, 42100 Saint-Étienne</li>
                <li>Email : <a href="mailto:cybermaniac42@gmail.com">cybermaniac42@gmail.com</a></li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-8 w-8 text-blue-600"/>
              <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
            </div>
            <div className="prose prose-lg">
              <p><strong>Téléphone Fixe :</strong> 04.87.66.67.33</p>
              <p><strong>Téléphone Mobile :</strong> 06.84.25.25.27</p>
              <p><strong>Email :</strong> <a href="mailto:cybermaniac42@gmail.com">cybermaniac42@gmail.com</a></p>
            </div>
          </section>

          {/* Immatriculation */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Clipboard className="h-8 w-8 text-blue-600"/>
              <h2 className="text-3xl font-bold text-gray-900">Immatriculation</h2>
            </div>
            <div className="prose prose-lg">
              <p>
                <strong>Numéro d'immatriculation :</strong> 900 126 129 RCS ROANNE
              </p>
              <p>
                <strong>Registre du commerce :</strong> Roanne B 900 126 129
              </p>
            </div>
          </section>

          {/* TVA */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Receipt className="h-8 w-8 text-blue-600"/>
              <h2 className="text-3xl font-bold text-gray-900">TVA</h2>
            </div>
            <div className="prose prose-lg">
              <p><strong>Numéro d'identification TVA :</strong> FR55900126129</p>
            </div>
          </section>

          {/* CGV */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <ScrollText className="h-8 w-8 text-blue-600"/>
              <h2 className="text-3xl font-bold text-gray-900">Conditions Générales de Vente</h2>
            </div>
            <div className="prose prose-lg">
              <p>Conditions générales de ventes EBA SARL - CyberManiac ARTICLE 1 - Champ d'application Les présentes
                Conditions Générales de Vente (ci-après CGV) ont pour objet de définir les conditions dans lesquelles
                l’entreprise «EBA SARL », représentée par Monsieur GOUJON Samuel, 189 route du barrage, 42300 VILLERST,
                Identifiant SIRET : 900 126 129 RCS ROANNE, www.cybermaniac.fr , (ci-après indifféremment « Le
                Prestataire » ou « Le Vendeur » ou « EBA ») fournit aux clients (ci-après « Les Clients ou le Client »)
                qui lui en font la demande par quelque moyen que ce soit, les services d’assemblage, maintenance,
                réparation, installation de matériel informatique et tout autre Service proposé sur le site internet du
                Prestataire (ci-après « les Services ») ainsi que le matériel informatique (ci-après « les Produits »).
                Toute commande de Services implique, de la part du Client, l'acceptation des présentes Conditions
                Générales de Vente par tout moyen. Les présentes Conditions Générales de Vente sont expressément agréées
                et acceptées par le Client, qui déclare et reconnaît en avoir une parfaite connaissance, et renonce, de
                ce fait, à se prévaloir de tout document contradictoire et, notamment, ses propres conditions générales
                d'achat pour les Clients professionnels, qui seront inopposables au Prestataire, même s'il en a eu
                connaissance. ARTICLE 2 - Commandes 2-1 Les ventes de Services et de Produits ne sont parfaites qu'après
                acceptation de la commande du Client par le Prestataire qui est matérialisée par la signature du bon de
                commande ou par l’acceptation expresse du devis et après encaissement par celui-ci de l’intégralité du
                prix ou de l’acompte dû. Cet acompte ne pourra en aucun cas être qualifié d’arrhes. Il appartient au
                Client de vérifier l'exactitude de la commande et de signaler immédiatement toute erreur. 2-2 Les
                éventuelles modifications de la commande demandées par le Client ne seront prises en compte, dans la
                limite des possibilités du Prestataire, que si elles sont notifiées par écrit, cinq (5) jours ouvrés au
                moins avant la date prévue pour la fourniture de Services commandés, et matérialisées par la signature
                par le Client d'un bon de commande modifié avec ajustement éventuel du prix. 2-3 La commande est
                définitive une fois qu’elle est signée et renvoyée par le Client au Prestataire. Aucun droit de
                rétractation ne peut être invoqué. En cas d'annulation ou modification non approuvée par le Prestataire,
                de la commande par le Client moins de cinq (5) jours au moins avant la date prévue pour la fourniture
                des Services commandés, pour quelque raison que ce soit, l'acompte versé à la commande, tel que défini à
                l'article “ Conditions de règlement” des présentes Conditions Générales de Vente, sera de plein droit
                acquis au Prestataire et ne pourra donner lieu à un quelconque remboursement. ARTICLE 3 - Tarifs Les
                prestations de services sont fournies aux tarifs du Prestataire en vigueur au jour où la commande
                devient vente définitive, selon le devis préalablement établi par le Prestataire et accepté par le
                Client, comme indiqué à l'article “ Commandes ” cidessus. Les prix sont exprimés en euros, s'entendent
                nets, hors frais et hors taxes, sauf la prestation de services de formation qui n’est pas soumise à la
                TVA. Le prix est majoré des frais d’installation, d’expédition des produits, de pièces, de déplacement
                ou tout autre frais. : Une facture est établie et remise au Client lors de paiement du prix pour chaque
                fourniture de Services ou vente de Produit. Les conditions de détermination du coût des services dont le
                prix ne peut être connu a priori ni indiqué avec exactitude dans le devis/bon de commande du fait de la
                nature du bien ou du service, ainsi que la méthode de calcul du prix permettant de vérifier ce dernier,
                seront communiquées au Client à sa demande. ARTICLE 4 - Services Les Services seront fournis par EBA
                dans le délai stipulé dans le devis et à défaut, dans un délai qui ne saurait être supérieur à un mois à
                compter de la réception par le Prestataire du bon de commande correspondant dûment rempli et signé,
                accompagné de l'acompte exigible. En cas de non-respect du délai, le client a droit de résilier le
                contrat avec remboursement des acomptes. En cas d’urgence de la demande d’intervention du Client, le
                Prestataire pourra apporter une majoration de prix au minimum de 50% par rapport au prix convenu ou
                habituellement pratiqué hors urgence. Le Client devra stipuler sur le bon de commande le caractère
                urgent de sa commande. La fourniture des Services pourra se produire en tout lieu désigné par le
                Prestataire, sous réserve de l’accord du Client. Les frais de déplacement du Prestataire seront indiqués
                dans le devis et devront dans tous les cas être pris en charge par le client, sauf à ce que le prix soit
                stipulé frais de déplacement inclus. En cas de demande particulière du Client concernant les conditions
                de fourniture des Services, dûment acceptées par écrit par le Prestataire, les coûts liés feront l'objet
                d'une facturation spécifique complémentaire, sur devis préalablement accepté par le Client A défaut de
                réserves ou réclamations expressément émises par le Client lors de la réalisation des Services dans un
                délai de trois (3) jours calendaires après la date d’intervention, exprimés par écrit avec accusé de
                réception et notamment par mail à l’adresse cybermaniac42@gmail.com ceux-ci seront réputés conformes à
                la commande, en quantité et qualité, et ne pourront faire l’objet d’une réduction ou remboursement de
                prix. ARTICLE 5 - Produits Le Prestataire intervient sur du matériel informatique (ordinateur portable,
                PC, tablettes, imprimantes connectées, accessoires…) utilisant le système d’exploitation un système
                d’exploitation MICROSOFT WINDOWS. Sauf accord express de EBA, le Prestataire n’intervient pas sur les
                produits de marque Mac, Apple, ni sur les systèmes d’exploitation y afférant. Tout ordinateur assemblé
                dans les ateliers EBA est testé avec un système d’exploitation MICROSOFT WINDOWS 7 et/ou 8.1 et/ou 10.
                Les problèmes de compatibilité du système d’exploitation du Client et celui de EBA ne pourront en aucun
                cas être imputés au Prestataire. Le client a cependant le droit de ne pas acheter une licence d’un
                système d’exploitation MICROSOFT lors de l’achat de son ordinateur. Dans ce cas, EBA n’installera ni ne
                fournira en aucun cas une version de la licence du système d’exploitation MICROSOFT lui appartenant.
                Toute commande de produits par EBA SARL sur commande et pour le compte du Client, donneront lieu à un
                acompte égal au montant total des produits commandés pour son compte. Ces Produits ne pourront donner
                lieu à remboursement, remplacement, retour, que dans les conditions stipulées par le fournisseur des
                produits auprès duquel EBA SARL aura passé la commande, sans que ce dernier ne puisse voir sa
                responsabilité engagée, sauf en cas de faute grave dûment prouvée. Les risques sur le Produit sont
                transférés au Client dès que le Produit est installé, livré au Client par le Prestataire, la plus
                ancienne des dates faisant foi. La propriété du Produit n’est transférée au Client qu’à compter du
                parfait règlement du Prestataire. ARTICLE 6 - Garantie 1. Aucune garantie commerciale contractuelle
                n’est proposée par EBA SARL, en sus garanties légales visées ci-dessous. Lorsque EBA SARL est
                qualifiable en tant que fabriquant, fournisseur ou producteur du produit vendu, les Produits fournis par
                celui-ci bénéficient de plein droit et sans paiement complémentaire, conformément aux dispositions
                légales, - de la garantie légale de conformité, pour les Produits apparemment défectueux, abîmés ou
                endommagés ou ne correspondant pas à la commande ou à l'achat immédiat dans un délai de deux ans à
                compter de sa livraison, - de la garantie légale contre les vices cachés provenant d'un défaut de
                matière, de conception ou de fabrication affectant les produits livrés et les rendant impropres à
                l'utilisation pendant deux ans à compter de la découverte du défaut, Afin de faire valoir ses droits, le
                Client est tenu d’informer EBA SARL par lettre recommandée avec accusé de réception du défaut de
                conformité et/ou dysfonctionnement et ce, dans de délai maximal d’un (1) mois suivant la facture de
                vente et/ou la délivrance du matériel. À défaut de respecter ce délai de dénonciation, le Client sera
                déchu de la possibilité d’invoquer la garantie. Le matériel doit être rendu dans son emballage
                d’origine, non endommagé, complet avec tous ses accessoires (disquettes et ou CDrom, DVD rom de pilotes,
                câblage, documentation, etc.). Si la demande de garantie a lieu plus de six (6) [EK6] mois après la
                livraison des produits et/ou services (la plus ancienne des deux dates faisant foi en cas de livraison
                packagée de produits et services), il appartient au Client de démontrer la non-conformité et/ou
                dysfonctionnement du produit ou service au moment de la livraison. La facture d’achat des produits et/ou
                services devra impérativement être jointe à la demande de garantie. Le Vendeur remboursera, remplacera
                ou fera réparer les Produits ou pièces sous garantie jugés non conformes ou défectueux. En cas de
                livraison, les frais d'envoi seront remboursés sur la base du tarif facturé et les frais de retour
                seront remboursés sur présentation des justificatifs. La responsabilité du Vendeur ne saurait être
                engagée dans les cas suivants : - en cas de mauvaise utilisation, d'utilisation à des fins
                professionnelles, négligence ou défaut d'entretien de la part du Client, comme en cas d'usure normale du
                Produit, d'accident ou de force majeure. La garantie du Vendeur est, en tout état de cause, limitée au
                remplacement ou au remboursement des Produits non conformes ou affectés d'un vice.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
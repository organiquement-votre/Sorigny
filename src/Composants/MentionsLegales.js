import React from 'react';

const MentionsLegales = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">1. Informations légales</h2>
          <div className="space-y-2">
            <p>
              <strong>Raison sociale :</strong> Organiquement Votre
            </p>
            <p>
              <strong>Forme juridique :</strong> [Forme juridique de votre entreprise]
            </p>
            <p>
              <strong>Capital social :</strong> [Montant du capital]
            </p>
            <p>
              <strong>Siège social :</strong> Lieu Dit "Le Goret", Sorigny
            </p>
            <p>
              <strong>SIRET :</strong> [Numéro SIRET]
            </p>
            <p>
              <strong>Numéro de TVA intracommunautaire :</strong> [Numéro TVA]
            </p>
            <p>
              <strong>Téléphone :</strong> 09 70 16 32 55
            </p>
            <p>
              <strong>Email :</strong> [Votre email]
            </p>
            <p>
              <strong>Directeur de la publication :</strong> [Nom du directeur]
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">2. Hébergement</h2>
          <p>
            Ce site est hébergé par GitHub Pages<br />
            GitHub, Inc.<br />
            88 Colin P Kelly Jr St<br />
            San Francisco, CA 94107<br />
            United States
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
            les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p className="mt-2">
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
            formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">4. Protection des données personnelles</h2>
          <p>
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
            Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
            de suppression et d'opposition aux données personnelles vous concernant.
          </p>
          <p className="mt-2">
            Ces droits peuvent être exercés en nous contactant à l'adresse suivante : [Votre adresse email]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">5. Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques nécessaires au 
            fonctionnement du site peuvent être déposés sur votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">6. Produits CBD</h2>
          <p>
            Conformément à la législation française en vigueur, tous nos produits CBD contiennent moins 
            de 0,2% de THC. La vente est strictement réservée aux personnes majeures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">7. Limitation de responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site est 
            périodiquement remis à jour. Toutefois, il ne pourra être tenu responsable en cas 
            d'imprécisions, inexactitudes ou omissions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">8. Litiges</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les 
            tribunaux français seront seuls compétents.
          </p>
        </section>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm">
            <strong>Dernière mise à jour :</strong> 01/03/2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
import React from 'react';

const CGV = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
      
      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 1 - Objet</h2>
          <p>
            Les présentes conditions générales de vente régissent les relations contractuelles entre 
            Organiquement Votre et le client. Toute commande implique l'adhésion totale aux présentes conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 2 - Prix</h2>
          <p>
            Les prix de nos produits sont indiqués en euros toutes taxes comprises (TVA et autres taxes 
            applicables au jour de la commande). Les prix peuvent être modifiés à tout moment sans préavis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 3 - Produits</h2>
          <p>
            Les produits proposés sont conformes à la législation française en vigueur. Les photographies, 
            textes et illustrations présentés n'ont qu'une valeur indicative et n'entrent pas dans le 
            champ contractuel.
          </p>
          <p className="mt-2">
            Tous nos produits CBD contiennent moins de 0,2% de THC, conformément à la législation en vigueur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 4 - Commandes</h2>
          <p>
            Les commandes sont effectuées directement en magasin. Nous nous réservons le droit de refuser 
            toute commande d'un client avec lequel existerait un litige.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 5 - Paiement</h2>
          <p>
            Le paiement s'effectue en magasin au moment de l'achat. Les modes de paiement acceptés sont :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Carte bancaire</li>
            <li>Espèces</li>
            <li>Chèques (sous réserve d'acceptation)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 6 - Retours et Échanges</h2>
          <p>
            Pour des raisons d'hygiène et de sécurité, les produits CBD ne peuvent être ni repris ni échangés 
            une fois achetés, sauf en cas de défaut de conformité avéré.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 7 - Responsabilité</h2>
          <p>
            Organiquement Votre ne pourra être tenue pour responsable des dommages de toute nature qui 
            pourraient résulter d'une mauvaise utilisation des produits commercialisés.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 8 - Protection des Mineurs</h2>
          <p>
            Conformément à la législation en vigueur, la vente de produits CBD est strictement interdite 
            aux mineurs. Une pièce d'identité pourra être demandée lors de l'achat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 9 - Données Personnelles</h2>
          <p>
            Les informations collectées lors de l'achat sont nécessaires à la gestion de la transaction 
            et sont destinées à un usage interne. Conformément à la loi, vous disposez d'un droit d'accès, 
            de rectification et d'opposition aux données vous concernant.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Article 10 - Droit Applicable</h2>
          <p>
            Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, 
            une solution amiable sera recherchée avant toute action judiciaire.
          </p>
        </section>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm">
            <strong>Dernière mise à jour :</strong> 01/03/2024<br />
            <strong>Organiquement Votre</strong><br />
            Lieu Dit "Le Goret"<br />
            Sorigny<br />
            Tél : 09 70 16 32 55
          </p>
        </div>
      </div>
    </div>
  );
};

export default CGV;
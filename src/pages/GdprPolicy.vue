<template>
    <section class="gdpr-policy">
      <h2>Politica de Confidențialitate GDPR</h2>
  
      <p>
        La <strong>THERMO SOLUTION EXPERT SRL</strong>, respectăm și protejăm confidențialitatea utilizatorilor noștri. Această politică de confidențialitate descrie modul în care colectăm, utilizăm și protejăm informațiile dumneavoastră personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
      </p>
  
      <h3>1. Ce date colectăm?</h3>
      <p>
        În cadrul formularului de contact disponibil pe site-ul nostru, colectăm următoarele date personale:
      </p>
      <ul>
        <li>Nume</li>
        <li>Adresă de e-mail</li>
        <li>Subiectul mesajului</li>
        <li>Descrierea mesajului</li>
      </ul>
      <p>
        Aceste date sunt colectate doar pentru a răspunde solicitării dumneavoastră și nu vor fi utilizate în alte scopuri fără acordul dumneavoastră explicit.
      </p>
  
      <h3>2. Cum utilizăm datele colectate?</h3>
      <p>
        Datele colectate prin formularul de contact sunt utilizate exclusiv pentru a răspunde mesajului dumneavoastră și pentru a vă oferi informațiile solicitate. Datele nu vor fi partajate cu terți, cu excepția cazului în care acest lucru este necesar prin lege sau dacă avem acordul dumneavoastră prealabil.
      </p>
  
      <h3>3. Cât timp păstrăm datele?</h3>
      <p>
        Datele colectate vor fi păstrate pentru o perioadă de timp necesară pentru a rezolva solicitarea dumneavoastră și pentru a asigura un suport adecvat în cazul întrebărilor ulterioare. După această perioadă, datele vor fi șterse în mod sigur, cu excepția cazului în care există o obligație legală de a le păstra pentru o perioadă mai lungă.
      </p>
  
      <h3>4. Drepturile dumneavoastră</h3>
      <p>
        Conform GDPR, aveți dreptul de a solicita:
      </p>
      <ul>
        <li>Accesul la datele dumneavoastră personale pe care le deținem.</li>
        <li>Rectificarea sau actualizarea datelor personale incorecte sau incomplete.</li>
        <li>Ștergerea datelor dumneavoastră personale (dreptul de a fi uitat).</li>
        <li>Restricționarea procesării datelor dumneavoastră personale.</li>
        <li>Portabilitatea datelor dumneavoastră către un alt operator, la cerere.</li>
        <li>Retragerea consimțământului în orice moment, în cazul în care procesarea se bazează pe consimțământul dumneavoastră.</li>
      </ul>
      <p>
        Pentru a vă exercita oricare dintre aceste drepturi, vă rugăm să ne contactați la adresa de e-mail <a href="mailto:thermoexpertsolution@yahoo.com">thermoexpertsolution@yahoo.com</a>.
      </p>
  
      <h3>5. Securitatea datelor</h3>
      <p>
        Luăm măsuri de securitate adecvate pentru a proteja datele personale împotriva accesului neautorizat, modificării, dezvăluirii sau distrugerii. Cu toate acestea, vă rugăm să rețineți că niciun sistem de transmisie de date prin internet nu este complet sigur și că nu putem garanta securitatea absolută a informațiilor transmise către noi.
      </p>
  
      <h3>6. Modificări ale politicii de confidențialitate</h3>
      <p>
        Ne rezervăm dreptul de a actualiza această politică de confidențialitate în orice moment. Orice modificări vor fi publicate pe această pagină, iar, dacă este necesar, vă vom notifica prin e-mail sau pe site-ul nostru. Vă recomandăm să verificați periodic această pagină pentru a fi la curent cu ultimele informații despre practicile noastre de confidențialitate.
      </p>
  
      <h3>7. Contact</h3>
      <p>
        Dacă aveți întrebări sau nelămuriri legate de această politică de confidențialitate sau de modul în care gestionăm datele dumneavoastră, vă rugăm să ne contactați la adresa de e-mail <a href="mailto:thermoexpertsolution@yahoo.com">thermoexpertsolution@yahoo.com</a> sau la numărul de telefon <a href="tel:+40748905981">+40 748 905 981</a>.
      </p>
    </section>
  </template>
  
  <script setup lang="ts">

  interface Props {
    id?: string
  }

  withDefaults(defineProps<Props>(), {
    id: 'politica-confidentialitate',
  })
</script>
  
  <style scoped>
  .gdpr-policy {
    padding: 20px;
    background-color: #f9f9f9;
    color: #333;
    font-size: 16px;
    line-height: 1.6;
  }
  
  .gdpr-policy h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .gdpr-policy h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
  }
  
  .gdpr-policy p,
  .gdpr-policy ul {
    margin-bottom: 10px;
  }
  
  .gdpr-policy a {
    color: #0066cc;
    text-decoration: none;
  }
  
  .gdpr-policy a:hover {
    text-decoration: underline;
  }
  </style>
  
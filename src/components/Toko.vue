<template>
  <div class="page toko">
    <div class="frame">

      <section class="hero hero-toko">
        <div class="container hero-text">
          <div class="letter letter-toko">
            <div class="letter-layer-t letter-layer-first">
              <div class="letter-top"></div>
              <div class="letter-stem"></div>
            </div>
            <div class="letter-layer-t letter-layer-second">
              <div class="letter-top"></div>
              <div class="letter-stem"></div>
            </div>
            <div class="letter-layer-t letter-layer-third">
              <div class="letter-top"></div>
              <div class="letter-stem"></div>
            </div>
          </div>

          <div class="letter letter-toko">
            <div class="letter-layer-o letter-layer-first">
              <div class="letter-stem"></div>
            </div>
            <div class="letter-layer-o letter-layer-second">
              <div class="letter-stem"></div>
            </div>
            <div class="letter-layer-o letter-layer-third">
              <div class="letter-stem"></div>
            </div>
          </div>

          <div class="letter letter-toko">
            <div class="letter-layer-k letter-layer-first">
              <div class="letter-stem"></div>
              <div class="letter-center"></div>
              <div class="letter-cross-top"></div>
              <div class="letter-cross-bottom"></div>
              <div class="letter-top"></div>
              <div class="letter-bottom"></div>
            </div>
            <div class="letter-layer-k letter-layer-second">
              <div class="letter-stem"></div>
              <div class="letter-center"></div>
              <div class="letter-cross-top"></div>
              <div class="letter-cross-bottom"></div>
              <div class="letter-top"></div>
              <div class="letter-bottom"></div>
            </div>
            <div class="letter-layer-k letter-layer-third">
              <div class="letter-stem"></div>
              <div class="letter-center"></div>
              <div class="letter-cross-top"></div>
              <div class="letter-cross-bottom"></div>
              <div class="letter-top"></div>
              <div class="letter-bottom"></div>
            </div>
          </div>

          <div class="letter letter-toko">
            <div class="letter-layer-o letter-layer-first">
              <div class="letter-stem"></div>
            </div>
            <div class="letter-layer-o letter-layer-second">
              <div class="letter-stem"></div>
            </div>
            <div class="letter-layer-o letter-layer-third">
              <div class="letter-stem"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <h1 class="charm">Toko</h1>
          <p>Tokomono is opgericht in 2010 en betekent eenmanszaak (toko: bedrijf, mono: één). Over de jaren heb ik veel mooie projecten gemaakt onder deze noemer. Van een touchscreen agenda in VB6, tot een compleet open source CMS package in Laravel blijft Tokomono draaien voor zijn eigen klanten en voor privé projecten.</p>
          <p></p>
        </div>
      </section>

      <section>
        <div class="container">
          <tabs :options="{ useUrlFragment: false }">
            <tab name="<i class='fas fa-hands-helping'></i>" :id="'samenwerken'">
              <p>In mijn 20 jaar werkervaring heb ik veel geleerd over samenwerken, waaronder over samenwerken met 'aparte' types. Met een gevarieerd CV als die van mij kom je op plekken waar je werkt met verschillende type mensen.</p>
              <p>Ik ben er trots op te kunnen zeggen dat ik een lange tijd met zelfs de meest bijzondere types kan samenwerken. Ook als leidingevende kan ik prima uit de voeten. Mijn leidingevende stijl vertaald zich in: Vriendelijk, direct, complimenteus en effectief.</p>
            </tab>
            <tab name="<i class='fas fa-chalkboard-teacher'></i>" :id="'leraar'">
              <p>Het delen van kennis aan leergierigen zie ik als een voorrecht. Naast mijn werk als programmeur vind ik het belangrijk om de nieuwe generatie programmeurs correct te leren programmeren volgens de juiste standaarden. Dit is ooit ontstaan wegens mijn irritatie van het kennisniveau van stagaires. De kennis die zij hadden was ondermaats, maar met wat uitleg en begeleiding ging het steeds beter.</p>
              <p>Ik deel mijn kennis graag, maar hoor ook graag van anderen te melden hebben over hun expertise. Het is dan ook belangrijk om in contact te houden en te bespreken wat het team van een bepaald probleem of - belangrijker nog - oplossing vinden.</p>
            </tab>
            <tab name="<i class='fas fa-hat-wizard'></i>" :id="'magie'">
              <p>Code moet kloppen en elegant zijn. Dat is de reden waarom ik volgens het Clean Code concept werk. Dit zorgt ervoor dat elke functie of class expliciet verantwoordelijk is voor één ding. Dit maakt het ook makkelijker om testen en hergebruiken. Overdragen van code is hierdoor ook makkelijker of zelfs nihil. De code is duidelijk te lezen en overzichtelijk geplaatst in logische folders. Voor mij is de bedoeling van een programma zoveel mogelijk afvangt voor de bezoeker en gebruiker. Kortom, alles dat automagisch gaat.</p>
              <p>Mijn favoriete framwork om te gebruiken is Laravel. Dit framework barst echt uit elkaar van de programmeer standaarden en forceert programmeurs de juiste richting in. De meest gebruikte standaarden vind je terug in al mijn code. Maar als ik hier perse van af moet wijken is dat ook geen probleem.</p>
            </tab>
            <tab name="<i class='fas fa-tachometer-alt'></i>" :id="'snelheid'">
              <p>Optimalisatie van code is een zeer belangrijke factor. Alleen omdat code werkt in een test omgeving, betekend het niet dat het ook zo werkt voor 10000 bezoekers tegelijk. Ik bouw mijn code altijd zodanig op dat het veel gelijktijdige bezoekers aankan met minimale hardware, of zorg ervoor dat dit in de toekomst makkelijk aan te passen is.</p>
              <p>Hetzelfde geldt voor upgrades aan een platform. Als programmeurs ergens een bloedhekel aan hebben, dan is het onleesbare code van een vorige programmeur. Bij mij is dit vaak geen probleem gezien alles op de plek staat waar je zou verwachten, het werkt zoals je zou verwachten, met de comments op de juiste plekken en geschreven volgens de standaarden. Dit helpt aanzienlijk bij de productie snelheid van een upgrade.</p>
            </tab>
            <tab name="<i class='fas fa-laptop-code'></i>" :id="'tech'">
              <p>Wat je geschreven hebt moet ook online gezet worden. Mijn devops ervaring komt hier goed van pas. Ik ben geen echte nerd wizard op de commandline, maar ik kom een heel eind. Vooral mijn ervaring met het opzetten van automatische deployments bij meerdere hostingpartijen (Amazon, Rackspace, C-panel, Forge, Beanstalk, etc.) kan veel waarde toevoegen in een organisatie.</p>
              <p>'De juiste tooling' is voor ieder bedrijf anders. Ik heb met vele vormen en programma's gewerkt, waaronder: Jira, Gitlab, Github projectmanagement, fysieke kanban borden, Slack, Teams, Skype en weet ik hoeveel meer. Kortom, de kans is groot dat ik ook uw programma's al ken of dat ik er zonder al te veel moeite snel mee aan de slag kan. Mocht u geen programma's hebben, dan gebruik ik mijn persoonlijke favorieten.</p>
            </tab>
            <tab name="<i class='fas fa-bug'></i>" :id="'bugs'">
              <p>Bugs in je code kunnen voorkomen. Maar ik denk niet dat het ontoevallig is dat ik er minder heb dan vele anderen. Testen van mijn code doe ik 'with a vengeance'. Bij elke aanpassing die ik maak bekijk ik of de foutcode, die ik verwacht, ook klopt en duidelijk is (Error Driven Development). Dit gaat hand in hand met Test Driven Development. Want als je niet weet wat je errors zijn kun je er later door verrast worden.</p>
              <p>Gehackt worden is nooit leuk en de consequenties zijn soms niet te overzien. Mijn programma's zijn gelukkig nog nooit gehackt en er is ook nog nooit een datalek geweest voor zover ik weet. Om hier zeker van te zijn bouw ik, wanneer nodig, checkpoints in om dit in de gaten te kunnen houden.</p>
            </tab>
          </tabs>
        </div>
      </section>
      <section class="last">
        <div class="container">

        </div>
      </section>

    </div>
    <footer>
      <div class="frame">
        <div class="container">
          <span class="copy">&copy; Tokomono</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import Tabs from '@/components/Tabs'

export default {
  name: 'Toko',
  // components: {
  //   'tabs': Tabs
  // },
  mounted () {
    window.document.title = 'Tokomono - Toko'
  }
}
</script>

<style lang="scss">
  @import '../sass/app.scss';

  .toko .hero {
    // background: linear-gradient(135deg, #00727c 0%,#00727c 26%,#10ceb5 70%,#0dbaa9 100%);
    width: 100%;

    &-text {
      display: flex;
      padding: 25px 15px;
    }
  }
</style>

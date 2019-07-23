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
          <p>Tokomono is opgericht in 2010 en betekend eenmanszaak (toko: bedrijf, mono: één). Over de jaren heb ik veel mooie projecten gemaakt onder deze noemer. Van een touchscreen agenda in VB6, tot een compleet open source CMS package in Laravel blijft Tokomono draaien voor zijn eigen klanten en voor privé projecten.</p>
          <p></p>
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
// import Intro from '@/components/Intro'

export default {
  name: 'Toko',
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

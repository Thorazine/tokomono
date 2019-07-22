<template>
  <div class="page toko">
    <div class="frame">
      <section class="hero hero-toko">
        <div class="container hero-text">
          <div class="letter letter-toko">
            <div class="letter-t-top letter-top">
              <div class="letter-t-top-mid letter-mid">
                <div class="letter-t-top-in letter-in"></div>
              </div>
            </div>
            <div class="letter-t-stem letter-top">
              <div class="letter-t-stem-mid letter-mid">
                <div class="letter-t-stem-in letter-in"></div>
              </div>
            </div>
          </div>
          <div class="letter letter-toko">
            <div class="letter-o letter-top">
              <div class="letter-o-mid letter-mid">
                <div class="letter-o-in letter-in"></div>
              </div>
            </div>
          </div>
          <div class="letter letter-toko">
            <div class="letter-k">
              <div class="letter-k-stem letter-top">
                <div class="letter-k-stem-mid letter-mid">
                  <div class="letter-k-stem-in letter-in"></div>
                </div>
              </div>
              <div class="letter-k-topr letter-top">
                <div class="letter-k-topr-mid letter-mid">
                  <div class="letter-k-topr-in letter-in"></div>
                </div>
              </div>
              <div class="letter-k-botr letter-top">
                <div class="letter-k-botr-mid letter-mid">
                  <div class="letter-k-botr-in letter-in"></div>
                </div>
              </div>
              <div class="letter-k-stemtop letter-top">
                <div class="letter-k-stemtop-mid letter-mid">
                  <div class="letter-k-stemtop-in letter-in"></div>
                </div>
              </div>
              <div class="letter-k-stembot letter-top">
                <div class="letter-k-stembot-mid letter-mid">
                  <div class="letter-k-stembot-in letter-in"></div>
                </div>
              </div>
              <div class="letter-k-center letter-top">
                <div class="letter-k-center-mid letter-mid">
                  <div class="letter-k-center-in letter-in"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="letter letter-toko">
            <div class="letter-o letter-top">
              <div class="letter-o-mid letter-mid">
                <div class="letter-o-in letter-in"></div>
              </div>
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
      <footer>
        <div class="frame">
          <div class="container">
            <span class="copy">&copy; Tokomono</span>
          </div>
        </div>
      </footer>
    </div>
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

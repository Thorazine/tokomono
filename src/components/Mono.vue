<template>
  <div class="page mono">
    <div class="frame">
      <section class="hero hero-mono">
        <div class="container hero-text">
          <div class="letter letter-mono">
            <div class="letter-layer-m letter-layer-first">
              <div class="letter-stem-left"></div>
              <div class="letter-top"></div>
              <div class="letter-middle"></div>
              <div class="letter-stem-right"></div>
            </div>
            <div class="letter-layer-m letter-layer-second">
              <div class="letter-stem-left"></div>
              <div class="letter-top"></div>
              <div class="letter-middle"></div>
              <div class="letter-stem-right"></div>
            </div>
            <div class="letter-layer-m letter-layer-third">
              <div class="letter-stem-left"></div>
              <div class="letter-top"></div>
              <div class="letter-middle"></div>
              <div class="letter-stem-right"></div>
            </div>
          </div>

          <div class="letter letter-mono">
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

          <div class="letter letter-mono">
            <div class="letter-layer-m letter-layer-first">
              <div class="letter-stem-left"></div>
              <div class="letter-top"></div>
              <div class="letter-stem-right"></div>
            </div>
            <div class="letter-layer-m letter-layer-second">
              <div class="letter-stem-left"></div>
              <div class="letter-top"></div>
              <div class="letter-stem-right"></div>
            </div>
            <div class="letter-layer-m letter-layer-third">
              <div class="letter-stem-left"></div>
              <div class="letter-top"></div>
              <div class="letter-stem-right"></div>
            </div>
          </div>

          <div class="letter letter-mono">
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
          <h1 class="charm">Mono</h1>
          <p>Mono is het persoonlijke gedeelte, namelijk: Matthijs.</p>
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
export default {
  name: 'Mono',
  mounted () {
    window.document.title = 'Tokomono - Mono'
  }
}
</script>

<style lang="scss">
  @import '../sass/app.scss';

  .mono .hero {
    // background: linear-gradient(135deg, #ef3e3e 0%,#ef3e3e 26%,#efb43e 70%,#ef8b3e 100%);
    width: 100%;

    &-text {
      display: flex;
      padding: 25px 15px;
    }
  }
</style>

<template>
  <div class="page contact">
    <div class="frame">
      <section class="hero hero-contact">
        <div class="container hero-text">
          <div class="letter letter-hallo">
            <div class="letter-layer-h letter-layer-first">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-center"></div>
            </div>
            <div class="letter-layer-h letter-layer-second">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-center"></div>
            </div>
            <div class="letter-layer-h letter-layer-third">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-center"></div>
            </div>
          </div>

          <div class="letter letter-hallo">
            <div class="letter-layer-a letter-layer-first">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-center"></div>
              <div class="letter-stem-top"></div>
            </div>
            <div class="letter-layer-a letter-layer-second">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-center"></div>
              <div class="letter-stem-top"></div>
            </div>
            <div class="letter-layer-a letter-layer-third">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-center"></div>
              <div class="letter-stem-top"></div>
            </div>
          </div>

          <div class="letter letter-hallo">
            <div class="letter-layer-l letter-layer-first">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-botl"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-botr"></div>
            </div>
            <div class="letter-layer-l letter-layer-second">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-botl"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-botr"></div>
            </div>
            <div class="letter-layer-l letter-layer-third">
              <div class="letter-stem-left"></div>
              <div class="letter-stem-botl"></div>
              <div class="letter-stem-right"></div>
              <div class="letter-stem-botr"></div>
            </div>
          </div>

          <div class="letter letter-hallo">
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
          <h1 class="charm">Contact</h1>
          <p>
            <a href="mailto:matthijs@tokomono.nl">matthijs@tokomono.nl</a><br>
            <a href="tel:+31642442327">+316 4244 2327</a>
          </p>
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
  name: 'Contact',
  mounted () {
    window.document.title = 'Tokomono - Contact'
  }
}
</script>

<style lang="scss">
  @import '../sass/app.scss';

  .contact .hero {
    width: 100%;

    &-text {
      display: flex;
      padding: 25px 15px;
    }
  }
</style>

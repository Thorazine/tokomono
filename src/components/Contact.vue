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
        </div>
      </section>
      <section>
        <div class="container">
          <div class="form form-padding">
            <form>
              <h2 class="charm">Bel mij terug</h2>
              <label for="name" class="form-group">
                <input type="text" class="form-control" id="name" v-model="name" placeholder=" " required autocomplete="name">
                <span class="form-label contact-color">Naam</span>
                <span class="form-border contact-bg"></span>
              </label>

              <label for="telephone" class="form-group">
                <input type="text" class="form-control" id="telephone" v-model="telephone" placeholder=" " required autocomplete="tel">
                <span class="form-label contact-color">Telefoonnummer</span>
                <span class="form-border contact-bg"></span>
              </label>

              <label for="subject" class="form-group">
                <input type="text" class="form-control" id="subject" v-model="subject" placeholder=" " required>
                <span class="form-label contact-color">Onderwerp</span>
                <span class="form-border contact-bg"></span>
              </label>

              <button type="submit" class="button button-submit button-right">Do it!</button>
            </form>
            <aside>
              Heeft u vragen of opmerkingen, laat het weten. Vul de gewenste gegevens in en u wordt teruggebeld.
            </aside>
          </div>
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
export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      email: '',
      subject: ''
    }
  },
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

      @include breakpoint('mobile-portrait') {
        padding: 15px 10px;
      }
    }
  }
</style>

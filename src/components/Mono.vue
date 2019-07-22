<template>
  <div class="page mono">
    <div class="frame">
      <section class="hero hero-mono">
        <div class="container hero-text">
          <div class="letter letter-mono">
            <div class="letter-m-top">
              <div class="letter-m-top-mid">
                <div class="letter-m-top-in"></div>
              </div>
            </div>
            <div class="letter-m-stem">
              <div class="letter-m-stem-mid">
                <div class="letter-m-stem-in"></div>
              </div>
            </div>
            <div class="letter-m-steml">
              <div class="letter-m-steml-mid">
                <div class="letter-m-steml-in"></div>
              </div>
            </div>
            <div class="letter-m-stemr">
              <div class="letter-m-stemr-mid">
                <div class="letter-m-stemr-in"></div>
              </div>
            </div>
          </div>
          <div class="letter letter-mono">
            <div class="letter-o">
              <div class="letter-o-mid">
                <div class="letter-o-in"></div>
              </div>
            </div>
          </div>
          <div class="letter letter-mono">
            <div class="letter-n-cross">
              <div class="letter-n-cross-mid">
                <div class="letter-n-cross-in"></div>
              </div>
            </div>
            <div class="letter-n-steml">
              <div class="letter-n-steml-mid">
                <div class="letter-n-steml-in"></div>
              </div>
            </div>
            <div class="letter-n-stemr">
              <div class="letter-n-stemr-mid">
                <div class="letter-n-stemr-in"></div>
              </div>
            </div>
          </div>
          <div class="letter letter-mono">
            <div class="letter-o">
              <div class="letter-o-mid">
                <div class="letter-o-in"></div>
              </div>
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

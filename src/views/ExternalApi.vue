<template>
  <div>
    <div class="mb-5">
      <h1>External API</h1>
      <p>
        Call an external API by clicking the button below. This will call the
        external API using an access token, and the API will validate it using
        the API's audience value.
      </p>
      <p>Count is:{{ responseApi }}</p>
      <button class="btn btn-primary mt-5" @click="getData">Call API</button>
    </div>

    <div class="result-block-container">
      <div :class="['result-block', executed ? 'show' : '']">
        <h6 class="muted">Result</h6>

        <pre v-highlightjs="responseApi">
          <code class="js rounded"></code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Api',
  data() {
    return {
      apiMessage: null,
      executed: false
    }
  },
  computed: {
    responseApi() {
      //return this.$store.state.fixedstations.count
      return this.$store.state.fixedstations.dataApi
    }
  },
  methods: {
    async getData() {
      // await this.$store.dispatch('fixedstations/increment')
      await this.$store.dispatch('fixedstations/getDataApi', {
        http: this.$http,
        url: 'https://airheritage.portici.enea.it/rest/api/v1/fixed/status/'
      })
    },

    async callApi2() {
      this.executed = true
      try {
        const { data } = await this.$http.get(
          'https://gorest.co.in/public-api/posts5'
        )

        this.apiMessage = data
      } catch (error) {
        console.log(error)
        this.apiMessage = error.stack
      }
    },

    callApi() {
      this.executed = true

      const accessToken = 'gjkgkjgk' //await this.$auth.getTokenSilently();
      this.$http
        .get('/api/external', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(data => (this.apiMessage = data))
        .catch(
          error =>
            //console.log(err);
            (this.apiMessage = `Error: the server responded with '${error.response.status}: ${error.response.statusText}'`)
        )
    }
  }
}
</script>

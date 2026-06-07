<template>
  <main class="model-page">

    <div class="breadcrumb">
      Home /
      {{ modelData.marca || 'Marca' }} /
      {{ modelData.modelo || 'Modelo' }}
    </div>

    <section class="model-section">

      <div class="gallery">

        <div class="main-image">
          <img
            src="https://imgnike-a.akamaihd.net/1300x1300/01708551A2.jpg"
            alt="Sneaker"
          >
        </div>

        <div class="thumbnails">
          <img
            v-for="n in 5"
            :key="n"
            src="https://imgnike-a.akamaihd.net/1300x1300/01708551A2.jpg"
            alt=""
          >
        </div>

      </div>

      <div class="model-info">

        <h1>
          {{ modelData.nome || 'Carregando...' }}
        </h1>

        <div class="meta">
          {{ modelData.marca }}
          •
          {{ modelData.modelo }}
          •
          {{ modelData.categoria }}
          •
          {{ modelData.genero }}
        </div>

        <div class="rating">
          ★★★★★
        </div>

        <div class="lowest-price-label">
          Menor preço encontrado
        </div>

        <div class="price">
          R$ {{ lowestPrice }}
        </div>

        <div class="status">
          {{ totalOffers }} ofertas encontradas
        </div>

        <div class="stats">

          <div class="stat-card">
            <strong>{{ totalOffers }}</strong>
            <span>Ofertas</span>
          </div>

          <div class="stat-card">
            <strong>R$ {{ lowestPrice }}</strong>
            <span>Menor preço</span>
          </div>

          <div class="stat-card">
            <strong>R$ {{ averagePrice }}</strong>
            <span>Preço médio</span>
          </div>

        </div>

      </div>

      <div class="price-history">

        <h3>Histórico de Preço</h3>

        <div class="chart-placeholder">
          Gráfico será conectado futuramente
        </div>

      </div>

    </section>

    <section class="features">

      <div class="feature-card">
        Compra protegida
      </div>

      <div class="feature-card">
        Vendedores verificados
      </div>

      <div class="feature-card">
        Histórico de preços
      </div>

      <div class="feature-card">
        Alertas de preço
      </div>

    </section>

    <section class="details">

      <div class="specs">

        <h2>Detalhes do Modelo</h2>

        <table>

          <tbody>

            <tr>
              <td>Marca</td>
              <td>{{ modelData.marca }}</td>
            </tr>

            <tr>
              <td>Modelo</td>
              <td>{{ modelData.modelo }}</td>
            </tr>

            <tr>
              <td>Colorway</td>
              <td>{{ modelData.colorway }}</td>
            </tr>

            <tr>
              <td>SKU</td>
              <td>{{ modelData.id_sku_global }}</td>
            </tr>

            <tr>
              <td>Lançamento</td>
              <td>{{ modelData.anoLancamento }}</td>
            </tr>

          </tbody>

        </table>

      </div>

      <div class="offers">

        <h2>Ofertas Disponíveis</h2>

        <div class="offers-header">
          <span>Vendedor</span>
          <span>Tamanho</span>
          <span>Preço</span>
          <span></span>
        </div>

        <div
          v-for="(offer, index) in offers"
          :key="index"
          class="offer-row"
        >

          <div class="seller">
            {{ offer.vendedor }}
          </div>

          <div>
            {{ offer.tamanho }}
          </div>

          <div class="offer-price">
            R$ {{ offer.preco }}
          </div>

          <button class="buy-button">
            Comprar
          </button>

        </div>

      </div>

    </section>

  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getProducts } from '@/services/productService'

const offers = ref([])

onMounted(async () => {
  try {
    const products = await getProducts()

    offers.value = products

  } catch (error) {
    console.error('Erro ao carregar produtos:', error)
  }
})

const totalOffers = computed(() => {
  return offers.value.length
})

const lowestPrice = computed(() => {

  if (!offers.value.length) return 0

  return Math.min(
    ...offers.value.map(
      product => Number(product.preco)
    )
  )
})

const averagePrice = computed(() => {

  if (!offers.value.length) return 0

  const total = offers.value.reduce(
    (sum, product) => sum + Number(product.preco),
    0
  )

  return Math.round(total / offers.value.length)
})

const modelData = computed(() => {

  if (!offers.value.length) {
    return {}
  }

  return offers.value[0]
})
</script>

<style scoped>

.model-page{
  max-width:1400px;
  margin:auto;
  padding:30px;
}

.breadcrumb{
  color:#777;
  margin-bottom:20px;
}

.model-section{
  display:grid;
  grid-template-columns:1fr 1fr 350px;
  gap:25px;
}

.gallery{
  display:flex;
  flex-direction:column;
}

.main-image{
  background:white;
  border-radius:12px;
  padding:20px;
}

.main-image img{
  width:100%;
  display:block;
}

.thumbnails{
  display:flex;
  gap:10px;
  margin-top:12px;
}

.thumbnails img{
  width:70px;
  height:70px;
  border:1px solid #ddd;
  border-radius:8px;
  object-fit:cover;
}

.model-info{
  background:white;
  padding:25px;
  border-radius:12px;
}

.model-info h1{
  margin-bottom:10px;
}

.meta{
  color:#666;
}

.rating{
  margin-top:10px;
}

.lowest-price-label{
  margin-top:25px;
  color:#666;
  font-size:14px;
}

.price{
  font-size:48px;
  font-weight:bold;
  color:#e53935;
}

.status{
  color:green;
  font-weight:500;
}

.stats{
  display:flex;
  gap:15px;
  margin-top:30px;
}

.stat-card{
  flex:1;
  background:#f5f5f5;
  border-radius:10px;
  padding:15px;
  text-align:center;
}

.price-history{
  background:white;
  border-radius:12px;
  padding:20px;
}

.chart-placeholder{
  margin-top:15px;
  height:250px;
  background:#f5f5f5;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:8px;
}

.features{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:15px;
  margin-top:25px;
}

.feature-card{
  background:white;
  border-radius:12px;
  padding:20px;
  text-align:center;
}

.details{
  display:grid;
  grid-template-columns:350px 1fr;
  gap:20px;
  margin-top:25px;
}

.specs,
.offers{
  background:white;
  border-radius:12px;
  padding:20px;
}

table{
  width:100%;
  border-collapse:collapse;
}

td{
  padding:14px 10px;
  border-bottom:1px solid #eee;
}

.offers-header,
.offer-row{
  display:grid;
  grid-template-columns:2fr 1fr 1fr 140px;
  align-items:center;
}

.offers-header{
  padding:12px 0;
  border-bottom:2px solid #eee;
  font-weight:600;
}

.offer-row{
  padding:18px 0;
  border-bottom:1px solid #eee;
}

.seller{
  font-weight:600;
}

.offer-price{
  color:#e53935;
  font-weight:bold;
}

.buy-button{
  background:#e53935;
  color:white;
  border:none;
  border-radius:6px;
  padding:10px;
  cursor:pointer;
}

@media(max-width:1100px){

  .model-section{
    grid-template-columns:1fr;
  }

  .details{
    grid-template-columns:1fr;
  }

  .features{
    grid-template-columns:1fr 1fr;
  }

}

@media(max-width:768px){

  .features{
    grid-template-columns:1fr;
  }

  .offers-header,
  .offer-row{
    grid-template-columns:1fr;
    gap:10px;
  }

  .stats{
    flex-direction:column;
  }

}
</style>
<template>
  <main class="product-page">

    <div class="page-header">
      <h1>CADASTRAR PRODUTO</h1>

      <router-link
        to="/"
        class="sell-link"
      >
        Voltar para Produtos
      </router-link>
    </div>

    <div class="form-grid">

      <!-- IMAGENS -->

      <section class="card image-card">

        <h2>Imagens do Produto</h2>

        <div
          class="main-image"
          @click="openFilePicker"
        >

          <img
            v-if="preview"
            :src="preview"
            class="preview"
            alt="Preview da imagem"
          >

          <template v-else>
            <span class="plus">+</span>
            <span>Adicionar imagem principal</span>
          </template>

          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            hidden
            @change="handleFile"
          >

        </div>

        <div class="gallery">

          <div
            v-for="n in 4"
            :key="n"
            class="thumb"
          >
            +
          </div>

        </div>

      </section>

      <!-- INFORMAÇÕES BÁSICAS -->

      <section class="card info-card">

        <h2>Informações Básicas</h2>

        <div class="form-group">
          <label>Nome do Produto*</label>
          <input
            type="text"
            v-model="form.nome"
          >
        </div>

        <div class="form-group">
          <label>Marca*</label>
          <input
            type="text"
            v-model="form.marca"
          >
        </div>

        <div class="form-group">
          <label>Modelo*</label>
          <input
            type="text"
            v-model="form.modelo"
          >
        </div>

        <div class="form-group">
          <label>Colorway*</label>
          <input
            type="text"
            v-model="form.colorway"
          >
        </div>

        <div class="form-group">
          <label>Código SKU*</label>
          <input
            type="text"
            v-model="form.sku"
          >
        </div>

        <div class="form-group">
          <label>Ano de Lançamento*</label>
          <input
            type="number"
            v-model="form.anoLancamento"
          >
        </div>

        <div class="form-group">
          <label>Descrição*</label>
          <textarea
            rows="5"
            v-model="form.descricao"
          ></textarea>
        </div>

      </section>

    </div>

    <div class="bottom-grid">

      <!-- VARIANTES -->

      <section class="card">

        <h2>Variantes</h2>

        <div class="form-group">
          <label>Tamanho*</label>

          <select v-model="form.tamanho">
            <option value="">Selecione</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
          </select>
        </div>

        <div class="form-group">
          <label>Cor*</label>

          <select v-model="form.cor">
            <option value="">Selecione</option>
            <option>White / Black</option>
            <option>Black</option>
            <option>White</option>
          </select>
        </div>

        <button class="outline-btn">
          Adicionar Variante
        </button>

      </section>

      <!-- PREÇO E ESTOQUE -->

      <section class="card">

        <h2>Preço e Estoque</h2>

        <div class="form-group">
          <label>Vendedor*</label>
          <input
            type="text"
            v-model="form.vendedor"
          >
        </div>

        <div class="form-group">
          <label>Preço*</label>
          <input
            type="number"
            v-model="form.preco"
          >
        </div>

        <div class="form-group">
          <label>Estoque*</label>
          <input
            type="number"
            v-model="form.estoque"
          >
        </div>

        <div class="form-group">
          <label>Condição*</label>

          <select v-model="form.condicao">
            <option value="">Selecione</option>
            <option>Novo</option>
            <option>Usado</option>
          </select>
        </div>

      </section>

      <!-- OUTRAS INFORMAÇÕES -->

      <section class="card">

        <h2>Outras Informações</h2>

        <div class="form-group">
          <label>Categoria*</label>

          <select v-model="form.categoria">
            <option value="">Selecione</option>
            <option>Casual</option>
            <option>Corrida</option>
            <option>Basquete</option>
          </select>
        </div>

        <div class="form-group">
          <label>Gênero*</label>

          <select v-model="form.genero">
            <option value="">Selecione</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Unissex</option>
          </select>
        </div>

      </section>

    </div>

    <div class="actions">

      <button
        class="save-btn"
        @click="saveProduct"
      >
        Salvar Produto
      </button>

    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import { createProduct } from '@/services/productService'

const fileInput = ref(null)
const preview = ref(null)

const form = ref({
  nome: '',
  marca: '',
  modelo: '',
  colorway: '',
  sku: '',
  descricao: '',

  tamanho: '',
  cor: '',

  preco: '',
  estoque: '',
  condicao: '',

  categoria: '',
  genero: '',

  anoLancamento: '',
  vendedor: ''
})

function openFilePicker() {
  fileInput.value.click()
}

function handleFile(event) {

  const file = event.target.files[0]

  if (!file) return

  preview.value = URL.createObjectURL(file)
}

async function saveProduct() {

  const payload = {
    id_sku_global: form.value.sku,

    nome: form.value.nome,
    marca: form.value.marca,
    modelo: form.value.modelo,
    colorway: form.value.colorway,

    descricao: form.value.descricao,

    tamanho: form.value.tamanho,
    cor: form.value.cor,

    preco: Number(form.value.preco),
    estoque: Number(form.value.estoque),

    condicao: form.value.condicao,

    categoria: form.value.categoria,
    genero: form.value.genero,

    anoLancamento: form.value.anoLancamento,
    vendedor: form.value.vendedor,

    imagemPrincipal: preview.value
  }

  try {

    const response = await createProduct(payload)

    console.log(response)

    alert('Produto cadastrado com sucesso')

  } catch(error) {

    console.error(error)

    alert('Erro ao cadastrar produto')
  }
}
</script>

<style scoped>

.product-page{
  padding:40px;
  background:#f4f4f4;
  min-height:100vh;
}

.page-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:25px;
}

.page-header h1{
  font-size:24px;
}

.sell-link{
  background:#d93b3b;
  color:white;
  text-decoration:none;
  padding:12px 18px;
  border-radius:6px;
  font-weight:600;
}

.form-grid{
  display:grid;
  grid-template-columns:300px 1fr;
  gap:20px;
}

.bottom-grid{
  margin-top:20px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.card{
  background:white;
  border-radius:10px;
  padding:20px;
  box-shadow:0 2px 6px rgba(0,0,0,.08);
}

.card h2{
  margin-bottom:15px;
  font-size:14px;
  color:#c43d3d;
}

.main-image{
  height:250px;
  border:2px dashed #ddd;
  border-radius:8px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10px;
  cursor:pointer;
  overflow:hidden;
  background:white;
}

.main-image:hover{
  border-color:#d93b3b;
}

.plus{
  font-size:40px;
  color:#999;
}

.preview{
  width:100%;
  height:100%;
  object-fit:contain;
}

.gallery{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
  margin-top:15px;
}

.thumb{
  height:60px;
  border:2px dashed #ddd;
  border-radius:6px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.form-group{
  margin-bottom:15px;
}

label{
  display:block;
  margin-bottom:6px;
  font-weight:500;
}

input,
textarea,
select{
  width:100%;
  padding:10px;
  border:1px solid #ccc;
  border-radius:4px;
}

.outline-btn{
  width:100%;
  padding:10px;
  cursor:pointer;
}

.actions{
  display:flex;
  justify-content:center;
  margin-top:30px;
}

.save-btn{
  background:#d93b3b;
  color:white;
  border:none;
  padding:14px 40px;
  border-radius:6px;
  cursor:pointer;
  font-weight:600;
}

@media(max-width:992px){

  .form-grid{
    grid-template-columns:1fr;
  }

  .bottom-grid{
    grid-template-columns:1fr;
  }

}
</style>
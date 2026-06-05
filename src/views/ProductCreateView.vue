<template>
  <main class="product-page">

    <div class="page-header">
      <h1>CADASTRAR PRODUTO</h1>

      <router-link to="/" class="sell-link">
        Voltar para Produtos
      </router-link>
    </div>

    <div class="form-grid">

      <section class="card image-card">

        <h2>Imagens do Produto</h2>

        <div class="main-image">
          +
          <span>Adicionar imagem principal</span>
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

      <section class="card info-card">

        <h2>Informações Básicas</h2>

        <div class="form-group">
          <label>Nome do Produto*</label>
          <input type="text">
        </div>

        <div class="form-group">
          <label>Marca*</label>
          <input type="text">
        </div>

        <div class="form-group">
          <label>Modelo*</label>
          <input type="text">
        </div>

        <div class="form-group">
          <label>Código SKU</label>
          <input type="text">
        </div>

        <div class="form-group">
          <label>Descrição*</label>
          <textarea rows="5"></textarea>
        </div>

      </section>

    </div>

    <div class="bottom-grid">

      <section class="card">

        <h2>Variantes</h2>

        <select>
          <option>Tamanho</option>
        </select>

        <select>
          <option>Cor</option>
        </select>

        <select>
          <option>Edição</option>
        </select>

        <button class="outline-btn">
          Adicionar Variante
        </button>

      </section>

      <section class="card">

        <h2>Preço e Estoque</h2>

        <input
          type="number"
          placeholder="Preço"
        >

        <input
          type="number"
          placeholder="Estoque"
        >

        <select>
          <option>Condição</option>
        </select>

      </section>

      <section class="card">

        <h2>Outras Informações</h2>

        <select>
          <option>Categoria</option>
        </select>

        <select>
          <option>Gênero</option>
        </select>

        <input
          type="date"
        >

      </section>

    </div>

    <div class="actions">
      <button class="save-btn">
        Salvar Produto
      </button>
    </div>

  </main>
</template>

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

.back-btn{
  background:#d93b3b;
  color:white;
  border:none;
  padding:12px 18px;
  border-radius:6px;
  cursor:pointer;
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
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10px;
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
  margin-top:15px;
  width:100%;
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
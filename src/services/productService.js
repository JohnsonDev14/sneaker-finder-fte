const API_URL = 'https://testeapi-eta.vercel.app/sneakers'

export async function getProducts() {

  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }

  return await response.json()
}

export async function getProductBySku(sku) {

  const response = await fetch(`${API_URL}/${sku}`)

  if (!response.ok) {
    throw new Error('Produto não encontrado')
  }

  return await response.json()
}

export async function createProduct(product) {

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })

  if (!response.ok) {

    const error = await response.json()

    throw new Error(error.error)
  }

  return await response.json()
}
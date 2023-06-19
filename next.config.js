/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    apiUrl: "https://esaintsmarket.onrender.com",
  },
  images: {
    domains: [
      "www.receitasemenus.net",
      "cdn360hyper.azureedge.net",
      "cdnx.jumpseller.com",
      "www.grafe-e-faca.com",
      "imagens.publico.pt",
      "i.ytimg.com",
      "minhofumeiro.pt",
      "3.bp.blogspot.com",
      "ireland.apollo.olxcdn.com",
      "foodandroad.com",
      "tezturas.pt",
      "www.auchan.pt",
      "groupsumi.pt",
      "img.misterius.pt",
      "www.mascarilha.pt",
      "cdn.glitch.com",
    ],
  }
}

module.exports = nextConfig
